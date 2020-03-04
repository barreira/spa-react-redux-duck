import { connect } from 'react-redux';
import * as React from 'react';

import { Wrapper } from '../styles';
import { StoreState } from '../../store/ducks';
import { User } from '../../store/ducks/user';

const mapStateToProps = (state: StoreState) => ({
  user: state.user
});

type FCUserResultProps = {
  user: User[];
};

const FCUser = ({ user }: { user: User }): JSX.Element => {
  return (
    <li>
      <div>
        <strong>{`Name: ${user.firstName} ${user.lastName}`}</strong>
      </div>
      <span>{`Age: ${user.age}`}</span>
    </li>
  );
};

const FCUserResult: React.FC<FCUserResultProps> = (
  props: FCUserResultProps
) => {
  return (
    <Wrapper>
      <ul>
        {props.user.map(user => (
          <FCUser user={user} />
        ))}
      </ul>
    </Wrapper>
  );
};

export const UserResult = connect(mapStateToProps)(FCUserResult);
