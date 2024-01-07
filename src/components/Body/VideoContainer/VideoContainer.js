import { useEffect, useState } from "react";
import { POPULAR_VIDEO_API } from "../../../utils/constants";
import VideoCard from "./VideoCard/VideoCard";
import { Link } from "react-router-dom";

const VideoConatiner = () => {
  const [videoList, setVideoList] = useState([]);
  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    const data = await fetch(POPULAR_VIDEO_API);
    const json = await data.json();
    // console.log(json);
    setVideoList(json.items);
  };
  if (videoList.length < 1) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="flex flex-wrap justify-between overflow-y-auto">
      {videoList.map((v, i) => {
        return (
          <Link key={v.id} to={"/watch?v=" + v.id}>
            <VideoCard info={v} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoConatiner;
