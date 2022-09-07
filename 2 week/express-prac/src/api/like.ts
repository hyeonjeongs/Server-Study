import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
    return res.status(200).json({
        status: 200,
        message: '솝트가 좋아요 서버가 좋아요~'
    });
});

module.exports = router;