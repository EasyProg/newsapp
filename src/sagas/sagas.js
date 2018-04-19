/**
 * Created by Михаил on 12.04.2018.
 */
import {takeEvery} from 'redux-saga';
import {call,put} from  'redux-saga/effects';
import {requestData,requestDataSuccess,requestDataError,requestNewsSuccess} from '../actions/actions';
const idkey  = "cead0b34bafc41249f913f32278cdf5a";
export default function* watchFetchData() {
    yield takeEvery('FETCHED_SOURCES', getData);
    yield takeEvery('FETCHED_ARTICLES', getNews);
}

let expire = (key, delay) => {
    setTimeout(function () {
        localStorage.removeItem(key);
    }, delay);
};
function* getData() {
    let endpoint  = "https://newsapi.org/v2/sources?";
    let resultUrl = `${endpoint}apiKey=${idkey}`;
    let data = {};
    yield put(requestData());
    if (localStorage.getItem('sources')!==null)
    data.sources = JSON.parse(localStorage.getItem('sources'));
    else
    data = yield call(()=> {
    return fetch(resultUrl, {method: 'GET', mode: 'cors'})
            .then(response =>
            {
                if (response.status !== 200) {
                    return response.status;
                }
                else return response.json();
            });

    });
    if  (data.sources)  {
        yield  put(requestDataSuccess(data.sources));
        localStorage.setItem('sources', JSON.stringify(data.sources));
                }
         else yield put(requestDataError(data));
    expire('sources',1200000);
}

function* getNews(source)           {
    let endpoint  = "https://newsapi.org/v2/top-headlines?";
    let resultUrl = `${endpoint}sources=${source.link}&apiKey=${idkey}`;
    let data = {};
    yield put(requestData());
    if (localStorage.getItem('article')!==null&&
        localStorage.getItem('link')===source.link)
    data.articles = JSON.parse(localStorage.getItem('article'));
    else
    data = yield call(()=>          {
        return fetch(resultUrl, {method: 'GET', mode: 'cors'})
            .then(response =>       {
                if (response.status !== 200) {
                    return response.message;
                }
                else return response.json();
                                    });

                                    });
    if (data.articles)              {
        yield  put(requestNewsSuccess(data.articles));
        localStorage.setItem('article', JSON.stringify(data.articles));
        localStorage.setItem('link', JSON.stringify(source.link));
                                    }
    else yield put(requestDataError(data));
    expire('article',1200000);
}