import React, { Component } from 'react';

class Gif extends Component {
  handleClick = ({ selectGifYo, id }) => {
    if (selectGifYo) {
      selectGifYo(id);
    }
  }

  render({ id, handleClick }) {
    const src = `https://media.giphy.com/media/${id}/giphy.gif`;
    return (
      <img src={src} alt="" className="gif" onClick={handleClick} />
    );
  }
}

export default Gif;
