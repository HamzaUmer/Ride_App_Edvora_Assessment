import "./navbar.scss"
import { useStore } from "../../Store/Store";

const Navbar = () => {
    const { user } = useStore();
  return (
   <div className="navbar">
       <div className="container">
           <div className="left">Edvora</div>
           <div className="right">
               <h3>{ user.name }</h3>
               <img src={ user.profile_key } alt="" />
               </div>
           </div>
       </div>
  )
}

export default Navbar