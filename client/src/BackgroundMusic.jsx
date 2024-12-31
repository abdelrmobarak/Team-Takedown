import React, { useRef, useState } from 'react';
import './backgroundMusic.css';

const BackgroundMusic = ({src}) => {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = async () => {
    try {
      if (isMuted) {
        audioRef.current.muted = false;
        await audioRef.current.play();
      } else {
        audioRef.current.pause();
        audioRef.current.muted = true;
      }
      setIsMuted(!isMuted);
    } catch (error) {
      console.error('Audio playback error:', error);
    }
  };

  return (
    <div className="background-music">
      <audio ref={audioRef} loop>
        <source src={src} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <button className={`mute-button ${isMuted ? 'muted' : 'unmuted'}`} onClick={toggleMute}>
  {isMuted ? (
    <span role="img" aria-label="Unmute">🔇</span>
  ) : (
    <span role="img" aria-label="Mute">🔊</span>
  )}
</button>
    </div>
  );
};

export default BackgroundMusic;
