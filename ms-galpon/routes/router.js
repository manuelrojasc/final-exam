const { json } = require('express')
const express=require('express')
const router=express.Router()
const modelos=require('../db/db')


router.get('/', (req, res) => {
    res.send('welcome to my api galpon')
})

router.get('/listar/estado', async(request, response) => {
    try {
        var result = await modelos.galponModel.find().exec();
        response.json(result);  

    } catch (error) {
        response.status(500).send(error);
    }
});


router.post("/registrar/estado", async(request, response) => {
    try {
        var galpon = new modelos.galponModel(request.body);
        var result = await galpon.save();
        response.json(result)

    } catch (error) {
        response.status(500).send(error);
    }
});



module.exports=router