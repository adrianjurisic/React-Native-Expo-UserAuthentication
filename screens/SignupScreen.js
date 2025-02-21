import { useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import { createUser } from '../util/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay';

function SignupScreen() {
  const [isAuth, setIsAuth] = useState(false);
  async function signupHandler({email, password}){
    setIsAuth(true);
    await createUser(email, password);
    setIsAuth(false);
  }

  if(isAuth){
    return <LoadingOverlay message="Creating User..."/>
  }

  return <AuthContent onAuthenticate={signupHandler}/>;
}

export default SignupScreen;