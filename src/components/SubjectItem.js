import React from "react";
import { connect } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { topicsList } from "../actions/courses";
import SearchBox from "./SearchBox";
import filtering from "../actions/search";
import { trackPromise } from "react-promise-tracker";

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
      const id = filtered[0].id;
      trackPromise(
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
           this.props.dispatch(topicsList(this.state.topic_names))
                  console.log(this.props.topics)
           console.log(topic_names, topic_ids)
           
         }, (error) => {
           console.log(error);
         })
      )

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
       (this.props.topicsData.length === this.props.topics.length)? <h2 className="viewing">Viewing {this.props.topicsData.length} topic/topics</h2> : <h2 className="not-viewing">Not viewing {this.props.topicsData.length- this.props.topics.length} subjects of {this.props.topicsData.length} subjects due to filters</h2>
      }
     
      </div>
      </div>
      </div>
      <div className="main-container row container-fluid">

      {
        this.state.topics.map(topic=>(
          <div key={topic.topic_name,topic.topic_id} className="smaller-container">
          <Link className="text-container" to={`/subtopics/${topic.topic_id}`}>
          <h3 >{topic.topic_name}</h3>
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
      topicsData: state.topicData,
      topics: filtering(state.topicData, state.filter)
    };
  };
  export default connect(mapStateToProps)(SubjectItem);

  
