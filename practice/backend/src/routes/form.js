const express=require("express")
const form=require('../models/form.schema.js')
const FormModel = require("../models/form.schema.js")

const formrouter=express.Router()

formrouter.get('/', async (req, res) => {
    try {
        const forms = await FormModel.find({});
        return res.send(forms);
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
})
formrouter.post('/', async (req, res) => {

    try {
        const {name, email, password} = req.body;
        const form = await FormModel.create({
            name, email, password
        })
        return res.status(201).send(form);
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
})




module.exports=formrouter