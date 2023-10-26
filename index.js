require(dotenv).config()
const express = require('require')
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  app.get('/instagram', (req, res) => {
    res.send('kalpey yadav!')
  }) 

  app.get('/login', (req,res)=>{
    res.send('how are you today!')
  })

  app.get('/youtube',(req,res)=>{
    res.send('<h2>this iss good !</h2>')
  })
    
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})