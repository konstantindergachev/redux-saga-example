import React from 'react';
import { connect } from 'react-redux';
import { createUser } from '../../../redux/actions/usersActions';
import Button from '../../ui/button/Button';
import TextFieldGroup from '../../ui/text-field-group/TextFieldGroup';
import './UserCreate.scss';

class UserCreate extends React.Component {
  state = {
    name: '',
    username: '',
    address: '',
    phone: '',
    website: '',
    company: '',
  };
  handleChange = (ev) => {
    ev.preventDefault();

    this.setState({ [ev.target.name]: ev.target.value });
  };

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { name, username, address, phone, website, company } = this.state;
    const { createUser } = this.props;
    const userData = {
      name,
      username,
      address,
      phone,
      website,
      company,
    };

    createUser(userData);
  };
  render() {
    const { name, username, address, phone, website, company } = this.state;
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <TextFieldGroup
            placeholder="name"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
          <TextFieldGroup
            placeholder="username"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
          <TextFieldGroup
            placeholder="address"
            name="address"
            value={address}
            onChange={this.handleChange}
          />
          <TextFieldGroup
            placeholder="phone"
            name="phone"
            value={phone}
            onChange={this.handleChange}
          />
          <TextFieldGroup
            placeholder="website"
            name="website"
            value={website}
            onChange={this.handleChange}
          />
          <TextFieldGroup
            placeholder="company"
            name="company"
            value={company}
            onChange={this.handleChange}
          />
          <input type="submit" value="Submit" className="btn" />
        </form>
        <Button />
      </React.Fragment>
    );
  }
}

export default connect(null, {createUser})(UserCreate);
