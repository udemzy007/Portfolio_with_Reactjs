import React from "react";
import "./scrollup.css"

const ScrollUp = () => {
    
    window.addEventListener('scroll', function () {
        const scrollUp = document.querySelector(".scrollup");

        /* When the scroll is heigher than 560 viewpoint height, add the show-scroll class to a tag with the 
        scroll-top class */
        if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
        else scrollUp.classList.remove("show-scroll");
    });

    return ( 
        <a href="#" className="scrollup"><i className="uil uil-arrow-up scrollup__icon"></i></a>
     );
}
 
export default ScrollUp;