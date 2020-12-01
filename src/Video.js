import React, { useState, useRef } from 'react'
import "./Video.css";

function Video() {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);

    const handleVideoPress = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
    };

    return (
        <div className="video">
            <video
                onClick={handleVideoPress}
                className="video__player"
                loop
                ref={videoRef}
                src=""
            >

            </video>

            {/* VideoFooter */}
            {/* VideoSidebar */}
        </div>
    )
}

export default Video
