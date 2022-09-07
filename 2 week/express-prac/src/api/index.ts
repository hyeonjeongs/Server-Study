import express, { Router } from 'express';

const router: Router = express.Router();

router.use('/user', require('./user')); // 앤드포인트 /user인 요청 들어오면 user.ts실행
router.use('/blog', require('./blog'));
router.use('/like', require('./like'));
router.use('/signup', require('./signup'));

module.exports = router;