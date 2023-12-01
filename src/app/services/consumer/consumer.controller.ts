import { NextFunction, Request, Response } from 'express';
import consumerValidator from './consumer.validator';
import consumerService from './consumer.service';

class ConsumerController {
  async get(req: Request, res: Response, next: NextFunction) {
    try {
      const validReq = consumerValidator.get(req.query);
      const serviceResult = await consumerService.getJob(validReq);
      return res.send({
        success: true,
        data: serviceResult,
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new ConsumerController();
