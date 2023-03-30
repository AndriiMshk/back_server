import { Request, Response, NextFunction, Router } from 'express'

export interface IControlerRoute {
    path: string
    func: (req: Request, res: Response, next: NextFunction) => void
    method: keyof Pick<Router, 'get' | 'post' | 'delete' | 'patch' | 'put'>
} 