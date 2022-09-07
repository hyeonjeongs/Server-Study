import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
    return res.status(404).json({
        status: 404,
        message: '블로그 챌린지 실패 (리소스 찾을 수 없음)'
    });
});

module.exports = router;