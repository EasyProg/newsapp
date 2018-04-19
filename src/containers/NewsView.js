/**
 * Created by Михаил on 14.04.2018.
 */
import React,{Component} from 'react';
import '../styles/NewsView.css';
import {fetchArticles} from '../actions/actions';
import Article from '../components/Article';
import {connect} from 'react-redux';
class NewsView extends Component {
componentWillReceiveProps(nextProps) {
    if (nextProps.link!==this.props.link)
    this.props.fetchArticles(nextProps.link);
}
componentDidMount() {
    this.props.fetchArticles(this.props.link);
}

    render() {
    const articles = this.props.articles.map((item,i)=>
    {let release_date = new Date(item.publishedAt).toLocaleString();
            return <Article
            url={item.urlToImage}
            title={item.title}
            author={item.author}
            date={release_date}/>
    }
    );
        return (
            <div className="newsContainer">
                {articles}
            </div>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        articles:state.articles,
        link:state.link

    }
};

const mapDispatchToProps = (dispatch) => {
    return  {
        fetchArticles:    (url)=>dispatch(fetchArticles(url))
            }
};

export default connect(mapStateToProps,mapDispatchToProps)(NewsView);