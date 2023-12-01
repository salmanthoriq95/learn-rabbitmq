import Joi from 'joi';
import HttpExpection from '../../errors/HttpException';

class ConsumerValidator {
  get(payload: any) {
    const schema = Joi.object({
      debug: Joi.number().optional(),
      channelName: Joi.string().required(),
    });
    const { error } = schema.validate(payload);
    if (error) {
      throw new HttpExpection(400, {
        message: error.message,
      });
    }
    return payload;
  }
}

export default new ConsumerValidator();
