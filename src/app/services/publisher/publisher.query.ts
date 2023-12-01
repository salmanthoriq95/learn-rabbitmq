class PublisherQuery {
  channels: { name: string; subscribers: { email: string }[] }[];
  constructor() {
    this.channels = [
      {
        name: 'Developer',
        subscribers: [
          { email: 'salmanthoriq95@gmail.com' },
          { email: 'al.farish.syi@gmail.com' },
        ],
      },
      {
        name: 'QA',
        subscribers: [
          { email: 'salmanthoriq95@gmail.com' },
          { email: 'al.farish.syi@gmail.com' },
        ],
      },
    ];
  }
  async readChannels(channelName: string) {
    for (let i = 0; i < this.channels.length; i++) {
      const channel = this.channels[i];
      if (channel.name.toLowerCase() === channelName.toLowerCase()) {
        return channel;
      }
    }
  }

  async addChannel(channel: {
    name: string;
    subscribers: { email: string }[];
  }) {
    this.channels.push(channel);
    return this.channels;
  }

  async updateChannel(channel: {
    name: string;
    subscribers: { email: string }[];
  }) {
    for (let i = 0; i < this.channels.length; i++) {
      const existedChannel = this.channels[i];
      if (existedChannel.name === channel.name) {
        existedChannel.subscribers = [
          ...existedChannel.subscribers,
          ...channel.subscribers,
        ];
        break;
      }
    }
    return this.channels;
  }
}

export default new PublisherQuery();
