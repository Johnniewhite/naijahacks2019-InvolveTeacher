import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import subtopicData from "../reducers/subtopicData";
import { subTopicsList } from "../actions/courses";

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
   this.props.dispatch(subTopicsList(this.state.subTopics))
          console.log(this.props.subtopicData)
       
     }, (error) => {
       console.log(error);
     });

  }



  render () {

    return (
      <div>
      {
        this.state.subTopics.map(subtopic=>(
          <div key={subtopic.unit_name + subtopic.unit_id}>
          <Link to={`/${subtopic.unit_id}`}>
          <h1>{subtopic.unit_name}</h1>
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
    topics: state.topicData,
    subtopicData: state.subtopicData
  };
};

export default connect(mapStateToProps)(Subtopics);



// import React from "react";
// import { connect } from "react-redux";
// import axios from "axios";
// import { Link } from "react-router-dom";

// class Subtopics extends React.Component {
//   constructor(props) {
//     super(props);
//     this.view = this.view.bind(this);

//     this.state = {
//       topic_names: [],
//       topic_ids: [],
//       topics: []
//     };
//   }
//   view(e) {
//     e.preventDefault();
  
//     const subject = this.props.match.params.id

//     const filtered = this.props.courses.filter((course) => course.subject_name === subject);
//     const id = filtered[0].id
//     axios.post('https://api.involveteacher.space/public/api/v1/units', {
//       topic_id: id
//      })
//      .then((response) => {
       
              
//        console.log(response)
       
//      }, (error) => {
//        console.log(error);
//      });
// }



//   render() {
//     return <div>
//     <h1>Welcome</h1>
//     </div>;
//   }
// }

// const mapStateToProps = state => {
//   return {
//     courses: state.courses,
//     topics: state.topicData
//   };
// };

// export default connect(mapStateToProps)(Subtopics);
