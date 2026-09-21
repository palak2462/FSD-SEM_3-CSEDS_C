const http=require('http');
const PORT=3800;
const server=http.createServer((req,res)=>{
    console.log(`Request recieved: ${req.method} ${req.url}`);


res.statusCode=200;
res.setHeader('Content-type','text/plain');
res.setHeader('X-Powered-by','Node.js');
res.end('Hello World');

})
server.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`)
})



