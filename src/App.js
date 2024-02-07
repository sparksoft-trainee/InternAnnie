import './input.css';
import { Amplify } from 'aws-amplify';
import amplifyconfig from './amplifyconfiguration.json';
import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import TodoList from './components/ToDoList';
Amplify.configure(amplifyconfig);

const App = ({ signOut, user }) => {
  return (
    <div className='container mx-auto my-auto flex flex-col justify-center align-center'>
      {/* <Heading level={1}>Hello {user.username}</Heading> */}
      {/* <Button onClick={signOut}>Sign out</Button>       */}
      <TodoList />
    </div>
  );
};

export default withAuthenticator(App);