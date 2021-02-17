import qawolf from 'qawolf'

let browser
let page

beforeAll(async () => {
    browser = await qawolf.launch()
    const context = await browser.newContext()
    await qawolf.register(context)
    page = await context.newPage()
})

afterAll(async () => {
    await qawolf.stopVideos()
    await browser.close()
})

test('tagSearch', async () => {
    await page.goto('https://bestofjs-webui.vercel.app/')
    await page.click('#main')
    await page.click('text=Pick tags or enter keywords...')
    await page.fill('#react-select-2-input', 'react')
    await page.click('div:nth-of-type(2) div:nth-of-type(4)')
    await qawolf.scroll(page, 'html', { x: 0, y: 78 })
    await page.click('[href="/projects/react"]')
    await qawolf.scroll(page, 'html', { x: 0, y: 536 })
    await page.click('[href="https://reactjs.org/"]')
    //await qawolf.scroll(page, 'html', { x: 0, y: 0 })
    //await page.press('body', 'ArrowUp')
})
