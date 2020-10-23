import React, { Component } from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
const parse = require("html-react-parser");


// const Post = ({ post, first500 }) => {
class Post extends Component {
  // const shortenText = (text) => {
  //   if (text) {
  //     return text.length > 100 ? text.substring(0, 100) + '...' : text
  //   }
  // }

  constructor(props) {
    super(props);
    this.state = {
      post: this.props.post,
    };
  }

  returnDate = (date) => {
    // let newDate = new Date(date);
    let returnDate = date.toLocaleString("en-GB", { hour12: false });
    return <p>Released on: {returnDate.slice(0, 10)}</p>;
  };

  truncate = (str, no_words) => {
    return str.split(" ").splice(0, no_words).join(" ");
  }

  render() {
    // if(this.state.post.text.length > 500){
    //   return(

    //   )
    // }
    return (
      <div className="container">
        <div
          className="n"
        // style={{ borderLeftColor: "white", borderRightColor: "white" }}
        >
          <div className="card-body">
            {/* <div className="row"> */}
            {/* <div className="col-6"> */}
            <h4 className="display-5">{this.state.post.title}</h4>
            <div
              dangerouslySetInnerHTML={{ __html: (this.truncate(this.state.post.text, 30) + "...") }}
            ></div>
            <div className="row">
              <Link
                to={`/post/${this.state.post._id}`}>
                <AiOutlineArrowRight className="mr-2" />
                Read More
              </Link>
            </div>
            {/* {parse(`
            <div classname="col-6>
            ${("Posted on ", this.returnDate(this.state.post.blogPostTime))}
            ${this.state.post.text}
            </div>
            `)} */}
            {/* <Link to={`/post/${this.state.post._id}`} className='btn btn-primary' >Read More</Link> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
