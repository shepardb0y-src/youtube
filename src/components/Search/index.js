import React from "react";
import "./styles.css";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardVoiceOutlinedIcon from "@mui/icons-material/KeyboardVoiceOutlined";
import axios from "axios";

const Search = (props) => {
  console.log(props.videoArray);
  const vid = props.videoArray;
  console.log(vid);
  return (
    <div>
      {
        /* {props.videoArray.map((url) => {
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
      })} */
        vid
      }
    </div>
  );
};

export default Search;
