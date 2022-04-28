import React from "react";

import ReactPlayer from "react-player";

function Video() {
  const externalvideo =
    '"https://www.youtube.com/embed/uKrZbERaivY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay=1& clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
  return (
    <div className="videowrapper">
      <ReactPlayer
        url={externalvideo}
        className="autoplayvideo"
        playing
        controls={false}
        loop
        muted
        width="100%"
        height="200%"
      />
    </div>
  );
}

export default Video;
