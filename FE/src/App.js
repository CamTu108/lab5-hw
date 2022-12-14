import React, { useState, useEffect } from "react";
import "./App.css";
import Video from "./components/Video";
import axios from "axios";
const App = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      axios
        .get(`http://localhost:8000/v2/posts`)
        .then((res) => {
          console.log(res.data);
          setVideos(res.data);
        })
        .catch((error) => console.log(error));
    }
    fetchData();
  }, []);
  return (
    <div>
      <div className="app">
        <div className="app__videos">
          {videos.map(
            ({ url, channel, description, song, likes, shares, messages }) => (
              <Video
                key={url}
                url={url}
                channel={channel}
                description={description}
                song={song}
                likes={likes}
                shares={shares}
                messages={messages}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
