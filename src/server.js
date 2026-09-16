const app = require('./app');
const pool = require('./config/db');
require('dotenv').config();

const PORT = Number(process.env.PORT) || 5000;

const startServer = async () => {
    try {
        const connection = await pool.getConnection();
        console.log('Successfully connected to MySQL');
        connection.release();

        app.listen(PORT, ()=>{
            console.log('Server is Running');
        })
    }
    catch(error){
        console.error('Error: ', error.message);
        process.exit(1);
    }
}

startServer();