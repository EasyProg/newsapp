/**
 * Created by Михаил on 14.04.2018.
 */
import React, { Component } from 'react';
import SelectPage from './SelectPage';
import ResultPage from './ResultPage';
import NewsView from './NewsView';
import {connect} from 'react-redux';
import '../styles/MainCont.css';

class MainCont extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.error)
        return  <div className="error">{this.props.error}</div>;
        else if (this.props.pageToShow ===1)
        return (
                <div>
                <SelectPage/>
                <ResultPage/>
                </div>
               );
        else return (
            <div>
                <ResultPage/>
                <NewsView/>
            </div>
        )

    }
}
const mapStateToProps = (state) => {
    return {
        pageToShow:state.pageToShow,
        error:state.netError
    }
};

export default connect(mapStateToProps)(MainCont)