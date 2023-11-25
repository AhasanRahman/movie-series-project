import React from "react";

interface MovieListProps {
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
      {
        imgurl: "medium.jpg",
        text: "2020, movie",
        name: "Furious 4",
      },
    
  ];

const MovieList = ({ recommendList }: any) => {
  return <div  style={{
    
      display:"grid",
    gridTemplateColumns:"25% 25% 25% 25%",
    

}}>
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
  </div>;
};

export default MovieList;
