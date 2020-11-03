const http=require('http');

const app=http.createServer((req,res)=>{
    console.log('你好呀，世界！');
    res.write('comming')
    res.end()
})

app.listen(9000)