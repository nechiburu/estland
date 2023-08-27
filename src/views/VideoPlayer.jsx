import React, { useEffect } from 'react';

const VideoPlayer = () => {
    const videoRef = React.useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.volume = 0.2; // Establece el volumen al 20%
        }
    }, []);

    return (
        <div className="video-container">
            <video width="100%" height="auto" controls autoPlay playinline ref={videoRef}>
                <source src="./video.mp4" type="video/mp4" />
                Tu navegador no soporta el elemento de video.
            </video>
        </div>
    );
};

export default VideoPlayer;
