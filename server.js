const http = require('http');
const fs = require('fs').promises;

http.createServer(async (req, res) => {
    try {
        const data = await fs.readFile('./practice.html');
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8'});
        res.end(data);
    } catch(err) {
        console.error(err);
        res.write(500, { 'Content-Type': 'text/plain; charset=utf-8'});
        res.end(err.message);
    }
})
.listen(8080, () => {
    console.log('서버가 8080에서 대기 중...');
});