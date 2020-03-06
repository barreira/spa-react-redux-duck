import * as React from 'react';
import { connect } from 'react-redux';

import { Container, List } from '../../styles';
import { StoreState } from '../../store/ducks';
import {
  User,
  deleteUserAction,
  fetchUsersAction
} from '../../store/ducks/user';

type UsersListProps = {
  users: User[];
  deleteUser: typeof deleteUserAction;
  fetchUsers: () => void;
  //fetchUsers: typeof fetchUsersAction;
};

const FCUser: React.FC<{ user: User; onDelete: (id: number) => void }> = ({
  user,
  onDelete
}): JSX.Element => {
  return (
    <li>
      <div>
        <strong>{`Name: ${user.firstName} ${user.lastName}`}</strong>
      </div>
      <div>{`Age: ${user.age}`}</div>
      <button onClick={() => onDelete(user.id)}>Delete</button>
    </li>
  );
};

const UsersList: React.FC<UsersListProps> = ({
  users,
  deleteUser,
  fetchUsers
}): JSX.Element => {
  return (
    <Container>
      <p>
        <button onClick={fetchUsers}>Fetch more users...</button>
      </p>
      {users.length ? (
        <List>
          {users.map(user => (
            <FCUser
              key={`user-${user.id}-${user.firstName}`}
              user={user}
              onDelete={deleteUser}
            />
          ))}
        </List>
      ) : (
        <div>No users do display...</div>
      )}
    </Container>
  );
};

const mapStateToProps = (state: StoreState) => ({
  users: state.user
});

export default connect(mapStateToProps, {
  deleteUser: deleteUserAction,
  fetchUsers: fetchUsersAction
})(UsersList);
