import express from 'express'

const app =express()

app.get('/',(req,res)=>{
    res.send('test-sec')
})

app.listen(3010,()=>{
    console.log('server run');
})