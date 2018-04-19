/**
 * Created by Михаил on 18.04.2018.
 */
import React from 'react';
import '../styles/Article.css';
const Content = (props)=>
    <div className="hoverBlock">
        <p><a href={props.url} target="_blank">{props.url}</a></p>
        <button onClick={(e)=>props.changePage(2,props.idurl)}>View</button>
    </div>;


export default Content;