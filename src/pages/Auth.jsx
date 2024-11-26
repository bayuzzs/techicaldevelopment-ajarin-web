import { useState } from 'react';
import { Link } from 'react-router-dom';
import userSmall from '../assets/icon/user_small.svg';
import mail from '../assets/icon/mail.svg';
import ajarin from '../assets/ajarin.png';
import Input from '../components/Input';
import InputPassword from '../components/InputPassword';
import authIllustration from '../assets/images/auth_illustration.png';

const Auth = () => {
  const [swipe, setSwipe] = useState(false);

  return (
    <main className="relative animate-fade-in">
      <div className="container md:relative md:mx-auto md:flex md:h-screen md:items-center md:justify-around">
        <aside
          id="illustration"
          className={
            'absolute left-0 top-0 z-[1000] hidden h-screen w-1/2 flex-col items-center justify-center gap-16 bg-[#e6eefb] transition-all duration-500 md:flex ' +
            (swipe
              ? 'left-[50%] rounded-bl-[30px] rounded-tl-[30px]'
              : 'rounded-br-[30px] rounded-tr-[30px]')
          }
        >
          <img
            src="/images/blob/login-left.svg"
            className={
              'absolute bottom-0 left-0 z-[-99] block ' +
              (swipe ? 'hidden' : '')
            }
            loading="lazy"
          />
          <img
            src="/images/blob/login-right.svg"
            className={
              'absolute bottom-0 right-0 z-[-99] block ' +
              (swipe ? '' : 'hidden')
            }
            loading="lazy"
          />
          <div className="description">
            <Link to="/">
              <img
                className="mx-auto max-w-[250px]"
                src={ajarin}
                alt="Ajarin"
              />
            </Link>
          </div>
          <img
            src={authIllustration}
            className={
              'signin-illustration maw-w-[80%] px-10 ' +
              (swipe ? 'scale-x-[-1]' : '')
            }
          />
        </aside>
        <section
          id="register"
          className={`transition-all duration-500 ${swipe ? '' : 'scale-0'}`}
        >
          <div className="register-wrapper p-5 leading-5 text-dark">
            <p className="register mb-3 text-sm font-bold tracking-[0.2rem] text-primary">
              MULAI BELAJARMU
            </p>
            <h2 className="mb-3 text-3xl font-bold">
              Daftar di <span className="text-primary">Ajarin.</span>
            </h2>
            <p className="desc mt-5 text-sm font-extralight">
              Sudah ada akun?{' '}
              <span
                className="login cursor-pointer text-primary hover:underline"
                onClick={() => setSwipe(false)}
              >
                Masuk
              </span>
            </p>
            <form action="#" method="" className="py-5">
              <Input
                inputTitle="Email"
                inputName="email"
                inputType="email"
                iconUrl={mail}
              />
              <InputPassword />
              {/* <button
                className="w-full cursor-pointer rounded-xl bg-primary p-3 tracking-widest text-white shadow-lg transition-all duration-300 hover:opacity-70"
                type="submit"
              >
                SIGN UP
              </button> */}
              <Link
                className="w-full block text-center cursor-pointer rounded-xl bg-primary p-3 tracking-widest text-white shadow-lg transition-all duration-300 hover:opacity-70"
                to={'/dashboard'}
              >
                SIGN UP
              </Link>
            </form>
            <p className="policy text-center text-sm font-extralight">
              <small>
                By clicking Sign Up, you agree to our Terms and that you have
                read our{' '}
                <a
                  href="#"
                  className="text-primary no-underline hover:underline"
                >
                  Privacy Policy
                </a>
              </small>
            </p>
          </div>
        </section>
        <section
          id="login"
          className={`transition-all duration-500 ${swipe ? 'scale-0' : ''}`}
        >
          <div className="login-wrapper p-5 leading-5 text-dark">
            <p className="login mb-3 text-sm font-bold tracking-[0.2rem] text-primary">
              MULAI BELAJARMU
            </p>
            <h2 className="mb-3 text-3xl font-bold">
              Masuk Ke <span className="text-primary">Ajarin.</span>
            </h2>
            <p className="desc mb-5 text-sm font-extralight">
              Belum punya akun?{' '}
              <span
                className="signup cursor-pointer text-primary hover:underline"
                onClick={() => setSwipe(true)}
              >
                Daftar
              </span>
            </p>
            <form className="my-5" action="utils/signin.php" method="POST">
              <Input
                inputTitle="Nama"
                inputName="nama"
                inputType="text"
                iconUrl={userSmall}
              />
              <Input
                inputTitle="Email"
                inputName="email"
                inputType="email"
                iconUrl={mail}
              />
              <InputPassword />
              {/* <button
                className="w-full cursor-pointer rounded-xl bg-primary p-3 tracking-widest text-white shadow-lg transition-all duration-300 hover:opacity-70"
                type="submit"
              >
                LOG IN
              </button> */}
              <Link
                className="w-full block text-center cursor-pointer rounded-xl bg-primary p-3 tracking-widest text-white shadow-lg transition-all duration-300 hover:opacity-70"
                to={'/dashboard'}
              >
                LOG IN
              </Link>
            </form>
            <p className="policy text-center text-sm font-extralight">
              <small>
                By clicking Sign Up, you agree to our Terms and that you have
                read our{' '}
                <a
                  href="#"
                  className="text-primary no-underline hover:underline"
                >
                  Privacy Policy
                </a>
              </small>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};
export default Auth;
