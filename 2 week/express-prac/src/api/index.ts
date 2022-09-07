import express, { Router } from 'express';

const router: Router = express.Router();

router.use('/user', require('./user')); //요청 들어오면 user.ts실행

module.exports = router;