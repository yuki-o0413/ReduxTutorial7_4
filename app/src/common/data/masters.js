'use strict';

const BASE_DOMAIN = 'https://0ledx214s0.execute-api.ap-northeast-1.amazonaws.com/cbap_api'

// 日時整形
function padZero(num) {
    var result;
    if (num < 10) {
        result = "0" + num;
    } else {
        result = "" + num;
    }
    return result;
}

export async function getGroups() {
    //const URL = `/masters/Groups.json`;
    const URL = `${BASE_DOMAIN}/master_group`;
    const OPTIONS = {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        headers: {
         "Authorization": 1,
         "Content-Type": "application/json"
        }
    }
    //return await fetch(URL)
    return await fetch(URL, OPTIONS)
        .catch((e) => { throw Error(e); })
        .then(res => res.json())
        .then(json => {
            return Reflect.get(json, "data")
        })
}


export async function putGroups(item) {
    const URL = `${BASE_DOMAIN}/master_group/${item.id}`;
    const OPTIONS = {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: {
         "Authorization": 1,
         "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "item": item
        })
    }
    console.log(URL);
    console.log(OPTIONS);
    return await fetch(URL, OPTIONS)
        .then(res => res.json())
        .then(json => Reflect.get(json, "data"));
}

export async function deleteGroups(item) {

    const now = new Date();
    const now_str = "" + now.getFullYear() + padZero(now.getMonth() + 1) +
                    padZero(now.getDate()) + padZero(now.getHours()) +
                    padZero(now.getMinutes()) + padZero(now.getSeconds());

    const URL = `${BASE_DOMAIN}/master_group/${item.id}/${now_str}`;
    const OPTIONS = {
        method: "DELETE",
        mode: "cors",
        cache: "no-cache",
        headers: {
         "Authorization": 1,
         "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "item": item
        })
    }
    console.log(URL);
    console.log(OPTIONS);
    return await fetch(URL, OPTIONS)
        .then(res => res.json())
        .then(json => Reflect.get(json, "data"));
}

export async function getPersons() {
    //const URL = `/masters/episodes.json`;
    const URL = `${BASE_DOMAIN}/master_person`;
    const OPTIONS = {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        headers: {
         "Authorization": 1,
         "Content-Type": "application/json"
        }
    }
    //return await fetch(URL)
    return await fetch(URL, OPTIONS)
        .catch((e) => { throw Error(e); })
        .then(res => res.json())
        .then(json => {
            return Reflect.get(json, "data")
        })
}


export async function putPersons(item) {
    const URL = `${BASE_DOMAIN}/master_person/${item.id}`;
    const OPTIONS = {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: {
         "Authorization": 1,
         "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "item": item
        })
    }
    console.log(URL);
    console.log(OPTIONS);
    return await fetch(URL, OPTIONS)
        .then(res => res.json())
        .then(json => Reflect.get(json, "data"));
}

export async function deletePersons(item) {

    const now = new Date();
    const now_str = "" + now.getFullYear() + padZero(now.getMonth() + 1) +
                    padZero(now.getDate()) + padZero(now.getHours()) +
                    padZero(now.getMinutes()) + padZero(now.getSeconds());

    const URL = `${BASE_DOMAIN}/master_person/${item.id}/${now_str}`;
    const OPTIONS = {
        method: "DELETE",
        mode: "cors",
        cache: "no-cache",
        headers: {
         "Authorization": 1,
         "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "item": item
        })
    }
    console.log(URL);
    console.log(OPTIONS);
    return await fetch(URL, OPTIONS)
        .then(res => res.json())
        .then(json => Reflect.get(json, "data"));
}


export async function getEvents() {
    //const URL = `/masters/Groups.json`;
    const URL = `${BASE_DOMAIN}/stock_event`;
    const OPTIONS = {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        headers: {
         "Authorization": 1,
         "Content-Type": "application/json"
        }
    }
    //return await fetch(URL)
    return await fetch(URL, OPTIONS)
        .catch((e) => { throw Error(e); })
        .then(res => res.json())
        .then(json => {
            return Reflect.get(json, "data")
        })
}

