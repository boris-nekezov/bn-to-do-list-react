import React from 'react';
import HeaderTaskAdd from './HeaderTaskAdd/HeaderTaskAdd';
import HeaderTitle from './HeaderTitle/HeaderTitle';

const Header = ({titleAdd, handleChange, handlePost}) => {
  return (
    <div>
      <HeaderTitle title="BN To Do List" />
      <HeaderTaskAdd 
        titleAdd={titleAdd}
        handleChange={handleChange} 
        handlePost={handlePost} />
    </div>
  );
}

export default Header;
