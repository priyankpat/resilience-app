#!/usr/bin/env node
/**
 * Generates a mock data file given a file of typescript interfaces
 * usage `./generateMocks <file_paths>
 *
 * This script is really jank. Should really be done with a typescript AST transformer
 */

const path = require("path");
const fs = require("fs");
const { execSync } = require("child_process");

const TEMP_FILE = path.join(__dirname, "temp_ts_file.ts");

const files = process.argv.slice(2);
const cwd = process.cwd();

const regex = /interface (\w*)/g;
const imports = 'import { createMock } from "ts-auto-mock";\n';

for (let file of files) {
  const filePath = path.join(cwd, file);

  const contents = fs.readFileSync(filePath).toString();

  const matchs = contents.matchAll(regex);
  const mockLines = [];
  let index = 0;
  for (const match of matchs) {
    const type = match[1];
    console.log(type);
    mockLines.push(`\nconst mock${index} = createMock<${type}>();
      console.log('export const ${type} = ', JSON.stringify(mock${index++}, null, 4), '\\n');
    `);
  }

  const newFile = imports + contents + mockLines.join("\n");

  fs.writeFileSync(TEMP_FILE, newFile);

  const output = execSync(` npx ts-node --compiler ttypescript "${TEMP_FILE}"`).toString();

  const mockFile = path.join(path.dirname(filePath), "mock-" + path.basename(filePath));

  fs.writeFileSync(mockFile, output);

  fs.unlinkSync(TEMP_FILE);
}
