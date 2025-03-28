const homePage = require('./homePage')
const filterPage = require('./filterPage')
const basketPage = require('./basketPage')
const categoryPageLocators = require('./categoryPageLocators')
const productPageLocators = require('./productPageLocators')
const searchPageLocators = require('./SearchPageLocators')
const favoritesPage = require('./favoritesPage')


class stageJson {

    elements = {
		...homePage.elements,
		...filterPage.elements,
		...basketPage.elements,
		...categoryPageLocators.elements,
		...productPageLocators.elements,
		...searchPageLocators.elements
		...favoritesPage.elements
  }
}

module.exports = new stageJson()
