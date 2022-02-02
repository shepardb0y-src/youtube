import React from "react";

import { useState, useContext, useEffect } from "react";
import "./style.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import Usercontext from "../../contexts/Usercontext";

const Home = () => {
  const [formValue, setFromValue] = useState("");
  const [videoArray, setVideoArray] = useState([]);
  const user = useContext(Usercontext);
  const baseUrl = "https://youtube.googleapis.com/youtube/v3/search?";
  const apiKey = "&key=AIzaSyB5LRryc3dUt4OujKIXptSJcX46XTnUlvY";
  const firstParam = "&type=video&part=snippet&maxResults=";
  const maxResult = "12&q=";
  const secondParam = "trending-today-USA";
  useEffect(() => {
    fetchVideo();
  }, []);
  const fetchVideo = async () => {
    try {
      const response = await axios
        .get(
          `${baseUrl}${apiKey}${firstParam}${maxResult} ${formValue} ${secondParam}`
        )
        .then((res) => {
          console.log(res.data.items);
          const videoIdArray = res.data.items.map(
            (v) => v.snippet.thumbnails.default.url
          );
          setVideoArray(videoIdArray);
        });
    } catch (error) {
      console.log(error);
    }
  };

  console.log(videoArray);
  return (
    <div>
      {videoArray.map((url) => {
        let iframe = (
          <div>
            <iframe
              className="url-png"
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
  );
};

export default Home;
