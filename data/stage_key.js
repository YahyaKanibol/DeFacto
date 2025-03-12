const homePage = require('./homePage')

class stageJson {

    elements = {
		...homePage.elements
	}
}

module.exports = new stageJson()
