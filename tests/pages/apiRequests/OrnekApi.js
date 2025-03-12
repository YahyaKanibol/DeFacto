const Constants = require("../../../constants/Constants")
const ApiBase = require("./ApiBase")

class OrnekApi {

    async makeExampleRequest() {
        const baseUrl = Constants.getData().baseUrl

        const [response, responseBody] = await ApiBase.makeRequest(
            'get',
            `${baseUrl}`
        )
        return responseBody.data
    }


}


module.exports = new OrnekApi()