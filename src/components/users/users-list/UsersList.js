import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUser, receiverUser, receiverUsers } from '../../../redux/actions/usersActions';
import DeleteButton from '../../ui/delete-button/DeleteButton';
import './UsersList.scss';

class UsersList extends React.Component {
  componentDidMount() {
    const { receiverUsers } = this.props;
    receiverUsers();
  }
  handleDelete = (ev, user) => {
    ev.preventDefault();
    const { deleteUser } = this.props;

    deleteUser(user);
  };
  render() {
    const { users, receiverUser } = this.props;
    return (
      <React.Fragment>
        <ul className="users__list">
          {users &&
            users.map((user) => {
              return (
                <Link key={user.id} to={`/user/${user.id}`} onClick={() => receiverUser(user)}>
                  <li className="users__item">
                    {user.name}: <span>{user.phone}</span>
                    <DeleteButton click={(ev) => this.handleDelete(ev, user)} />
                  </li>
                </Link>
              );
            })}
        </ul>
        <Link to='/create'><button type="button" className="btn btn-create">Create</button></Link>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users.users,
});

export default connect(mapStateToProps, { receiverUsers, receiverUser, deleteUser })(UsersList);
