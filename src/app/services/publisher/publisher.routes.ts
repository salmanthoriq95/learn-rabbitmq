import { Router } from 'express';
import publisherController from './publisher.controller';

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
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                example: salman
 *              subscibers:
 *                type: array
 *                items:
 *                  type: object
 *                  properties:
 *                    email:
 *                      type: string
 *                      format: email
 *                      example: a@a.com
 *                  required:
 *                    - email
 *            required:
 *              - name
 *              - subscribers
 *    responses:
 *      200:
 *        description: Success
 *      500:
 *        description: Internal Server Error
 *      400:
 *        description: Bad Request, possibly because wrong argument(s) passed
 */
router.post('/channel', publisherController.postChannel);

/**
 * @swagger
 * /publisher/subsciber/:
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
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                example: salman
 *              subscibers:
 *                type: array
 *                items:
 *                  type: object
 *                  properties:
 *                    email:
 *                      type: string
 *                      format: email
 *                      example: a@a.com
 *                  required:
 *                    - email
 *            required:
 *              - name
 *              - subscribers
 *    responses:
 *      200:
 *        description: Success
 *      500:
 *        description: Internal Server Error
 *      400:
 *        description: Bad Request, possibly because wrong argument(s) passed
 */
router.post('/subscriber', publisherController.postSubs);

/**
 * @swagger
 * /publisher/job/:
 *  post:
 *    summary: Send a new job
 *    description: Create a new job for a channel
 *    tags:
 *      - publisher
 *    parameters:
 *      - name: debug
 *        in: query
 *        required: false
 *        type: number
 *        description: 'For Developer, default 1 for checked'
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              channelName:
 *                type: string
 *                example: Developer
 *              content:
 *                type: string
 *                example: hello world
 *            required:
 *              - channelName
 *              - content
 *    responses:
 *      200:
 *        description: Success
 *      500:
 *        description: Internal Server Error
 *      400:
 *        description: Bad Request, possibly because wrong argument(s) passed
 */
router.post('/job', publisherController.postJob);

export default router;
