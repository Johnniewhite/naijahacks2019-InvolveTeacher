import React from "react";
import { trackPromise } from "react-promise-tracker";
import axios from "axios";
import Iframe from "react-iframe";

export default class ContentPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: null,
      wolf: ""
    };
  }

  componentDidMount() {
    trackPromise(
      axios
        .get(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${window.location.pathname}&maxResults=1&key=AIzaSyACOWJX-fuG30Z-bVGZsNm7xmuJUnGJb6U`
        )
        .then(res => {
          const todo = res.data.items[0].id.videoId;
          this.setState({
            todo: todo
          });
        })
        .catch(err => console.log(err))
    );

    //   trackPromise(
    //     axios.get("https://api.unsplash.com/search/photos", {
    //             params: { query: window.location.pathname },
    //             headers: {
    //                 Authorization:
    //                 "Client-ID b10c7c51244554f3613fc1f5a3647d05e656900b0916460c118718b22aa4cba5"
    //             }
    //         }).then(response => {
    //             console.log(response.data.results);
    //         })

    // )
  }

  render() {
    return (
      <div className="container-fluid row ">
        <div className="col-12 iframe">
          <Iframe
            className="m-auto"
            url={`http://www.youtube.com/embed/${this.state.todo}`}
            height="450px"
            width="500px"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
          />{" "}
           
        </div>{" "}
               
      </div>
    );
  }
}
