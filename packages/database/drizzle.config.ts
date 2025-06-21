import * as dotenv from 'dotenv'

dotenv.config()

export default {
	schema: './src/schema/*',
	out: './drizzle',
	dialect: 'postgresql',
	dbCredentials: {
		url: process.env.DATABASE_URL,
	},
	migrations: {
		prefix: 'timestamp',
	},
}
