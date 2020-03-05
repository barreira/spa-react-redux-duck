import * as React from 'react';
import { connect } from 'react-redux';

import { saveUserAction, User } from '../../store/ducks/user';
import { Container } from '../../styles';
import Input from '../Input';

interface UserFormProps {
  saveUser: typeof saveUserAction;
}

const UserForm: React.FC<UserFormProps> = ({ saveUser }): JSX.Element => {
  const [user, setUser] = React.useState<Partial<User>>({});

  const handleUser = (
    { currentTarget: { value } }: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    switch (field) {
      case 'firstName':
        setUser({
          ...user,
          firstName: value
        });
        break;
      case 'lastName':
        setUser({
          ...user,
          lastName: value
        });
        break;
      case 'age':
        setUser({
          ...user,
          age: +value
        });
        break;
    }
  };

  const handleSubmit = () => {
    const { firstName = '', lastName = '', age = 0 } = user;

    saveUser({
      id: Math.random(),
      firstName,
      lastName,
      age
    });

    setUser({});
  };

  return (
    <Container>
      <Input
        title="First name"
        onChange={e => handleUser(e, 'firstName')}
        value={user?.firstName || ''}
      />
      <Input
        title="Last name"
        onChange={e => handleUser(e, 'lastName')}
        value={user?.lastName || ''}
      />
      <Input
        title="Age"
        onChange={e => handleUser(e, 'age')}
        value={user?.age?.toString() || ''}
      />

      {Object.entries(user).length > 0 && (
        <>
          <strong>Temp: user</strong>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </>
      )}

      <button type="submit" onClick={handleSubmit}>
        Save
      </button>
    </Container>
  );
};

export default connect(null, { saveUser: saveUserAction })(UserForm);
