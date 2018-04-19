/**
 * Created by Михаил on 12.04.2018.
 */
/**
 * Created by Михаил on 07.04.2018.
 */
const initialState = {
    sources:[],
    articles:[],
    filters:{},
    netError:'',
    link:'',
    pageToShow:1
};

export default function session(state=initialState,action) {
    switch(action.type) {
        case 'REQUESTED_DATA_SUCCEEDED'   :return {...state,sources:action.sources};
        case 'REQUESTED_NEWS_SUCCEEDED'   :return {...state,articles:action.articles};
        case 'FILTER_DATA'                :return {...state,filters:action.filters};
        case 'CHANGE_PAGE'                :return {...state,pageToShow:action.pageToShow,link:action.link};
        case 'REQUESTED_DATA_FAILED'      :return {...state,netError:action.netError};
        default: return state;
    }
}