export default ({ env }) => ({
	connection: {
		client: 'mysql',
		connection: {
		host: env('DATABASE_HOST', 'strapi'),
			port: env.int('DATABASE_PORT', 3306),
			database: env('DATABASE_NAME', 'strapi'),
			user: env('DATABASE_USERNAME', 'xh777'),
			password: env('DATABASE_PASSWORD', 'xh20020722'),
			ssl: env.bool('DATABASE_SSL', false)
		}
	}
});
