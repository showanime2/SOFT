import { promises as fs } from 'fs';
import path from 'path';
import { extractElementFunction } from '../src/compiler/extractFunctionBlocks.mjs';
import { extractElement } from '../src/compiler/extractElement.mjs';
import { JSDOM } from 'jsdom';
import { replaceElement } from '../src/compiler/replaceElement.mjs';

function generateUniqueId() {
    const alphanumericSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let uniqueId = 'sa-';

    for (let i = 0; i < 9; i++) {
        uniqueId += alphanumericSet.charAt(Math.floor(Math.random() * alphanumericSet.length));
    }

    return uniqueId;
}

async function buildFile(srcFilePath, destFilePath) {
    try {
        let data = await fs.readFile(srcFilePath, 'utf8');

        const uniqueId = generateUniqueId();
        data = `const COMPONENT_ID = "${uniqueId}";\n\n` + data;
        data = data.replace('function script(element', `function script(element = document.querySelector(".${uniqueId}")`);

        const lines = data.split('\n').map(line => line + '\n');

        const functionBlock = extractElementFunction(lines);
        const element = extractElement(functionBlock);
        const transformedElement = addComponentIdToElements(element.element, uniqueId);
        data = replaceElement(lines, element.start, element.end, transformedElement);

        await fs.mkdir(path.dirname(destFilePath), { recursive: true });
        await fs.writeFile(destFilePath, data);

        console.log(`Built: ${destFilePath}`);
    } catch (error) {
        console.error("Error processing " + srcFilePath + ":", error);
    }
}

function addComponentIdToElements(element, componentId) {
    const jsdom = new JSDOM(element);
    const allElements = jsdom.window.document.body.querySelectorAll("*");

    for (let i = 0; i < allElements.length; i++) {
        allElements[i].classList.add(componentId);
    }

    return jsdom.window.document.body.innerHTML;
}

async function findAndBuildFiles(srcDir, buildDir, baseDir, subDir) {
    const entries = await fs.readdir(srcDir, { withFileTypes: true });
    
    for (const entry of entries) {
        const srcPath = path.join(srcDir, entry.name);
        const relativePath = path.relative(baseDir, srcPath);
        const destPath = path.join(buildDir, subDir, relativePath);

        if (entry.isDirectory()) {
            await findAndBuildFiles(srcPath, buildDir, baseDir, subDir);
        } else if (entry.name.endsWith('.mjs')) {
            await buildFile(srcPath, destPath);
        }
    }
}

async function copyOtherDirectories(srcDir, buildDir, excludeDirs) {
    const entries = await fs.readdir(srcDir, { withFileTypes: true });

    for (const entry of entries) {
        if (!entry.isDirectory() || excludeDirs.includes(entry.name)) continue;

        const srcPath = path.join(srcDir, entry.name);
        const destPath = path.join(buildDir, entry.name);

        await copyDirectory(srcPath, destPath);
    }
}

async function copyDirectory(src, dest) {
    await fs.mkdir(dest, { recursive: true });
    const entries = await fs.readdir(src, { withFileTypes: true });

    for (const entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);

        if (entry.isDirectory()) {
            await copyDirectory(srcPath, destPath);
        } else {
            await fs.copyFile(srcPath, destPath);
        }
    }
}

export async function buildProject(srcDir, buildDir) {
    try {
        // Build pages
        const pagesDir = path.join(srcDir, 'pages');
        await findAndBuildFiles(pagesDir, buildDir, pagesDir, 'pages');
        console.log('Pages built successfully!');

        // Build components
        const componentsDir = path.join(srcDir, 'components');
        await findAndBuildFiles(componentsDir, buildDir, componentsDir, 'components');
        console.log('Components built successfully!');

        // Copy other directories
        const excludeDirs = ['pages', 'components'];
        await copyOtherDirectories(srcDir, buildDir, excludeDirs);
        console.log('Other directories copied successfully!');

    } catch (error) {
        console.error('Error building project:', error);
    }
}