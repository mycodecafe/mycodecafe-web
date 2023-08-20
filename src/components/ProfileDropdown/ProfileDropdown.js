import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from '../../redux/actions/authActions';

const ProfileDropdown = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(signOut()); // Dispatch your logout action
  };

  return (
    <Dropdown.Menu>
      {/* Add dropdown items here */}
      <Dropdown.Item as={Link} to="/profile">Profile</Dropdown.Item>
      <Dropdown.Item as={Link} to="/settings">Settings</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
    </Dropdown.Menu>
  );
};

export default ProfileDropdown;
