import Image from 'next/image'
import AuthForm from './components/AuthForm'
import Logo from 'public/Logo.svg';

export default function Home() {
  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
    <Image src={Logo} alt="Logo" priority={true} />
    <h2 
      className="
        mt-6 
        text-center 
        text-3xl 
        font-bold 
        tracking-tight 
        text-gray-900
      "
      >
        Sign in to your account
    </h2>
    <div>
      <AuthForm />
    </div>
  </div>

  )
}

