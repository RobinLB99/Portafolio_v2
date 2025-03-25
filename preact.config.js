export default (config, env) => {
    // Establece publicPath para rutas relativas en producción
    if (env.production) {
        config.output.publicPath = './';
    }

    // Filtrar el plugin Critters si es necesario
    config.plugins = config.plugins.filter(
        plugin => plugin.constructor.name !== 'Critters'
    );

    return config;
};