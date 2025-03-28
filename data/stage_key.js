const homePage = require('./homePage')
const filterPage = require('./filterPage')
const basketPage = require('./basketPage')
const favoritesPage = require('./favoritesPage')




class stageJson {

    elements = {
		...homePage.elements,
		...filterPage.elements,
		...basketPage.elements,
		...favoritesPage.elements

	}
}

module.exports = new stageJson()
