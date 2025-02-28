import AuthContent from '../components/Auth/AuthContent';
import { useState } from 'react';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { login } from '../util/auth';

function LoginScreen() {
  const [isAuth, setIsAuth] = useState(false);
  async function loginHandler({email, password}){
    setIsAuth(true);
    await login(email, password);
    setIsAuth(false);
  }

  if(isAuth){
    return <LoadingOverlay message="Logging In..."/>
  }
  return <AuthContent isLogin onAuthenticate={loginHandler}/>;
}

export default LoginScreen;