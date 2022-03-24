import { useState } from "react";
import "./BlogList.css";


function BlogList(props) {

    let [heartCnt, plusHeart] = useState(0);
    

    return (
        <div className="BlogList">
            <h3 className="title-container"> {props.data.title} <span className="Heart" onClick={()=>{plusHeart(heartCnt+1)}} > ❤ </span> {heartCnt} </h3>
            <span> {props.data.date} </span>
            <div> {props.data.do} </div>
            <hr></hr>
        </div>
    )
};

export default BlogList;