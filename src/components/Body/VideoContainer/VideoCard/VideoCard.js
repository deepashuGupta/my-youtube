const VideoList = ({ info }) => {
  const { channelTitle, publishedAt, title, thumbnails } = info.snippet;
  const { viewCount } = info.statistics;
  return (
    <div className="w-72 bg-gray-200 mt-2 rounded-lg p-2 shadow-lg hover:shadow-none cursor-pointer mb-8">
      <img className="rounded-md" src={thumbnails.medium.url} alt="thumnail" />
      <ul className="my-1">
        <li className="whitespace-normal font-bold text-md">{title}</li>
        <li>{channelTitle}</li>
        <li>
          {viewCount} | {publishedAt}
        </li>
      </ul>
    </div>
  );
};

export default VideoList;
