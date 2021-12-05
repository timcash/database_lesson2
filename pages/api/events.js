const { PSDB } = require('planetscale-node')
const conn = new PSDB('main')

export default async function handler(req, res) {
    try {
        const [rows] = await conn.query('select * from events')
        res.status(200).json(rows)
    } catch (err) {
        console.log(err)
        res.status(500).json({err:err.ToString()})
    }
}

