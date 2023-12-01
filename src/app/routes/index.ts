import { Router } from 'express';
import consumerRoutes from '../services/consumer/consumer.routes';
import publisherRoutes from '../services/publisher/publisher.routes';

const router = Router();

export default {
  publisher: router.use('/publisher', publisherRoutes),
  consumer: router.use('/consumer', consumerRoutes),
};
