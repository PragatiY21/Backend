import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body =() =>{

  //local state variable
const [listOfRestaurants , setlistOfRestaurants] = useState ([]);
const [filteredRestaurant,setfilteredRestaurant] = useState([]);
//whenever state variable update, react triggers a reconciliation cycle (re-renders the component )
const [searchText, setsearchText] =useState("");
useEffect( () => {
fetchData();
}, []);

const fetchData = async () => {
  const data = await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5002211&lng=77.5404459&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  const json =await data.json();
  console.log(json);
  setlistOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  setfilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
};

// if(listOfRestaurants.length === 0)
// {
//   return <Shimmer/>;
// }
  //normal variable
  // let listOfRestaurants =[ {
  //   data : {
  //     id: "332521",
  //     cloudinaryImageId: "wa8a7irojeoame4wv9yi",
  //     name: "Bikanervala",
  //     avgRating: 4.3,
  //   }
  // },
  // {
  //   data : {
  //     id: "332555",
  //     cloudinaryImageId: "wa8a7irojeoame4wv9yi",
  //     name: "KFC",
  //     avgRating: 3,
  //   }
  // },
  // {
  //   data : {
  //     id: "332522",
  //     cloudinaryImageId: "wa8a7irojeoame4wv9yi",
  //     name: "PIZZAHUT",
  //     avgRating: 4.1,
  //   }
  // }
//]
//console.log(listOfRestaurants);
//using ternarary operator
 const onlineStatus = useOnlineStatus();
// if(onlineStatus === false) return <h1> looks like you are offline</h1>


    return listOfRestaurants.length === 0 ? (<Shimmer/>): (
      <div className="body">
      <div className="filter">
        <input type ='text' className ="search-box" value={searchText} onChange={(e)=> {setsearchText(e.target.value);}}/>
        <button onClick={()=>{

          // onclick the button update the restaurant card and update the Ui 
          const fiteredRestaurant =listOfRestaurants.filter((res) =>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
          setfilteredRestaurant(fiteredRestaurant);
        }}>Search</button>
<button 
//family.filter(person => person.age > 18);

  className="filter-btn" onClick={() => {
    
  const filteredlist =listOfRestaurants.filter(
  (res)=> res.info.avgRating > 4);

  setlistOfRestaurants(filteredlist);
  console.log(listOfRestaurants);
  
} } 
  > Top Rated Restaurant
  </button>

      </div>
      <div  className="res-Container">
  {
    filteredRestaurant.map((restaurant) => (<Link key={restaurant.info.id} to={"/restaurant/" +restaurant.info.id }><RestaurantCard  resData={restaurant}/></Link>) )
  }
         
       
      
      </div>
      </div>
    )
  }

  export default Body;