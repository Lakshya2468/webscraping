const { writeFile } = require("fs/promises");
const puppeteer = require("puppeteer");

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("https://www.croma.com/");
    const element = await page.$('#searchV2');
    await element.type("mobile");
    await page.keyboard.press("Enter");
    await page.waitForSelector('.product-title a', { visible: true, timeout: 15000 });
    const search = [];

    const grabdata = await page.evaluate(() => {
        const grab = document.querySelectorAll(".product-title a");
        const img = document.querySelectorAll(".product-img a");
        const price = document.querySelectorAll(".new-price .amount");
        const data = [];

        grab.forEach((element, index) => {
            data.push({
                name: element.innerHTML,
                image: img[index].href,
                price: price[index].innerHTML,
            });
        });

        return data;
    });

    search.push(grabdata);
    await writeFile('one.json', JSON.stringify(search, null, 3));
    await browser.close();
})();
