require('dotenv').config()
const express=require('express')
const connect=require('./Config/db.js')
const cors=require('cors')
const forms=require('./routes/form.js')



const app=express()

app.use(express.json())
app.use(cors())

app.use('/api/form',forms)

const PORT=process.env.PORT

app.listen(PORT,async()=>{
    try {
        await connect()
       console.log('db connected') 
        
    } catch (error) {
        console.log(error)
    }
    console.log(`listening to the port ${PORT}`)
})