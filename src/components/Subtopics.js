import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import subtopicData from "../reducers/subtopicData";
import { subTopicsList } from "../actions/courses";
import SearchBox from "./SearchBox";
import filtering from "../actions/search";
import { trackPromise } from "react-promise-tracker";
class Subtopics extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subTopic_names: [],
      subTopic_ids: [],
      subTopics: []
    };
  }
  componentDidMount () {
    const subject = this.props.match.params.id

    console.log(subject)
   trackPromise (
    axios.post('https://api.involveteacher.space/public/api/v1/units', {
      topic_id: subject
     })
     .then((response) => {
       
      const subTopics = response.data.data;
      const subTopic_names = [];
      const subTopic_ids = []

      for (var i = 0; i < subTopics.length; i++) {
        subTopic_names.push(subTopics[i].unit_name)
        subTopic_ids.push(subTopics[i].unit_id)
   }

   this.setState(() => ({subTopic_ids, subTopic_names, subTopics}))
   this.props.dispatch(subTopicsList(subTopics_names))
          console.log(this.state.subTopic_ids)
       
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
       (this.props.topicData.length === this.props.topic.length)? <h2 className="viewing">Viewing {this.props.topic.length} subtopics</h2> : <h2 className="not-viewing">Not viewing {this.props.topicData.length- this.props.topic.length} subjects of {this.props.topicData.length} subjects due to filters</h2>
      }
     
      </div>
      </div>
      </div>
      <div className="main-container row container-fluid">
      {
        this.state.subTopics.map(subtopic=>(
          <div className="smaller-container" key={subtopic.unit_name + subtopic.unit_id}>
          <Link className="text-container" to={`/${subtopic.unit_name}`}>
          <h3>{subtopic.unit_name}</h3>
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
    topicData: state.subtopicData,
    topic: filtering(state.subtopicData, state.filter)
  };
};
export default connect(mapStateToProps)(Subtopics);

