type Event = {
    type: 'project' | 'user';
    id: string;
}

export default defineNitroPlugin((nitroApp) => {
    nitroApp.hooks.hook('cloudflare:queue', ({batch}) => {
        for (const message of batch.messages) {
            try {
                const event = message.body as Event;

                switch (event.type) {
                    case 'project':
                        break;
                    case 'user':
                        break;
                }

                message.ack();
            } catch {
                message.retry();
            }
        }
    });
});
