import React, { Component } from "react";
import { AllComment } from "./StyledComment";
import Header from "../../../components/header/Header";
import Nav from "../../../components/nav/Nav";
import CoTitle from "./CommentTitle";
import CommentInfo from "./CommentInfo";
import Footer from "../../../components/footer/Footer";

class CommentUi extends Component {
  render() {
    return (
      <AllComment>
        <Header></Header>
        <Nav></Nav>
        <CoTitle></CoTitle>
        <CommentInfo
          time={this.props.time}
          img={this.props.img}
          commentValue={this.props.commentValue}
          id={this.props.id}
        ></CommentInfo>
        <Footer></Footer>
      </AllComment>
    );
  }
}

export default CommentUi;
