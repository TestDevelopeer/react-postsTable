import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

export const postsAPI = {
    getPosts(pageSettings, sortSettings, searchText = '') {
        const {page, limit} = pageSettings;
        const {sort, order} = sortSettings;
        const searchQuery = searchText !== '' ? `&q=${searchText}` : '';
        return instance.get(`/posts?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}${searchQuery}`);
    }
}