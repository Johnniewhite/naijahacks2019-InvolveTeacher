import React from "react";
import { addCourses }  from "../actions/courses";
import { connect } from 'react-redux';
import axios from 'axios';

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
              <div key={course.id}>
              <hr />
              <h1>{course.id}{course.subject_name}</h1>
              <h2>{course.subject_id}</h2>
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
