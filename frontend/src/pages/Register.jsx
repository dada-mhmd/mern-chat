import Gender from '../components/Gender';

/* eslint-disable react/no-unescaped-entities */
const Register = () => {
  return (
    <section className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300 mb-4'>
          <span className='text-blue-500'>Register</span>
        </h1>

        <form className='space-y-5 flex flex-col'>
          <div className=''>
            <label htmlFor='label p-2'>
              <span className='text-base label-text text-blue-500'>
                Full Name
              </span>
            </label>
            <input
              type='text'
              placeholder='Full name'
              className='w-full input input-bordered h-10 bg-slate-800 text-white'
            />
          </div>

          <div className=''>
            <label htmlFor='label p-2'>
              <span className='text-base label-text text-blue-500'>
                Username
              </span>
            </label>
            <input
              type='text'
              placeholder='Username'
              className='w-full input input-bordered h-10 bg-slate-800 text-white'
            />
          </div>

          <div>
            <label htmlFor='label'>
              <span className='text-base label-text text-blue-500'>
                Password
              </span>
            </label>
            <input
              type='password'
              placeholder='Password'
              className='w-full input input-bordered h-10 bg-slate-800 text-white'
            />
          </div>

          <div>
            <label htmlFor='label'>
              <span className='text-base label-text text-blue-500'>
                Confirm Password
              </span>
            </label>
            <input
              type='password'
              placeholder='Confirm password'
              className='w-full input input-bordered h-10 bg-slate-800 text-white'
            />
          </div>

          {/* gender component */}
          <Gender />

          <a
            href='#'
            className='text-sm text-blue-400 hover:underline hover:text-blue-600 mt-2 inline-block'
          >
            Already have an account?
          </a>

          <div>
            <button className='btn btn-block btn-sm bg-slate-800 hover:bg-slate-900 tracking-wider text-white mt-2'>
              Register
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
