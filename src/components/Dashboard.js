import React from 'react';
import Logout from './Logout';
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Dashboard = (props) => (
<div>
<h1> Welcome {localStorage.getItem("name")}</h1>
<Link className="button" to="/courses">Show Courses</Link>
<Logout />
</div>
);

export default Dashboard
