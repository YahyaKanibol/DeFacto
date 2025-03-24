const homePage = require('./homePage')
const filterPage = require('./filterPage')
const basketPage = require('./basketPage')


class stageJson {

    elements = {
		...homePage.elements,
		...filterPage.elements,
		...basketPage.elements
	}
}

module.exports = new stageJson()
