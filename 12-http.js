const http = require('http')
const server = http.createServer((req,res)=>{
    if (req.url === '/'){
        res.end("welcome to home")
    }
res.end(`<p>oops wrong page</p>
<a href = "/">go to home</a>`)
  
})
server.listen(5000)