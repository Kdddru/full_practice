import express from 'express'

const port = process.env.PORT || 3000;


const app = express();

//build 안에 있는 파일들 허용
app.use(express.static('build'));


app.get('/',(req, res)=>{
  res.sendFile(__dirname + '/build/index.html')
})

app.listen(port,()=>{
  console.log('server is running')
})