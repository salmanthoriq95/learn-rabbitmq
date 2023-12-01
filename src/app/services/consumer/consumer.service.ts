import amqp from 'amqplib';
import HttpExpection from '../../errors/HttpException';

class ConsumerService {
  async getJob(payload: { channelName: string }) {
    const connection = await amqp.connect('amqp://localhost:5672');
    const channel = await connection.createChannel();
    await channel.assertQueue(payload.channelName);

    channel.consume(payload.channelName, (msg) => {
      if (msg) {
        const job = JSON.parse(msg.content.toString());
        console.log(job);
        const emails = job.subscribers.join(',');
        // let subsEmails = '';
        // for (let i = 0; i < job.subscibers.length; i++) {
        //   const subs = job.subscibers[i];
        //   subsEmails = `${subsEmails}, ${subs.email}`;
        // }
        const content = job.content;
        channel.ack(msg);

        return `Email have been sent to ${emails} whith subject ${content}`;
      }
      throw new HttpExpection(404, {
        message: 'Channel is not found!',
      });
    });
  }
}

export default new ConsumerService();
