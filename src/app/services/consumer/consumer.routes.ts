import { Router } from 'express';
import consumerController from './consumer.controller';

const router = Router();

/**
 * @swagger
 * /publisher/channel/:
 *  post:
 *    summary: Create a new channel
 *    description: Create a new channel, the subscribers key is required which is it have array of objects data types
 *    tags:
 *      - publisher
 *    parameters:
 *      - name: debug
 *        in: query
 *        required: false
 *        type: number
 *        description: 'For Developer, default 1 for checked'
 *      - name: channelName
 *        in: query
 *        required: true
 *        type: string
 *        description: channel name, if not pass it will run for all channels
 *    responses:
 *      200:
 *        description: Success
 *      500:
 *        description: Internal Server Error
 *      400:
 *        description: Bad Request, possibly because wrong argument(s) passed
 */
router.get('/', consumerController.get);

export default router;
