import express, { Request, Response, NextFunction } from 'express'
import { userRouter } from './users/users.js'


const port = 8000
const app = express()

app.get('/hello', (req, res) => {
    res.status(404).end()
})

app.use('/users', userRouter)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(err.message);
})

app.listen(port, () => {
    console.log('listen');
})