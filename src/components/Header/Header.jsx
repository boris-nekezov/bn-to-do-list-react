import React, { Component } from 'react';
import HeaderTaskAdd from './HeaderTaskAdd/HeaderTaskAdd';
import HeaderTitle from './HeaderTitle/HeaderTitle';

export default class Header extends Component {
  render() {
    const { title, titleAdd, handleChange, handlePost } = this.props;
    return (
      <div>
        <HeaderTitle title="BN To Do List" />
        <HeaderTaskAdd 
          title={title}
          titleAdd={titleAdd}
          handleChange={handleChange} 
          handlePost={handlePost} />
      </div>
    );
  }
}

