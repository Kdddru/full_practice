import express from 'express'


const app = express();
const port = 3000;

app.use(express.static('build'))

app.get('/',(req:any, res:any)=>{
  res.sendFile(__dirname + '/build/index.html');
})

app.listen(port,()=>{
  console.log('server is running');
})