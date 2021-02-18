import { useState, useContext } from 'react';

import firebase from '@/utils/firebase';

import { AuthContext } from '@/utils/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { currentUser } = useContext(AuthContext);
  const currentUserEmail = currentUser ? currentUser.email : 'unknown visitor';

  const register = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        resetInput();
      })
      .catch(err => {
        console.error(err);
      });
  };
  const login = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        resetInput();
      })
      .catch(err => {
        console.error(err);
      });
  };
  const logout = () => {
    firebase.auth().signOut();
  };
  const resetInput = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Login page</h1>
      <p>Welcome {currentUserEmail}</p>
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={register}>Register</button>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Log Out</button>
    </div>
  );
};

export default Login;
