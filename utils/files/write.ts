import fs from 'fs';

function writeFile(file: string, content: string) {
    return fs.writeFileSync(file, content)
}

export default writeFile;