const oracledb = require('oracledb')

const db_ready2 = {
    user: '',
    password: '',
    connectString: ''
}

class DBUtil {
    getDatabaseConfig = () => {
        let environment = process.env.ENVIRONMENT
        switch (environment) {
            case 'ready2':
                return db_ready2
            default:
                throw new Error(`Geçersiz ortam: ${environment}`)
        }
    }

    transformDataToJson(data) {
        const transformedRows = data.rows.map((row) => {
            const transformedRow = {}
            data.metaData.forEach((meta, index) => {
                transformedRow[meta.name] = row[index]
            })
            return transformedRow
        })
        return transformedRows[0]
    }

    queryData = async (query, dbconfig, paramSetter = {}) => {
        let connection
        try {
            connection = await oracledb.getConnection(dbconfig)
            console.log('NOTE===>connect established')
            const result = await connection.execute(query, paramSetter, { autoCommit: true })
            return this.transformDataToJson(result)
        } catch (err) {
            console.log('Error===>' + err)
            return err
        } finally {
            if (connection) {
                try {
                    connection.close()
                } catch (err) {
                    console.log('Error===>' + err)
                }
            }
        }
    }

}

module.exports = new DBUtil()
