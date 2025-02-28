import AuthContent from '../components/Auth/AuthContent';
import { useState } from 'react';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { login } from '../util/auth';
import { Alert } from 'react-native';

function LoginScreen() {
  const [isAuth, setIsAuth] = useState(false);
  async function loginHandler({email, password}){
    setIsAuth(true);
    try{
      await login(email, password);
    }catch(error){
      Alert.alert('Authentication failed!', 'Please check your credentials or try again later!');
    }
    setIsAuth(false);
  }

  if(isAuth){
    return <LoadingOverlay message="Logging In..."/>
  }
  return <AuthContent isLogin onAuthenticate={loginHandler}/>;
}

export default LoginScreen;