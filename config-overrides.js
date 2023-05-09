// eslint-disable-next-line @typescript-eslint/no-var-requires,no-undef
const rewireCompressionPlugin = require('react-app-rewire-compression-plugin');

// eslint-disable-next-line no-undef
module.exports = {
	webpack: (config) => {
		config = rewireCompressionPlugin(config, '', {
			test: /.js$|.css$|.html$.|svg$/,
			cache: true,
		});
		return config;
	},
};
