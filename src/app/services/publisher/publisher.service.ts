import HttpExpection from '../../errors/HttpException';
import publisherQuery from './publisher.query';
import amqp from 'amqplib';

class PublisherService {
  async readChannels(channelName: string) {
    const queryResult = await publisherQuery.readChannels(channelName);
    return queryResult;
  }
  async addNewChannel(payload: {
    name: string;
    subscribers: { email: string }[];
  }) {
    const queryResult = await publisherQuery.addChannel(payload);
    return queryResult;
  }
  async addNewSubs(payload: {
    name: string;
    subscribers: { email: string }[];
  }) {
    const queryResult = await publisherQuery.updateChannel(payload);
    return queryResult;
  }
  async createJob(payload: { channelName: string; content: string }) {
    const connection = await amqp.connect('amqp://localhost:5672');
    const channel = await connection.createChannel();
    const subsData = await this.readChannels(payload.channelName);
    if (subsData) {
      await channel.assertQueue(subsData.name);
      const emails: string[] = [];
      for (let i = 0; i < subsData.subscribers.length; i++) {
        const subs = subsData.subscribers[i];
        emails.push(subs.email);
      }
      await channel.sendToQueue(
        subsData.name,
        Buffer.from(JSON.stringify({ emails, content: payload.content }))
      );
    }
    await channel.close();
    await connection.close();
    if (!subsData)
      throw new HttpExpection(404, { message: 'Channel is not found!' });
    return 'Job sents sucsessfully';
  }
}

export default new PublisherService();
