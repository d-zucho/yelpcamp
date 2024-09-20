import LoginForm from '@/components/LoginForm'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'

const LoginPage = () => {
  return (
    <div className='w-full h-screen'>
      <MaxWidthWrapper className=''>
        <h2 className='text-body-reg text-h2-base font-bold'>
          Start exploring camps from all around the world.
        </h2>
        <LoginForm />
      </MaxWidthWrapper>
    </div>
  )
}

export default LoginPage
