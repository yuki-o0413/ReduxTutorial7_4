'use strict';

const BASE_DOMAIN = 'https://0ledx214s0.execute-api.ap-northeast-1.amazonaws.com/cbap_api'


export async function getWikiPages(page_title) {
    const URL = `${BASE_DOMAIN}/wiki_page?page_title=${page_title}`;
    const OPTIONS = {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        headers: {
         "Authorization": 1,
         "Content-Type": "application/json"
        }
    }
    return await fetch(URL, OPTIONS)
        .catch((e) => { throw Error(e); })
        .then(res => res.json())
        .then(json => {
            return Reflect.get(json, "data")
        })
}


export async function getTwitterMasterUserLookups(id) {
    const URL = `${BASE_DOMAIN}/twitter_master_user_lookup?id=${id}`;
    const OPTIONS = {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        headers: {
         "Authorization": 1,
         "Content-Type": "application/json"
        }
    }
    return await fetch(URL, OPTIONS)
        .catch((e) => { throw Error(e); })
        .then(res => res.json())
        .then(json => {
            return Reflect.get(json, "data")
        })
}


export async function getTwitterMasterUserTimelines(id) {
    const URL = `${BASE_DOMAIN}/twitter_master_user_timeline?id=${id}`;
    const OPTIONS = {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        headers: {
         "Authorization": 1,
         "Content-Type": "application/json"
        }
    }
    return await fetch(URL, OPTIONS)
        .catch((e) => { throw Error(e); })
        .then(res => res.json())
        .then(json => {
            return Reflect.get(json, "data")
        })
}


export async function getTwitterMasterFollowerIds(src_master_id) {
    const URL = `${BASE_DOMAIN}/twitter_master_follower_ids?src_master_id=${src_master_id}`;
    const OPTIONS = {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        headers: {
         "Authorization": 1,
         "Content-Type": "application/json"
        }
    }
    return await fetch(URL, OPTIONS)
        .catch((e) => { throw Error(e); })
        .then(res => res.json())
        .then(json => {
            return Reflect.get(json, "data")
        })
}


export async function getTwitterFollowerUserLookups(id) {
    const URL = `${BASE_DOMAIN}/twitter_follower_user_lookup?id=${id}`;
    const OPTIONS = {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        headers: {
         "Authorization": 1,
         "Content-Type": "application/json"
        }
    }
    return await fetch(URL, OPTIONS)
        .catch((e) => { throw Error(e); })
        .then(res => res.json())
        .then(json => {
            return Reflect.get(json, "data")
        })
}


export async function getTwitterMasterGetSearchesDaily(id) {
    const URL = `${BASE_DOMAIN}/twitter_master_get_searches_daily?id=${id}`;
    const OPTIONS = {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        headers: {
         "Authorization": 1,
         "Content-Type": "application/json"
        }
    }
    return await fetch(URL, OPTIONS)
        .catch((e) => { throw Error(e); })
        .then(res => res.json())
        .then(json => {
            return Reflect.get(json, "data")
        })
}

export async function getTwitterMasterGetSearchesTerm(id) {
    const URL = `${BASE_DOMAIN}/twitter_master_get_searches_term?id=${id}`;
    const OPTIONS = {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        headers: {
         "Authorization": 1,
         "Content-Type": "application/json"
        }
    }
    return await fetch(URL, OPTIONS)
        .catch((e) => { throw Error(e); })
        .then(res => res.json())
        .then(json => {
            return Reflect.get(json, "data")
        })
}