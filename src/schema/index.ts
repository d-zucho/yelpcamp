import { z } from 'zod'

export const SignUpFormSchema = z.object({
  username: z
    .string({
      required_error: 'Username is required',
    })
    .min(5, {
      message: 'Username must be at least 5 characters long',
    })
    .max(25, {
      message: 'Username must be at most 25 characters long',
    })
    .regex(
      /^[a-zA-Z0-9_]+$/,
      'The username must contain only letters, numbers and underscore (_)'
    ),
  password: z.string({ required_error: 'Password is required' }),
})
