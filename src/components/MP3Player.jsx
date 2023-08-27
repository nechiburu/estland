import React, { useState, useRef, useEffect } from "react";

const SongList = [
  {
    icon: "ti-music",
    no: "01",
    song: "Innerbloom (Vintage Culture & Zerky Remix)",
    artist: "RÜFÜS DU SOL",
    src: "./final1.mp3",
    desc: "Breve descripción o género de la canción 1.",
    animationDelay: "",
  },
  {
    icon: "ti-music",
    no: "01",
    song: "Where Did You Go",
    artist: "Kaskade",
    src: "./final2.mp3",
    desc: "Breve descripción o género de la canción 1.",
    animationDelay: "150",
  },
  {
    icon: "ti-music",
    no: "02",
    song: "Taraka (feat.WhoMadeWho)",
    artist: "GORDO",
    src: "./final3.mp3",
    desc: "Breve descripción o género de la canción 2.",
    animationDelay: "300",
  },
  // ... puedes agregar más canciones aquí
];

const MP3Player = ({ shouldPlay }) => {
  const [currentSong, setCurrentSong] = useState(SongList[0].src);
  const audioRef = useRef(null);

  useEffect(() => {
    if (shouldPlay) {
      playCurrentSong();
    }
  }, [shouldPlay, currentSong]);

  const playCurrentSong = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.05;
      audioRef.current.muted = true;
      let playPromise = audioRef.current.play();

      if (playPromise !== undefined) {
        playPromise.then(_ => {
          audioRef.current.muted = false;
        }).catch(error => {
          console.error("Error al reproducir:", error);
        });
      }
    }
  };

  const playSong = (src) => {
    setCurrentSong(src);
    playCurrentSong();
  };

  const playNextSong = () => {
    let currentIndex = SongList.findIndex(song => song.src === currentSong);
    let nextIndex = (currentIndex + 1) % SongList.length;
    setCurrentSong(SongList[nextIndex].src);
  };

  return (
    <>
      <div className="row gy-4">
        {SongList.map((val, i) => (
          <div
            className="col-sm-6 col-lg-4"
            key={i}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay={val.animationDelay}
          >
            <div
              className={`song-box ${currentSong === val.src ? 'playing' : ''}`}
              onClick={() => playSong(val.src)}
            >
              <div className="icon">
                <i className={val.icon}></i>
              </div>
              <h6>
                <span>{val.no}.</span> {val.song}
              </h6>
              <h5>{val.artist}</h5>
            </div>
          </div>
        ))}
      </div>
      <audio ref={audioRef} src={currentSong} controls muted style={{ width: '100%' }} onEnded={playNextSong} />
    </>
  );
};

export default MP3Player;