import {useDrizzle} from "~/server/utils/drizzle";

interface Tokens {
    access_token: string;
    token_type: string;
    expires_in: number;
    scopes: string;
    created_at: number;
    secret_valid_until: number;
}

export function getTokens() {
    return $fetch<Tokens>("https://api.intra.42.fr/oauth/token", {
        method: 'POST',
        body: {
            grant_type: 'client_credentials',
            client_id: process.env.FORTYTWO_CLIENT_ID as string,
            client_secret: process.env.FORTYTWO_CLIENT_SECRET as string
        }
    })
}

interface ProjectSession {
    id: string;
    difficulty?: number
    project: {
        id: string;
        name: string;
    }
}

export async function saveProjects() {
    const {access_token} = await getTokens()

    for (let page = 1; ; page++) {
        const projects = await $fetch<ProjectSession[]>('https://api.intra.42.fr/v2/project_sessions', {
            headers: {Authorization: `Bearer ${access_token}`},
            params: {
                'filter[cursus_id]': 21, //42cursus (main)
                'page[size]': 100,
                'page[number]': page
            }
        });


        for (const {id, difficulty, project} of projects) {
            if (!difficulty) continue;
            const value = {id, difficulty, name: project.name};
            await useDrizzle()
                .insert(tables.project)
                .values(value)
                .onConflictDoNothing()
        }

        if (projects.length < 100) break;
    }
}
