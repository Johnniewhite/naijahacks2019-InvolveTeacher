import React from 'react';
import { connect } from 'react-redux';
import { search } from '../actions/filters';

class SearchBox extends React.Component {

    constructor (props) {
        super(props)
        this.text = this.text.bind(this);
        // this.state = {
        //     text: ""
        // }
    }

    text(e) {
        const text = e.target.value;
        this.props.dispatch(search({text}))
    }

    render () {

        return (
            <input type="text" className="search" placeholder="Search course" onChange={this.text}/>
        )
    }
}


const mapStateToProps = state => {
    return {
      courses: search(state.courses, state.filter),
      auth: state.auth,
    };
  };
  
  export default connect(mapStateToProps)(SearchBox);


