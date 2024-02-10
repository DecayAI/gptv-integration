import * as botpress from '.botpress'

console.info('starting integration')

class NotImplementedError extends Error {
  constructor() {
    super('Not implemented')
  }
}

export default new botpress.Integration({
  register: async () => {
  },
  unregister: async () => {
  },
  actions: {
    data: async function ({ctx, input, logger}): Promise<botpress.actions.data.output.Output> {
      logger.forBot().info('Sending the data to GPT Vision')

      const apiKey = ctx.configuration.apiKey;
      const prompt = input.prompt;
      const url = input.url;
    }
  },



  channels: {
    channel: {
      messages: {
        text: async () => {
          throw new NotImplementedError()
        },
        image: async () => {
          throw new NotImplementedError()
        },
        markdown: async () => {
          throw new NotImplementedError()
        },
        audio: async () => {
          throw new NotImplementedError()
        },
        video: async () => {
          throw new NotImplementedError()
        },
        file: async () => {
          throw new NotImplementedError()
        },
        location: async () => {
          throw new NotImplementedError()
        },
        carousel: async () => {
          throw new NotImplementedError()
        },
        card: async () => {
          throw new NotImplementedError()
        },
        choice: async () => {
          throw new NotImplementedError()
        },
        dropdown: async () => {
          throw new NotImplementedError()
        },
      },
    },
  },
  handler: async () => {
    throw new NotImplementedError()
  },
})
