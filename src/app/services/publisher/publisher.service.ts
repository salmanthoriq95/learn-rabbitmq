import publisherQuery from './publisher.query';

class PublisherService {
  async readChannels(payload: { channelName?: string }) {
    const queryResult = await publisherQuery.readChannels(payload.channelName);
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
    return 'hello';
  }
}

export default new PublisherService();
