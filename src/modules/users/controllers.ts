import { Request, Response } from 'express';

const findAll = (req: Request, res: Response): any => {
  res.status(200).json({ message: 'List Users' });
};

const UsersControllers = {
  findAll
};

export default UsersControllers
