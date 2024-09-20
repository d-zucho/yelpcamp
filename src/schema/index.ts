import * as z from 'zod'

export const RegisterSchema = z
  .object({
    email: z.string().email({
      message: 'Please enter a valid email address',
    }),
    name: z.string().min(2, {
      message: 'Name must be at least 2 characters',
    }),
    password: z.string().min(8, {
      message: 'Password must be at least 8 characters',
    }),
    confirmPassword: z.string().min(8, {
      message: 'Password must be at least 8 characters',
    }),
    // check to make sure confirmPassword === password
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords must match',
    path: ['confirmPassword'],
  })
