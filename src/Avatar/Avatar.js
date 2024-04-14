import React from 'react';
import PropTypes from "prop-types";
import AvatarImage from "../assets/avatar-image.png";
import "./Avatar.css"

function Avatar({page}) {
    const avatarClass = `avatar ${page}`;
    const spanClass = `shadow-over-lay-${page}`;

  return (
    <div>
        <span className={spanClass}></span>
        <img src={AvatarImage} className={avatarClass} alt='avatar' />
    </div>
  )
};

Avatar.propTypes = {
    page: PropTypes.string.isRequired,
};

export default Avatar;