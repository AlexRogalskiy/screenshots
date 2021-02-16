// eslint-disable-next-line @typescript-eslint/no-require-imports,@typescript-eslint/no-var-requires
const { execSync } = require('child_process')

console.log('Running chrome browser installer...')

try {
    execSync('npm run chrome:browser')
} catch (e) {
    console.error(e)
}

console.log('Done.')
