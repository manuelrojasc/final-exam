const mongoose = require('mongoose')
const uri = "mongodb://root:root@mongo:27017/alimentodb?authSource=admin";
//const uri = "mongodb+srv://root:root@cluster0.kikhi.mongodb.net/studentdb?retryWrites=true&w=majority"

mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => { console.log("‘MongoDB Connected…’") })
    .catch(err => console.log(err))


const alimentoModel = mongoose.model("alimento", {
    cod_alimento: String,
    nombre: String,
    cantidad: String
});

module.exports = {
    alimentoModel
}