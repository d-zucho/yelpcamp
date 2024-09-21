import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import RegisterForm from '@/components/RegisterForm'

const RegisterPage = () => {
  return (
    <div className='w-full'>
      <MaxWidthWrapper className=' w-full'>
        <div className=''>
          <h2 className='text-body-reg text-h2-base font-bold py-4 text-center'>
            Start exploring camps from all around the world.
          </h2>
          <RegisterForm />
        </div>
        <div className='bg-bg'> </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default RegisterPage
