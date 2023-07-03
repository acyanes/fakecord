// TODO: Style Page
//       make the default page to render when user is not authed

const Login = () => {
  return (
    <div className='login-wrapper'>
      <h1>Log in</h1>
      <form>
        <label htmlFor=''>
          <p>username</p>
          <input type='text' />
        </label>
        <label htmlFor=''>
          <p>password</p>
          <input type='password' />
        </label>
        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
