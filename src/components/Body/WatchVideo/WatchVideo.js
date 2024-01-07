import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { hideMenu } from "../../../utils/store/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchVideo = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch the action to hide the side bar
    dispatch(hideMenu());
  }, []);
  return (
    <iframe
      width="1000"
      height="500"
      src={"https://www.youtube.com/embed/" + searchParams.get("v")}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
};

export default WatchVideo;
