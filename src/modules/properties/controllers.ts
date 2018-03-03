import { Request, Response } from 'express';
import { Property } from './property';

const findAll = (req: Request, res: Response): any => {
  Property.find().then(properties => {
    res.status(200).json(properties)
  });
};

const findOne = (req: Request, res: Response): any => {
  Property.findById(req.params.id).then(property => {
    res.status(200).json(property)
  });
};

const create = (req: Request, res: Response): any => {
  Property.create(req.body, function(err: any, property: any) {
    if (err) console.log(err);
    res.status(200).json({ message: 'Property has been created' });
  });
};

const update = (req: Request, res: Response): any => {
  Property.findOneAndUpdate({_id: req.body._id}, {description: req.body.description}, function(err: any, property: any) {
    if (err) console.log(err);
    res.status(200).json({ message: 'Property has been updated' });
  });
};

const remove = (req: Request, res: Response): any => {
  Property.findByIdAndRemove(req.body._id).then(property => {
    res.status(200).json({ message: 'Property has been deleted' })
  });
};

const PropertiesControllers = {
  findAll,
  findOne,
  create,
  update,
  remove
};

export default PropertiesControllers
