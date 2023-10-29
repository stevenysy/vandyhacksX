// const http = require('http');
// const server = http.createServer((req, res) => {
//     res.end("Hello from the server!");
// });

// server.listen(3000, '127.0.0.1', () => {
//     console.log('Listening to requests on port 3000');
// })




const express = require('express');

const app = express();

app.get('/', (request, response) => {
    response.json(JSON.stringify({
        data: {
            hand: [1, 2, 3],
            reqs: [1, 2, 3]
        }
    }));
});

const port = 8000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});
