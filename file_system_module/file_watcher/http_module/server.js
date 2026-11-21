import { fstat } from 'fs'
import http from 'http'

const homePage = fs.readFileSync("home.html", {encoding:"utf-8"})
const.jsonData=fs.readFileSync("./config.json",{encoding:"utf8"})
const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html"})
        if(req.url === "/") {
            res.end(homePage)
        } else if(req.url === "/about") {
    res.end("About Page")
        }
})
server.listen(3000, () => {
    console.log("Server is running...");
})