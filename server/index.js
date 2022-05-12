import express from 'express';

//nullish coalescing 
const port = process.env.PORT ?? 2000;
const server = express();

server.use(express.json());

server.get('/api/ahoj', (req, resp) => {
    resp.send({
        pozdrav: "Ahoj"
    });
});

server.use(express.static('dist'));

server.get('*', (req, resp) => {
    resp.sendFile('dist/index.html')
});

server.listen(port, () => {
    console.log(`I am listening at ${port}`)
});


