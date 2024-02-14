import React, { useEffect, useState } from "react";
import './input.css';
import { Amplify } from 'aws-amplify';
import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import TodoList from './components/ToDoList';
import { Hub } from "aws-amplify/utils";
import { signInWithRedirect, signOut, getCurrentUser } from "aws-amplify/auth";
import amplifyconfig from './amplifyconfiguration.json';
import 'aws-amplify/auth/enable-oauth-listener';

Amplify.configure(amplifyconfig);

const App = ({ signOut }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [customState, setCustomState] = useState(null);

  useEffect(() => {
    const unsubscribe = Hub.listen("auth", ({ payload }) => {
      switch (payload.event) {
        case "signInWithRedirect":
          getUser();
          break;
        case "signInWithRedirect_failure":
          setError("An error has ocurred during the OAuth flow.");
          break;
        case "customOAuthState":
          setCustomState(payload.data); // this is the customState provided on signInWithRedirect function
          break;
      }
    });

    getUser();

    return unsubscribe;
  }, []);

  const getUser = async () => {
    try {
      const currentUser = await getCurrentUser();
      setUser(currentUser);
    } catch (error) {
      console.error(error);
      console.log("Not signed in");
    }
  };


  return (
    <div className='container mx-auto my-auto flex flex-col justify-center align-center'>
      <Button onClick={signOut}>Sign out</Button>
      
      <TodoList />

      <button onClick={() => signInWithRedirect({ customState: "shopping-cart"})}>Open Hosted UI</button>
      <button onClick={() => signInWithRedirect({ provider: "Facebook", customState: "shopping-cart" })}>
        Open Facebook
      </button>
      <button onClick={() => signInWithRedirect({ provider: "Google", customState: "shopping-cart" })}>
        Open Google
      </button>
      <button onClick={() => signInWithRedirect({ provider: "Amazon", customState: "shopping-cart" })}>
        Open Amazon
      </button>
      <button onClick={() => signInWithRedirect({ provider: "Apple", customState: "shopping-cart" })}>
        Open Apple
      </button>
      <button onClick={() => signOut()}>Sign Out</button>
      <div>{user?.username}</div>
      <div>{customState}</div>
    </div>
  );
};

export default withAuthenticator(App);