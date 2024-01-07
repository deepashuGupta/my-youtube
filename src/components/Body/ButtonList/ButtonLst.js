import Button from "./Button";

const ButtonList = () => {
  let arr = [
    "All",
    "Css",
    "Music",
    "Gaming",
    "Grapich Design",
    "UI Design",
    "Dramedy",
    "News",
    "Trailers",
    "Live",
    "Tamil Cenema",
    "Lecture",
    "Cricket",
    "Algorithms",
    "Game Show",
    "Samrtphone",
  ];
  return (
    <div>
      <ul>
        <li className="whitespace-nowrap overflow-x-auto">
          {arr.map((item) => {
            return <Button key="Please provide key" name={item} />;
          })}
        </li>
      </ul>
    </div>
  );
};

export default ButtonList;
