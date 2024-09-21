import LoginForm from '@/components/LoginForm'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'

const LoginPage = () => {
  return (
    <div className='w-full'>
      <MaxWidthWrapper className=' w-full'>
        <div className='flex flex-col'>
          <h2 className='text-body-reg text-h2-base font-bold py-4 text-center'>
            Start exploring camps from all around the world.
          </h2>
          <LoginForm />
        </div>
        <div className='bg-bg flex-1'> </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default LoginPage
