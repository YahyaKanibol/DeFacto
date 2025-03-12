const fs = require('fs').promises

class CommonUtil {
    async createTempFile(testName) {
        const filePath = `tempData/${testName}.json`

        try {
            // Check if the file exists
            await fs.access(filePath)
            console.log(`Temp file already exists: ${testName}`)
        } catch (error) {
            // If the file does not exist, create it
            if (error.code === 'ENOENT') {
                // 'ENOENT' means the file does not exist
                try {
                    await fs.writeFile(filePath, JSON.stringify({}, null, 2), 'utf8')
                    console.log(`Temp file created: ${testName}`)
                } catch (writeError) {
                    console.error(`Error creating temp file: ${writeError}`)
                }
            } else {
                // Handle other potential errors when checking file access
                console.error(`Error accessing temp file: ${error}`)
            }
        }
    }

    async deleteTempFile(testName) {
        try {
            await fs.unlink(`tempData/${testName}.json`)
            console.log(`Temp file deleted: ${testName}`)
        } catch (error) {
            console.error(`Error deleting temp file: ${error}`)
        }
    }

    writeTempData = async (key, value) => {
        // const fileName = 'data/tempData.json';
        const fileName = `tempData/${global.testName}.json`
        try {
            const data = await fs.readFile(fileName, 'utf8')
            const jsonData = JSON.parse(data)
            jsonData[key] = value
            await fs.writeFile(fileName, JSON.stringify(jsonData, null, 2))
            console.log(key + ' verisi => ' + value + ' olarak başarıyla yazıldı')
        } catch (err) {
            console.error('Dosya yazılırken bir hata oluştu:', err)
        }
    }

    readTempData = async (key = null, fileName = null) => {
        // const fileName = 'data/tempData.json';
        fileName = fileName == null ? `tempData/${global.testName}.json` : `tempData/${fileName}.json`
        try {
            const data = await fs.readFile(fileName, 'utf8')
            const jsonData = JSON.parse(data)
            return key ? jsonData[key] : jsonData
        } catch (err) {
            console.error('Dosya okunurken bir hata oluştu:', err)
        }
    }
}

module.exports = new CommonUtil()
