import * as fs from 'fs'
import * as path from 'path'
import crypto from 'crypto'

const base64 = (filename, data) => {
  const type = filename.endsWith('.svg') ? 'svg+xml' : path.extname(filename).slice(1) || 'png';
  return `data:image/${type};base64,${data.toString('base64')}`;
};


export default {
  getCacheKey: (_fileData, filename) => crypto.createHash('md5').update(filename).digest('hex'),
  process: (sourceText, filename) => `module.exports = ${JSON.stringify(base64(filename, fs.readFileSync(filename)))};`,
}