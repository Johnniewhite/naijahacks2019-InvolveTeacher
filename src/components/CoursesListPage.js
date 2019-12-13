import React from "react";
import { addCourses }  from "../actions/courses";
import { connect } from 'react-redux';
import axios from 'axios';
import { Link } from "react-router-dom";

class CoursesListPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      courses: []
    };
  }


  componentDidMount() {
    axios.get('https://api.involveteacher.space/public/api/v1/subjects')
  .then((response) => {
    const courses = response.data.data;
    this.setState(() => ({courses}));
    this.props.dispatch(addCourses(courses))
    console.log(courses)
  });
  }
  render() {
    return (
      <div>
        {
            this.props.courses.map((course) => (
              <div key={course.subject_id}>
              <hr />
              <Link to={`course/${course.subject_name}`}><h1>{course.subject_name}</h1> </Link>
              <hr />
              </div>
            ))
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
      courses: state.courses
    };
  };
  
  export default connect(mapStateToProps)(CoursesListPage);
