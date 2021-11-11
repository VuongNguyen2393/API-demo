const express = require('express')
const app = express()
const port = 3000

app.get('/', (req:any, res:any) => {
    res.send('get something - VuongND9')
  })

app.post('/product',(req:any,res:any) => {
    res.send('product list - VuongND9')
})

app.get('/product',(req:any,res:any) => {
    res.send('product list get - VuongND9')
})

app.listen(port, () => {
    console.log(`Sever VuongND9 is listening on port ${port}`)
})
