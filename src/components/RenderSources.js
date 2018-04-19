/**
 * Created by Михаил on 18.04.2018.
 */
import React, {Component} from 'react';
import {Popover} from 'antd';
import '../styles/RenderSources.css';
import Content from './Content';
export default class RenderSources extends Component {
    render() {
        if (this.props.pageToShow===1)
        return      (
                    this.props.sources.map((item, i) =>
                         <Popover title="Details"
                                  trigger="hover"
                                  content=
                                  {
                                  <Content url={item.url}
                                           idurl={item.id}
                                           changePage={this.props.changePage}
                                  />
                                  }
                                  overlayStyle={{opacity:0.6}}
                                  placement="bottom">
                         <div     className="sourceItem" key={i}>{item.name}</div>
                         </Popover>

                    ));
                    else return (
                        this.props.sources.map ((item, i) =>
                        <div
                                className="sourceItemNew"
                                key={i}
                                onClick={(e)=>this.props.changePage(2,item.id)}>
                        {item.name}</div>
                                               ));
            }
}