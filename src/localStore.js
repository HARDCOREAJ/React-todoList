export function save(key,value){
    return window.localStorage.setItem(key,JSON.stringfy(value))
}

export function load(key){
    return JSON.parse(window.localStorage.getItem(key))
}