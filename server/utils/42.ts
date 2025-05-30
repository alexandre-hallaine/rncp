import { useDrizzle } from "~/server/utils/drizzle";

interface Tokens {
    access_token: string;
    token_type: string;
    expires_in: number;
    scopes: string;
    created_at: number;
    secret_valid_until: number;
}

function getTokens() {
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
    id: number;
    difficulty?: number
    description: string
    project: {
        id: string;
        name: string;
    }
}

async function saveProjects() {
    const { access_token } = await getTokens()

    for (let page = 1; ; page++) {
        const projects = await $fetch<ProjectSession[]>('https://api.intra.42.fr/v2/project_sessions', {
            headers: { Authorization: `Bearer ${access_token}` },
            params: {
                'filter[campus_id]': 1, // 42 Paris
                'page[size]': 100,
                'page[number]': page
            }
        });

        for (const { project, ...session } of projects) {
            if (!session.difficulty) continue;
            await useDrizzle()
                .insert(tables.project)
                .values({ ...project, ...session } as Project)
                .onConflictDoNothing()
        }

        if (projects.length < 100) break;
    }
}

export async function getProjects() {
    const projects = await useDrizzle().select().from(tables.project)
    if (projects.length) return projects

    await saveProjects()
    return await getProjects()
}
