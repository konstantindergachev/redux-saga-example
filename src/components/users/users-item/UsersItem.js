import React from 'react';
import { connect } from 'react-redux';
import Button from '../../ui/button/Button';
import './UsersItem.scss';

const UsersItem = ({ user }) => {
  return (
    <section className="oneuser">
      <div className="oneuser oneuser__name">
        name: <span>{user.name}</span>
      </div>
      <div className="oneuser oneuser__username">
        username: <span>{user.username}</span>
      </div>
      <div className="oneuser oneuser__address">
        address: <span>{user.address.name}</span>
      </div>
      <div className="oneuser oneuser__phone">
        phone: <span>{user.phone}</span>
      </div>
      <div className="oneuser oneuser__website">
        website: <span>{user.website}</span>
      </div>
      <div className="oneuser oneuser__company">
        company: <span>{user.company.name}</span>
      </div>
      <Button />
    </section>
  );
};

const mapStateToProps = (state) => ({
  user: state.users.user,
});

export default connect(mapStateToProps, null)(UsersItem);
