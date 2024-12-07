import StyledBtn from '@/components/StyledBtn'
import StyledForm from '@/components/StyledForm';
import Link from 'next/link';

const SignupPage = () => {
    return (
        <main className='min-h-screen flex items-start justify-center container px-3 lg:pt-10'>
            <div className='flex flex-col gap-5 w-96 max-w-full mx-auto bg-white dark:bg-white-dark p-5 rounded-lg shadow-xl'>
                <h2 className='text-3xl font-bold'>Sign Up</h2>

                <StyledForm process={{ function: "create", target: "user" }} className='flex flex-col gap-5'>
                    <input type="text" required className='p-2 px-4 bg-gray rounded-lg' placeholder='name' name='name' id='name' />
                    <input type="email" required className='p-2 px-4 bg-gray rounded-lg' placeholder='email' name='email' id='email' />
                    <input type="password" required minLength={8} className='p-2 px-4 bg-gray rounded-lg' placeholder='password' name='password' id='password' />

                    <input type="submit" value="Submit" className='cursor-pointer p-2 px-4 bg-primary text-white rounded-lg' />
                </StyledForm>

                <div className='flex items-start gap-2'>
                    <span>Already have an account? </span>
                    <Link href="/login" className='text-primary'>Login</Link>
                </div>

                <div className='flex items-center gap-2'>
                    <span className='w-full h-[4px] bg-foreground rounded-full'></span>
                    <span className='text-lg'>or</span>
                    <span className='w-full h-[4px] bg-foreground rounded-full'></span>
                </div>

                <div className='flex flex-col gap-2'>
                    <StyledBtn className='p-2 px-4 justify-center bg-danger text-white rounded-lg'>Google</StyledBtn>
                    <StyledBtn className='p-2 px-4 justify-center bg-gray rounded-lg'>GitHub</StyledBtn>
                </div>
            </div>
        </main>
    )
}

export default SignupPage