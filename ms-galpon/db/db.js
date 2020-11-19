const mongoose = require('mongoose')
const uri = "mongodb://root:root@mongo:27017/galpondb?authSource=admin";
//const uri = "mongodb+srv://root:root@cluster0.kikhi.mongodb.net/studentdb?retryWrites=true&w=majority"

mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => { console.log("‘MongoDB Connected…’") })
    .catch(err => console.log(err))


const galponModel = mongoose.model("galpon", {
    cod_galpon: { type: String, required: true },
    tipo_alimento: { type: String, required: true },
    cantidad: { type: String, required: true },
    registro: { type: Date, default: Date.now }
});

module.exports = {
    galponModel
}