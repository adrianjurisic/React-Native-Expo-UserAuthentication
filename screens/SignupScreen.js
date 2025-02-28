import { useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import { createUser } from '../util/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { Alert, TurboModuleRegistry } from 'react-native';

function SignupScreen() {
  const [isAuth, setIsAuth] = useState(false);
  async function signupHandler({email, password}){
    setIsAuth(true);
    try{
      await createUser(email, password);
    }catch(error){
      Alert.alert('Authentication failed!', 'Could not create user, please check your input.');
    }
    setIsAuth(false);
  }

  if(isAuth){
    return <LoadingOverlay message="Creating User..."/>
  }

  return <AuthContent onAuthenticate={signupHandler}/>;
}

export default SignupScreen;