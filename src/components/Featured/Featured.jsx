import "./featured.scss"
import Img1 from "../../img/Vector.png"
import Rides from "../Rides/Rides";
import { useState} from "react";
import { useStore } from "../../Store/Store";
import NoFound from "../NoFound/NoFound";
import { sortByNearest } from "../../Logic/DistCal";

const Featured = () => {
    
    const [filter,setFilter] = useState( false);
    const { filters, handleFilters } = useStore();
    const {  selectUpcomingRides, selectPastRides,status,handleStatus} = useStore()
    const { user, getRides } = useStore();
    const ride = sortByNearest( getRides(), user.station_code )
    
        // get rides length
        const upcomingCount = selectUpcomingRides().length;
        const pastCount = selectPastRides().length;

  return (
    <div className="feature">
        <div className="container">
        <div className="left">
            <span className={(status === "" ?  "list-active": null) || "list"} onClick={ () => handleStatus("") }>Nearest rides</span>
            <span className={(status === "upcoming" ? "list-active" : null) || "list"} onClick={ () => handleStatus("upcoming") }>Upcoming rides {`(${ upcomingCount })`}</span>
            <span className={(status === "past" ? "list-active" : null) || "list"}onClick={ () => handleStatus("past") }>Past rides {`(${ pastCount })`}</span>
            </div>
        <div className="right">
            <img src={Img1} alt="" />
            <span onClick={()=> setFilter(!filter)}>Filters</span>
            <div className={filter?"options options-active": "options"} >
                     <input type="text" placeholder="Filters"/>
                     <select onChange = { ({ target }) => handleFilters({ ...filters, state: target.value }) } 
                value = { filters.state } >
                         <option value= "" disabled selected hidden>State</option>
                         <option value="Maharashtra">Maharashtra</option>
                         <option value="Uttar Pardesh">Uttar Pardesh</option>
                     </select>
                     <select onChange = { ({ target }) => handleFilters({ ...filters, city: target.value }) }
                value = { filters.city }>
                         <option  value= "" disabled selected hidden>City</option>
                         <option value="Panvel">Panvel</option>
                         <option value="Kolhapur">Kohalpur</option>
                         <option value="Agra">Agra</option>
                     </select>
                 </div>
            </div>
        </div>
        {/*Nearest Rides*/}
        <div>
        { ride.length ? ride.map( ( r, i ) => (
                <Rides key = { i } station_code = { user.station_code } { ...r } /> )) :
                <NoFound />
            }
        </div>

        </div>
  );
}

export default Featured