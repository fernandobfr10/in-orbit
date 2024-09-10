import z from 'zod'

const envSchema = z.object({
  SERVER_PORT: z.number().default(3333),
  DATABASE_URL: z.string().url(),
})

export const env = envSchema.parse(process.env)
