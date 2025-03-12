const { writeTempData } = require('../support/utils/CommonUtil')
const DBUtil = require('../support/utils/DBUtil')
const CommonActions = require('./CommonActions')

const ornekSorgu = 'SELECT'

const queries = {
    ornekSorgu: ornekSorgu,
}

class DbQuery {
    async stringDatabaseQueryCalistirilir(dbQuery, paramSetter = {}) {
        const selectedQuery = queries[dbQuery]
        console.log('Selected Query:', selectedQuery)

        // Veritabanı sorgusunu çalıştır
        const result = await DBUtil.queryData(selectedQuery, DBUtil.getDatabaseConfig(), paramSetter)
        console.log(result)

        return result
    }

}

module.exports = new DbQuery()
