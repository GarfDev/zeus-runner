import fs from 'fs'

function readFile(file: string) {
  try {
    const content = fs.readFileSync(file, { flag: 'r+' })
    return content
  } catch {
      return {};
  }
}

export default readFile
