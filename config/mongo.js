// const mongoose = require("mongoose")
//
// const dbConnect = () => {
//     try {
//         const DB_URI = process.env.DB_URI;
//         mongoose.connect(DB_URI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log('*** Conexión exitosa a la base de datos ***');
//     } catch (error) {
//         console.error('Error al conectar a la base de datos:', error.message);
//     }
// }
// module.exports = dbConnect;

const {connect} = require("mongoose");

async function connectionDb(){

    try {
        const DB_URI = process.env.DB_URI;
        await connect(DB_URI, {
        });
        console.log('*** Conexión exitosa a la base de datos ***');
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error.message);
    }
}
module.exports = connectionDb;




