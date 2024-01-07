import ButtonList from "./ButtonList/ButtonLst";
import VideoConatiner from "./VideoContainer/VideoContainer";

const MainConatiner = () => {
  return (
    <div className="max-w-[85vw] pl-4">
      <ButtonList />
      <VideoConatiner />
    </div>
  );
};

export default MainConatiner;
