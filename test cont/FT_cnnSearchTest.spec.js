// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')
require('dotenv').config()
for (let i = 0; i < 1; i++) {
  describe('Testiranje search funkcije.', function () {
    this.timeout(30000)
    let driver
    let vars
    beforeEach(async function () {
      driver = await new Builder().forBrowser('chrome').usingServer('http://localhost:9515').build()
      vars = {}
    })
    afterEach(async function () {
      await driver.quit();
    })
    it('Testiranje search funkcije.', async function () {

      // //obasno dobivam * StaleElementReferenceError: stale element reference: element is not attached to the page document
      //(Session info: chrome=100.0.4896.127)* error
      // 1 | shrani search var | 

      vars["search_word"] = "Trump"

      // 2 | open | / | 

      await driver.get("https://edition.cnn.com/")
      // 3 | click | always allow cookies gumb| 
      await driver.findElement(By.xpath("//div[@id='onetrust-button-group']/button")).click()
      // 4 | click | css=.sc-bdVaJa > .search-icon | 
      await driver.findElement(By.css(".sc-bdVaJa > .search-icon")).click()
      // 5 | type | id=header-search-bar | trump
      await driver.findElement(By.id("header-search-bar")).sendKeys(vars["search_word"])
      // 6 | sendKeys | id=header-search-bar | ${KEY_ENTER}
      await driver.findElement(By.id("header-search-bar")).sendKeys(Key.ENTER)
      // 5 | click | css=.cnn-search__results-count | 
      await driver.findElement(By.css(".cnn-search__results-count")).click()
      // 7 | assertText | css=strong | trump
      assert(await driver.findElement(By.css("strong")).getText() == vars["search_word"])
    })
  })
}
