import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { readFile, existsSync } from 'fs'
import { registerRoutes } from './routes.mjs';
import { buildProject } from './build.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3000;

const srcDir = path.resolve('src/demo/public');
const buildDir = path.resolve('src/build');

await buildProject(srcDir, buildDir);

registerRoutes(app)

app.use((req, res, next) => {
    const buildFilePath = path.join(__dirname, '../../build', req.path);
    const srcFilePath = path.join(__dirname, '../public', req.path);
    const moduleFilePath = path.join(__dirname, '../../', req.path);

    if (existsSync(buildFilePath)) {
        return res.sendFile(buildFilePath);
    }

    if (existsSync(srcFilePath)) {
        return res.sendFile(srcFilePath);
    }

    if (existsSync(moduleFilePath)) {
        return res.sendFile(moduleFilePath);
    }

    next();
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
