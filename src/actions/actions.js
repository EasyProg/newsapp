/**
 * Created by Михаил on 12.04.2018.
 */
export const requestData = () => {
    return { type: 'REQUESTED_DATA' }
};

export const requestDataSuccess = (sources) => {
    return { type: 'REQUESTED_DATA_SUCCEEDED', sources}
};

export const requestNewsSuccess = (articles) => {
    return { type: 'REQUESTED_NEWS_SUCCEEDED', articles}
};

export const requestDataError = (error) => {
    return { type: 'REQUESTED_DATA_FAILED',netError:error }
};

export const fetchSources = () => {
    return { type: 'FETCHED_SOURCES' }
};

export const fetchArticles = (link) => {
    return { type: 'FETCHED_ARTICLES',link }
};
//FETCHED_ARTICLES
export const changePage = (page,link)=> {
    return {type:'CHANGE_PAGE',pageToShow:page,link}
};
export const filterData = (cur,cat,filters) =>
{   let copy = Object.assign({},cur);
    if (!filters.length)
    delete copy[cat];
    else copy[cat] = filters;
    return { type: 'FILTER_DATA',  filters:copy}
};
