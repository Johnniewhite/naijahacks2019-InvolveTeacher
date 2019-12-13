import React from "react";
import { connect } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { topicsList } from "../actions/courses";

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
      <div>
      {
        this.state.topics.map(topic=>(
          <div key={topic.topic_name,topic.topic_id}>
          <Link to={`/${topic.topic_id}`}>
          <h1>{topic.topic_name}</h1>
          </Link>
          </div>
        ))
      }
      
    </div>
    )
  }
}



const mapStateToProps = state => {
    return {
      courses: state.courses,
      topics: state.topicData
    };
  };
  
  export default connect(mapStateToProps)(SubjectItem);

  // <button className="button" onClick={this.view}>Click to View Topics</button>