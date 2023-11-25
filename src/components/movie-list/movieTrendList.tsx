import React from "react";
import index from "../movie-card/index";

interface MovieTrendListProps {
  recommendeList: any;
}

const data = [
  {
    imgurl: "medium.jpg",
    text: "2022, movie",
    name: "Death Race",
  },
  {
    imgurl:"large2.jpg",
    text: "2019, Tv series",
    name: "Below Eco ",
  },
  {
    imgurl: "medium.jpg",
    text: "2020, movie",
    name: "Furious 4",
  },
  {
    imgurl: "large.jpg",
    text: "2021, Tv series",
    name: "Hunter",
  },
  
];

const MovieTrendList = ({ trendingList }: any) => {
  return (
    <div
    style={{
        display:"flex",
        justifyContent:"space-between",
    
    }}
    >
      {/* <header>MovieTrendList</header> */}

      {data.map((item, index) => {
        return (
          <div
            style={{ height: "250px", width: "320px", boxShadow: "", padding:"15px", borderRadius:"10px" }}
          >
            <img src={item.imgurl} alt="images" style={{ width: "300px",borderRadius:"10px" }} />
            <p >{item.text}</p>
            <h3>{item.name}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default MovieTrendList;
