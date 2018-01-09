import {get} from '../get';

export function getSearchData(page, cityname, category, keyword) {
    let keywordStr = keyword ? '/' + keyword : '';
    const result = get('/api/search/' + page + '/' + cityname + '/' + category + '/' + keywordStr);
    return result;
}
