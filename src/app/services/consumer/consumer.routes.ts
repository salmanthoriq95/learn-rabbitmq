import { Router } from 'express';
import consumerController from './consumer.controller';

const router = Router();

/**
 * @swagger
 * /consumer:
 *  get:
 *    summary: Consume the job
 *    description: Consume the job which is already queue
 *    tags:
 *      - consumer
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
 *        description: channel name
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
