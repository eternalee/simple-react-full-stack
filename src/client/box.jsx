// import { Module } from "module";
import React, { Component } from 'react';

export default class Box extends React.Component {
  render(){
    return (
      <div>Hiya</div>
      //<div id={this.props.id} className="box" onClick={() => this.props.cb(this.props.attraction)}>{this.props.attraction}</div>
    )
  }
}