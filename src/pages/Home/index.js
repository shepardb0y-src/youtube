import React from "react";

import { useState, useContext, useEffect } from "react";
import "./style.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import Usercontext from "../../contexts/Usercontext";

const Home = () => {
  const [videoArray, setVideoArray] = useState([]);
  const user = useContext(Usercontext);
  const baseUrl = "https://youtube.googleapis.com/youtube/v3/search?";
  const apiKey = "&key=AIzaSyBq_tTvCbp79dd8TA2k6LCdB5EAlvdomgk";
  const firstParam = "&type=video&part=snippet&maxResults=";
  const maxResult = "12&q=";
  const secondParam = "react-js";
  useEffect(() => {
    fetchVideo();
  }, []);
  const fetchVideo = async () => {
    try {
      const response = await axios
        .get(`${baseUrl}${apiKey}${firstParam}${maxResult} ${secondParam}`)
        .then((res) => {
          console.log(res.data.items);
          const videoIdArray = res.data.items.map(
            (v) => "https://www.youtube.com/embed/" + v.id.videoId
          );
          setVideoArray(videoIdArray);
        });
    } catch (error) {
      console.log(error);
    }
  };

  console.log(videoArray);
  return (
    <div className="Recommended-videos">
      <h5 className="Recommended-video-title">Recommended Videos</h5>
      <div className="url-png">
        {videoArray.map((url) => {
          let iframe = (
            <div>
              <iframe
                width="360"
                height="115"
                src={url}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          );
          return iframe;
        })}
      </div>
    </div>
  );
};

export default Home;
