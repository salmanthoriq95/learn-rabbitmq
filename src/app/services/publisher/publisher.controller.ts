import { NextFunction, Request, Response } from 'express';
import publisherValidator from './publisher.validator';
import publisherService from './publisher.service';

class PublisherController {
  async postChannel(req: Request, res: Response, next: NextFunction) {
    try {
      const validReq = publisherValidator.post(req.body);
      const serviceResult = await publisherService.addNewChannel(validReq);
      return res.send({
        success: true,
        data: serviceResult,
      });
    } catch (error) {
      next(error);
    }
  }
  async postSubs(req: Request, res: Response, next: NextFunction) {
    try {
      const validReq = publisherValidator.post(req.body);
      const serviceResult = await publisherService.addNewSubs(validReq);
      return res.send({
        success: true,
        data: serviceResult,
      });
    } catch (error) {
      next(error);
    }
  }
  async postJob(req: Request, res: Response, next: NextFunction) {
    try {
      const validReq = publisherValidator.postJob(req.body);
      const serviceResult = await publisherService.createJob(validReq);
      return res.send({
        success: true,
        data: serviceResult,
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new PublisherController();
