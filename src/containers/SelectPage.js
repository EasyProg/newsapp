/**
 * Created by Михаил on 11.04.2018.
 */
import React, { Component } from 'react';
import Filter from '../components/Filter';
import '../styles/SelectPage.css';
import {filterData} from '../actions/actions';
import {connect} from 'react-redux';
const category = ['business','entertainment','gaming','general','music','politics','science-and-nature','sports','technology'];
const language = ['en','de','fr'];
const country =  ['au','de','gb','in','it','us'];
class SelectPage extends Component {

handleChange = (filters,category) => {
    this.props.filterData(this.props.filters,category,filters);
};

    render ()  {
        return (
            <div className="selectContainer">
                <Filter data={category} onChange={this.handleChange} name="category"/>
                <Filter data={language} onChange={this.handleChange} name="language"/>
                <Filter data={country}  onChange={this.handleChange} name="country"/>
            </div>
                )
                }
}

const mapStateToProps = (state) => {
    return {
        filters:state.filters
           }
};

const mapDispatchToProps = (dispatch) => {
    return  {
        filterData:    (filters,cat,value)=>dispatch(filterData(filters,cat,value)),
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(SelectPage);