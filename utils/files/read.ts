import fs from 'fs';

function readFile(file: string) {
    const content = fs.readFileSync(file, { flag: 'r+' })
    return content
}

export default readFile;