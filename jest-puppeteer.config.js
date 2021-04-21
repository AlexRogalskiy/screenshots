// eslint-disable-next-line @typescript-eslint/no-require-imports,@typescript-eslint/no-var-requires
const path = require('path')

const extPath = path.join(__dirname, './dist')

module.exports = {
    launch: {
        dumpio: true,
        headless: false,
        executablePath: process.env.PUPPETEER_EXEC_PATH,
        args: ['--no-sandbox', `--disable-extensions-except=${extPath}`, `--load-extension=${extPath}`],
    },
}
