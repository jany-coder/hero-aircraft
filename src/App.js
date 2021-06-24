import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import React, {useState, useEffect} from 'react';
import fire from './fire';
import Hero from './components/Hero/Hero';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login/Login';

function App() {
  
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState('false');

  const clearInputs = () => {
      setEmail('');
      setPassword('');
  }

  const clearError = () => {
      setEmailError('');
      setPasswordError('');
  }

  const handleLogin = () => {
      clearError();
      fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => {
          // eslint-disable-next-line default-case
          switch(err.code) {
              case "auth/invalid-email":
              
              // eslint-disable-next-line no-fallthrough
              case "auth/user-disabled":
              
              // eslint-disable-next-line no-fallthrough
              case "auth/user-not-found":
                  setEmailError(err.message);
                  break;
              
                  case "auth/wrong-password":
                  setPasswordError(err.message);
                  break;
                 
          }
      })
  }

  const handleSignup = () => {
      clearError();
      fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(err => {
          // eslint-disable-next-line default-case
          switch(err.code) {
              case "auth/email-already-in-use":
              
              // eslint-disable-next-line no-fallthrough
              case "auth/invalid-email":
              
                  setEmailError(err.message);
                  break;
              
                  case "auth/weak-password":
                  setPasswordError(err.email);
                  break;
                 
          }
      })
  }

  const handleLogout = () => {
    fire.auth().signOut().then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    });
  }

  const authListener = () => {
      fire.auth().onAuthStateChanged((user) =>{
          if (user) {
              clearInputs();
              setUser(user);
              
          } else {
              setUser("");
          }
      })
  }

  useEffect(()=> {
      authListener();
  }, [])

  return (
    <div className="App">
      
      {user ? (
      
        <Hero handleLogout={handleLogout}/>
        ) : ( 
        
        <Login 
          email={email} 
          setEmail={setEmail} 
          password={password} 
          setPassword = {setPassword}
          handleLogin = {handleLogin}
          handleSignup = {handleSignup}
          hasAccount = {hasAccount}
          setHasAccount = {setHasAccount}
          emailError = {emailError}
          passwordError = {passwordError}
        

           />)
      }
            
      {/* <Router>
        <Switch>
          <Route exact path="/">
           
          </Route>
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;
