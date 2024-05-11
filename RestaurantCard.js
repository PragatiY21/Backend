import {CDN_URL} from "../utils/constants"

const RestaurantCard = (props) =>{
    //  console.log(props);
    const {resData} =props;
  
    const {cloudinaryImageId,id,name,avgRating} =resData?.info;
  return(
    <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
         <img 
         className="res-logo" 
         alt= "res-logo" 
         src ={CDN_URL+ cloudinaryImageId }
           />
    
  

      
      <h4>{name}</h4>
      <h4>{avgRating}</h4>
      <h4>48 mins</h4>
      </div>
  )
    }

    export default RestaurantCard;