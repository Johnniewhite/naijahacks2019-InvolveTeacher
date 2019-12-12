import React from "react";
import { addCourses }  from "../actions/courses";
import { connect } from 'react-redux';
import axios from 'axios';

class CoursesListPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }

  componentDidMount() {
    axios.get(`https://api.involveteacher.space/public/api/v1/subjects`)
      .then(res => {
        const users = res.data;
        this.setState({ users });
        {
          this.state.users.map((course) => {
              this.props.dispatch(addCourses(course.subject_name))
          })
       }
       console.log(this.state.users)
      })
  }

  // componentDidMount() {
  //   axios.get("https://api.involveteacher.space/public/api/v1/subjects")
  //     .then(res => res.json())
  //     .then(object => {
  //       this.setState({ users: object.data });
  //       {
  //          this.state.users.map((course) => {
  //              this.props.dispatch(addCourses(course.subject_name))
  //          })
  //       }
  //       console.log(this.state.users)
  //     })
  //     .catch(console.log);
  // }
  render() {
    return (
      <div>
        {
            this.state.users.map((course) =>(
                  <h1 key={course.id}>Course: {course.subject_name}</h1>
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
