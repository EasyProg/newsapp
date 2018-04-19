/**
 * Created by Михаил on 11.04.2018.
 */
import React, {Component} from 'react';
import {Select} from 'antd';
import PropTypes from 'prop-types';
import '../styles/Filter.css';
const Option = Select.Option;
export default class Filter extends Component {

constructor(props) {
    super(props);
}

fillOptions(arr) {
return arr.map((item,i)=><Option key={item}>{item}</Option>)
                 }


    render()
    {
        let children = this.fillOptions(this.props.data);
        return (
            <Select
            mode="multiple"
            style={{width:'50%'}}
            placeholder="Please select additional value"
            onChange={(elm)=>this.props.onChange(elm,this.props.name)}
            >
            {children}
            </Select>
                )
    }
}


Filter.propTypes =
{
   data:PropTypes.array
};