import React, { forwardRef, useEffect, useRef, useState,useImperativeHandle } from "react";
import MusicCard from "./MusicCard";
import { useDrop } from "react-dnd";

const MusicEdit = forwardRef(({ },ref) => {
  const audios = [
    {
      id: 1,
      src: "https://p.scdn.co/mp3-preview/0ba9d38f5d1ad30f0e31fc8ee80c1bebf0345a0c",
      x: 10,
      y: 10,
    },
    {
      id: 2,
      src: "https://p.scdn.co/mp3-preview/0ba9d38f5d1ad30f0e31fc8ee80c1bebf0345a0c",
      x: 20,
      y: 20,
    },
    {
      id: 3,
      src: "https://node5.wookoo.shop/api/content/play/0",
      x: 2,
      y:2,
    }
  ];
  const [barPosition, setBarPosition] = useState(0);
  const childMusicRefs = useRef([]);
  const [audioData, setAudioData] = useState(audios);
  const [playAll, setPlayAll] = useState(false);
  const [cnt, setCnt] = useState(4);
  const childPosChange = (x, y, id) => {
    setAudioData((prevData) =>
      prevData.map((audio) => (audio.id == id ? { ...audio, x: x, y: y } : audio))
    );
    console.log(audioData)
  };

  useImperativeHandle(ref, () => ({
    handleRecordingUpload,
  }));

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "div",
    drop: (item, monitor) => {
      console.log(item);
      return { name: item, monitor };
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));
  const handleRecordingUpload = (url) => { //악기랑 음성녹음 업로드
    setAudioData((prevAudios) => [...prevAudios, { id: cnt, src: url, x: 1,y:0 }]);
    setCnt((cnt) => cnt + 1);
    console.log("handle",url)
  }
  const handleFileUpload = (event) => { //파일업로드
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    setAudioData((prevAudios) => [...prevAudios, { id: cnt, src: url, x: 1,y:0  }]);
    setCnt((cnt) => cnt + 1);
  };
  const buttonClick = () => {
    setPlayAll(!playAll);
    console.log(playAll);
  };

  useEffect(() => {
    let interval = null;
    if (playAll) {
      interval = setInterval(() => {
        setBarPosition((prevPosition) => prevPosition + 1);
      }, 1000);
    } else if (!playAll) {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [playAll]);

  useEffect(() => {
    audioData.forEach((audio, index) => {
      if (barPosition >= audio.x) {
        childMusicRefs.current[index].playMusic();
      }
    });
  }, [barPosition, audios]);

  useEffect(() => {
    audioData.forEach((audio, index) => {
      if (!playAll) {
        console.log("aaaa")
        childMusicRefs.current[index].pauseMusic();
      }
    });
  }, [barPosition, audios, playAll]);

  return (
    <div>
      <button onClick={buttonClick}>{playAll ? "일시정지" : "재생"}</button>
      <input type="file" onChange={handleFileUpload} />
      <div
        ref={drop}
      >
        <div style={{ height: "10px", width: `${barPosition}px`, background: "blue" }} />
        <div>
          {audioData.map((audio, index) => (
            <div key={audio.id}>
              <div className="text-white">{audio.id}</div>
              <MusicCard
                audio={audio}
                childPosChange={childPosChange}
                ref={(el) => (childMusicRefs.current[index] = el)}
              ></MusicCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default MusicEdit;
