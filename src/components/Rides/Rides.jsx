import "./rides.scss"
import Img1 from "../../img/map.png"
import { DistCalc } from "../../Logic/DistCal";

const Rides = (props) => {
    const { 
        id,
        origin_station_code,
        station_path,
        date,
        state,
        city,
        station_code
    } = props;

    const d = new Date( date * 1000 );


    // time
    const _date = d.toDateString().split(" ");
    const _time = d.toTimeString().substring(0, 5)
    const txtDate =  `${ _date[2] }th ${ _date[1] } ${ _date[3] } ${ _time }` ;

    const distance =DistCalc( station_path,  station_code );
  return (
   <div className="rides">
       <div className="wrapper">
           <div className="left">
               <img src={Img1} alt="" />
               </div>
           <div className="center">
               <span>Rate Id : <b>{`"${id}"`}</b></span>
               <span>Origin Station : <b>{ origin_station_code }</b></span>
               <span>station_path : {" "}<b> { `[${ station_path.join(", ") }]` }</b></span>
               <span>Date : <b>{`"${txtDate}"`}</b></span>
               <span>Distance :  <b>{`"${distance}"`}</b></span>
               </div>
           <div className="right">
               <div className="r-left"><span>{ city }</span></div>
               <div className="r-right"><span>{ state }</span></div>
               </div>
           </div>
       </div>
  )
}

export default Rides