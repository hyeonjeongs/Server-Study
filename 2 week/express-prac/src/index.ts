import express, { Request, Response, NextFunction } from 'express';

const app = express(); //express 객체 받아옴

app.use(express.json()); //express에서 request body를 json 으로 받아오기 위해

app.use('/api', require('./api')); // /api에 요청 들어오면 api 폴더로 분기

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Hi! My name is hyeonjeong~!');
}); //get -> http method

app.listen('8000', () => {
    console.log(`
        #############################################
            🛡️ Server listening on port: 8000 🛡️
        #############################################
    `);
});