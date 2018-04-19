/**
 * Created by Михаил on 15.04.2018.
 */
import React, {Component} from 'react';
import '../styles/Article.css';
import noimage from '../img/noimage.jpg';
export default class Article extends Component {
    render () {
        return (
            <div className="articleCont">
                <img src={this.props.url||noimage}/>
                <p className="title">{this.props.title}</p>
                <div>
                <p>{this.props.author}</p>
                <p>{this.props.date}</p>
                </div>
            </div>
        )
    }
}