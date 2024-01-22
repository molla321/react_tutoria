// import { Link } from "react-router-dom"; {/* Sudu link o amra bebohar korte pari tobe Navlink bebohar korle besi lav jemon active abong pendimg er subida ache */}

import { NavLink } from "react-router-dom";


const RRouterDom = () => {
    return (
        <div className=" container">
            
            {/* <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/InClose"}>InClose</Link></li>   
            <li><Link to={"/RRDIndex"}>RRDIndex</Link></li>
            <li><Link to={"/World"}>World</Link></li> */}


            <li><NavLink className={({isActive})=>isActive?" text-danger ":" text-primary"} to={"/"}>Home</NavLink></li>
            <li><NavLink className={({isActive})=>isActive?"text-danger":"text-primary"} to={"/InClose"}>InClose</NavLink></li>
            <li><NavLink className={({isActive})=>isActive?"text-danger":"text-primary"} to={"/RRDIndex"}>RRDIndex</NavLink></li>
            <li><NavLink className={({isActive})=>isActive?"text-danger":"text-primary"} to={"/World"}>World</NavLink></li>
        </div>
    );
};

export default RRouterDom;