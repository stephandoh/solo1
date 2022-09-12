import "./Footer.css";

import twitter from "./assets/Twitter.png";
import facebook from "./assets/Facebook.png";
import instagram from "./assets/Instagram.png";
import github from "./assets/Github.png";


function Footer(){
    return(
        <div className="footer">
            <img src={twitter} className="twitter" alt="pic" />
            <img src={facebook} className="facebook" alt="pic" />
            <img src={instagram} className="instagram" alt="pic" />
            <img src={github} className="github" alt="pic" />
        </div>     
    );
}

export default Footer;