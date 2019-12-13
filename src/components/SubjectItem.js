import React from "react";
import { connect } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { topicsList } from "../actions/courses";
import SearchBox from "./SearchBox";
import filtering from "../actions/search";

class SubjectItem extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      topic_names: [],
      topic_ids: [],
      topics: []
    }
  }

  componentDidMount() {
    const subject = this.props.match.params.id

      const filtered = this.props.courses.filter((course) => course.subject_name === subject);
      const id = filtered[0].id
      axios.post('https://api.involveteacher.space/public/api/v1/topics', {
        subject_id: id
       })
       .then((response) => {
         const topics = response.data.data
         const topic_names = [];
         const topic_ids = [];
            
         for (var i = 0; i < topics.length; i++) {
              topic_names.push(topics[i].topic_name)
              topic_ids.push(topics[i].topic_id)
         }

         this.setState(() => ({topic_ids, topic_names, topics}))
         this.props.dispatch(topicsList(this.state.topics))
                console.log(this.props.topics)
         console.log(topic_names, topic_ids)
         
       }, (error) => {
         console.log(error);
       });

  }
  
     

  render () {

    return (
<div className="container-fluid grey-color">
<div className="jumbotron">
      <div className="container-fluid d-flex justify-content-between">
      <div>
      <SearchBox />
      </div>
      <div>
      {
       (this.props.subjects.length === this.props.courses.length)? <h2 className="viewing">Viewing {this.props.courses.length} subjects</h2> : <h2 className="not-viewing">Not viewing {this.props.courses.length- this.props.subjects.length} subjects of {this.props.courses.length} subjects due to filters</h2>
      }
     
      </div>
      </div>
      </div>
      <div className="main-container row container-fluid">

      {
        this.state.topics.map(topic=>(
          <div key={topic.topic_name,topic.topic_id} className="smaller-container">
          <Link className="text-container" to={`/${topic.topic_id}`}>
          <h2 >{topic.topic_name}</h2>
          </Link>
          </div>
        ))
      }
      
    </div>
</div>
      
    )
  }
}


  const mapStateToProps = state => {
    return {
      courses: state.courses,
      topics: state.topicData,
      subjects: filtering(state.subjectNames, state.filter)
    };
  };
  export default connect(mapStateToProps)(SubjectItem);

  
