import React from "react";
import { useState } from "react";
import axios from "axios";

const Nav = () => {
  const [formValue, setFromValue] = useState("");
  const [videoArray, setVideoArray] = useState([]);

  const apiKey =
    "https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyB5LRryc3dUt4OujKIXptSJcX46XTnUlvY";

  const handleChange = (e) => {
    setFromValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitting");

    // Any AJAX calls/HTTP REQUEST using axios/fetch will return a Promise => response
    axios
      .get(
        ` https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyB5LRryc3dUt4OujKIXptSJcX46XTnUlvY&type=video&part=snippet&maxResults=10&q=${formValue}`
      )
      // whenever we get a response back, only then will then() run
      // we no longer need to use json()
      .then((response) => response)
      .then((videoArray) => {
        console.log(videoArray.data.items);
        const videoIdArray = videoArray.data.items.map(
          (v) => "https://www.youtube.com/embed/" + v.id.videoId
        );
        setVideoArray(videoIdArray);
        console.log(videoIdArray);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <label htmlFor="Search-bar">Search:</label>
        <input onChange={handleChange} type="text" value={formValue} />
        <button type="submit">Click</button>
      </form>

      {videoArray.map((url) => {
        console.log(url);
        let iframe = (
          <div>
            <iframe
              width="560"
              height="315"
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

export default Nav;
