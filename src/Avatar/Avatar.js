import React from 'react';
import propTypes from "prop-types";
import AvatarImage from "../assets/avatar-image.png";
import "./Avatar.css"

function Avatar({page}) {
    const avatarClass = `avatar ${page}`;
    const spanClass = `shadow-overlay-${page}`;

  return (
    <div>
        <span className={spanClass}></span>
        <img src={AvatarImage} className={avatarClass} alt='avatar' />
    </div>
  )
};

Avatar.propTypes = {
    page: propTypes.string.isRequired,
};

export default Avatar;