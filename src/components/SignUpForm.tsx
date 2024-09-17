'use client'
import { SignUpFormSchema } from '@/schema'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form'
import { Input } from './ui/input'
import { Button } from './ui/button'

type SignupFormInputs = z.infer<typeof SignUpFormSchema>

const SignUpForm = () => {
  // define form
  const SignupForm = useForm<SignupFormInputs>({
    resolver: zodResolver(SignUpFormSchema),
  })

  // define submit handler
  const onSubmit = (data: SignupFormInputs) => {
    console.log(data)
  }

  return (
    <>
      <Form {...SignupForm}>
        <form onSubmit={SignUpForm}>
          <FormField
            control={SignupForm.control}
            name='username'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    placeholder='Username'
                    {...field}
                    className='bg-input-bg text-input-placeholder border-none px-6 py-4'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={SignupForm.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder='Password'
                    {...field}
                    className='bg-input-bg text-input-placeholder border-none px-6 py-4'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type='submit' className='mt-4'>
            Sign Up
          </Button>
        </form>
      </Form>
    </>
  )
}

export default SignUpForm
