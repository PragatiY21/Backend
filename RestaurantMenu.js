import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () =>{

    
//const [resInfo, setResInfo] = useState(null);

 const {resId} = useParams();

 const resInfo = useRestaurantMenu(resId);
//     console.log(resId);
//  useEffect (
// () =>{

//   fetchMenu();
// },[]);

// const fetchMenu = async () =>{

//     const data = await fetch(MENU_API + resId);
//     console.log(data);

// const json = await data.json();
// console.log(json);
// setResInfo(json.data);
// }

//const {name,cuisines, costForTwo} = resInfo?.cards[2]?.card?.card?.info;
if (resInfo === null) return <Shimmer/>;

const {name,cuisines,costForTwo} =resInfo?.cards[2]?.card?.card?.info;
const {itemCards} = resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
console.log(itemCards);
    return (

        <div>
            <h1> {name}</h1>
            <p>{cuisines.join(",")}-{costForTwo}
            
            </p>
            
            <ul>
                {itemCards.map((item) => (<li
                    key ={item.card.info.id}>
                    {item.card.info.name}-{" Rs"}{item.card.info.price/100 || item.card.info.defaultPrice/100}</li>))}
               {/* <li>{itemCards[0].card.info.name}</li>
               <li>{itemCards[1].card.info.name}</li>
               <li>{itemCards[2].card.info.name}</li> */}

            </ul>
        </div>

    )
}
export default RestaurantMenu;