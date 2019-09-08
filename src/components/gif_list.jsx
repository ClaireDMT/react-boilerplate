import React from 'react';
import Gif from './gif';

const GifList = (props) => {
  return (
    <div className="gif-list">
      {props.gifs.map(gif => <Gif id={gif.id} key={gif.id} selectGifYo={props.selectGifYo} />)}
;
    </div>
  );
};

export default GifList;
