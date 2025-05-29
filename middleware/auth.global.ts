export default defineNuxtRouteMiddleware(async (to) => {
    const { data: session } = await useSession(useFetch);
    if (session.value) return;

    if (to.path !== '/landing')
        return navigateTo('/landing')
});
