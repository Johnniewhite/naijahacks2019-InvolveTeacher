import React from 'react';
import Logout from './Logout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faUnlockAlt, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Header = () => (
    <div className="d-flex p-2 justify-content-between header-line">
    <div>
    <Link to="/dashboard" className="button header-button"> <FontAwesomeIcon className="icons header-icon" icon={faUserAlt} />InvolveTeacher</Link>
    </div>
    <Logout />
    </div>
);


export default Header