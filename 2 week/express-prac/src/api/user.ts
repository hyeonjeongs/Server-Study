import express, { Request, Response, Router } from 'express';

const router: Router = express.Router(); //express 라우팅 서비스

router.get('/users', (req: Request, res: Response) => {
    return res.status(500).json({
        status: 500,
        message: '유저 조회 실패 (서버 내부 오류)'
    });
});

module.exports = router; //생성한 router 객체를 모듈로 반환