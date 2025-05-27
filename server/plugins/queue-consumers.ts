import { defineNitroPlugin } from '#imports';

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('cloudflare:queue', async ({ batch }) => {
    for (const message of batch.messages) {
      try {
        const { type, id } = JSON.parse(message.body as string);

        switch (type) {
          case 'project':
            break;
          case 'user':
            break;
        }

        message.ack();
      } catch (err) {
        message.retry();
      }
    }
  });
});
