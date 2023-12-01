import Joi from 'joi';
import HttpExpection from '../../errors/HttpException';

class PublisherValidator {
  post(payload: any) {
    const schema = Joi.object({
      name: Joi.string().required(),
      subscribers: Joi.array()
        .required()
        .items(
          Joi.object({
            email: Joi.string().required(),
          })
        ),
    });
    const { error } = schema.validate(payload);
    if (error) {
      throw new HttpExpection(400, {
        message: error.message,
      });
    }
    return payload;
  }
  postJob(payload: any) {
    const schema = Joi.object({
      channelName: Joi.string().required(),
      content: Joi.string().required(),
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

export default new PublisherValidator();
