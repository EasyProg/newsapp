/**
 * Created by Михаил on 11.04.2018.
 */
import React, { Component } from 'react';
import RenderSources from '../components/RenderSources';
import {Pagination} from 'antd';
import '../styles/ResultPage.css';
import {connect} from 'react-redux';
import {fetchSources,changePage} from '../actions/actions';

class ResultPage extends Component {
    constructor(props)
    {
    super(props);
    this.state={data:[],currentPage:1,newsPerPage:6}
    }
    componentDidMount()
    {
    this.props.fetchData();
    }
    onChange = (page) => {
    this.setState({currentPage:page});
    };
    multiFilter(array, filters) {
    const filterKeys = Object.keys(filters);
    return array.filter((item) => {
    return filterKeys.every(key =>{if
    (filters[key].length)
    return filters[key].indexOf(item[key])>-1});
    });
    }
    componentWillReceiveProps(nextProps) {
    let filters = nextProps.filters;
    let data = nextProps.sources;
    if (filters.country||filters.language||filters.category)
    {
        data = this.multiFilter(data, filters);

    }
    this.setState({data,currentPage:1});
    }
    render ()
    {
    const {currentPage, newsPerPage,data} = this.state;
    const lastIndex = newsPerPage * currentPage;
    const firstIndex = lastIndex - newsPerPage;
    const resultArr = data.slice(firstIndex, lastIndex);
    return  (
            <div className={this.props.pageToShow===1?"resultContainer":"resultContainerNext"}>
                <div className="sourcesCont">
                <RenderSources  changePage={this.props.changePage}
                                sources={resultArr}
                                pageToShow={this.props.pageToShow}/>
                    <br/>
                    <Pagination total={data.length}
                                current={currentPage}
                                onChange={this.onChange}
                                defaultCurrent={1}
                                pageSize={newsPerPage}
                                hideOnSinglePage
                    />
                </div>
                {this.props.pageToShow===2?
                    <button className="back" onClick={(e)=>this.props.changePage(1)}>Back</button>
                    :null}
            </div>
            )
    }
    }

    const mapStateToProps = (state) => {
    return {
        sources:state.sources,
        filters:state.filters,
        pageToShow:state.pageToShow
    }
    };

    const mapDispatchToProps = (dispatch) => {
    return  {
        fetchData:    ()=>dispatch(fetchSources()),
        changePage:   (page,url)=>dispatch(changePage(page,url)),
    }
    };

    export default connect(mapStateToProps,mapDispatchToProps)(ResultPage);