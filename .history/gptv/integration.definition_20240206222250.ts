import { IntegrationDefinition, messages } from '@botpress/sdk';
import { z } from 'zod';

const INTEGRATION_NAME = "GPTV";

export default new IntegrationDefinition({
  name: INTEGRATION_NAME,
  version: '0.2.0', 
  icon: 'icon.svg', 
  readme: 'hub.md',
  configuration: {
    schema: z.object({
      apiKey: z.string().describe('OpenAI API Key'),
    })
  },
  channels: {
    channel: {
      messages: { ...messages.defaults },
    },
  },
  actions: {
    data: {
      input: {
        schema: z.object({
          url: z.string().min(1, { message: "Must not me empty"}).describe("The URL of the image"),
          prompt: z.string().min(1, { message: "Must not me empty "}).describe("The prompt to GPT Vision")
        })
      },
      output: {
        schema: z.object({
          response: z.array(z.any()).describe('Output schema after sending data, expecting any JSON structure')
        }).describe('Output schema after sending data'),
      }
    }
  },
});
