import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { readFile } from 'fs'
import { renderComponent } from '../../soft/ssr/renderComponent.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const router = express()


router.get("/", async (req, res) => {
    readFile(path.join(__dirname, '../public/pages/index/index.html'), 'utf8', async (err, htmlContent) => {
        if (err) {
            console.error('Error reading the HTML file:', err);
            return;
        }

        const module = await import('../../build/pages/index/index.mjs');
        res.status(200).send(await renderComponent(module, htmlContent))
    })

    // res.sendFile(path.join(__dirname, '../public/pages/index/index.html'));
})

export function registerRoutes(app) {
    app.use("/", router)
}