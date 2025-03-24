export default {
    publicPath: '/portfolio-v2/',
    prerender: {
        enabled: true
    },
    webpack: (config, { dev, isServer }) => {
        config.plugins = config.plugins.filter(
            plugin => plugin.constructor.name !== 'Critters'
        );
        return config;
    }
};