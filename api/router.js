/*
    Omar Johnson
    Router
    1/19/25

    Module dedicated to loading paths into the application
 */
const loadRoutes = (modules, app) =>
{
    modules.forEach((m) => {
        if(m.method === 'GET') {
            app.get(m.path, m.execute);
        } else if(m.method === 'POST') {
            app.post(m.path, m.execute);
        }
        console.log(`Successfully loaded route '${m.path}'`);
    });
};

export { loadRoutes };