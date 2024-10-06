import express from 'express';
import path from 'path';
import { readFile, existsSync } from 'fs'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { renderComponent } from '../src/soft/ssr/render.mjs';
import { buildProject } from './build.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const srcDir = path.resolve('src');
const buildDir = path.resolve('build');

await buildProject(srcDir, buildDir);

const app = express();

app.use((req, res, next) => {
    const buildFilePath = path.join(__dirname, '../build', req.path);
    const srcFilePath = path.join(__dirname, '../src', req.path);

    if (existsSync(buildFilePath)) {
        return res.sendFile(buildFilePath);
    }

    if (existsSync(srcFilePath)) {
        return res.sendFile(srcFilePath);
    }

    next();
});

app.get('/', async (req, res) => {
    const SSR = false
    if (SSR) {
        readFile(path.join(__dirname, '../src/pages/index/index.html'), 'utf8', async (err, htmlContent) => {
            if (err) {
                console.error('Error reading the HTML file:', err);
                return;
            }
            
            const component = await import('../build/pages/index/index.mjs');
            res.status(200).send(await renderComponent(await component.Index, htmlContent))
        })
    } else {
        res.sendFile(path.join(__dirname, '../src/pages/index/index.html'));
    }

});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
