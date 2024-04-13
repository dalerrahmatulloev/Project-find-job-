import { mainData, adminData, applicData } from "./dom.js";

const API = 'http://localhost:3000/data'

async function getMain(){
    try {
        let {data} = await axios.get(API)
        mainData(data)
    } catch (error) {
        console.log(error);
    }
}

async function getAdmin(){
    try {
        let {data} = await axios.get(API)
        adminData(data)
    } catch (error) {
        console.log(error);
    }
}

async function getAppl(){
    try {
        let {data} = await axios.get(API)
        applicData(data)
    } catch (error) {
        console.log(error);
    }
}

async function addFun(user){
    try {
        let {data} = await axios.post(API, user)
        getAdmin()
    } catch (error) {
        console.log(error);
    }
}

async function editFun(id ,user){
    try {
        let {data} = await axios.put(`${API}/${id}`, user)
        getAdmin()
    } catch (error) {
        console.log(error);
    }
}

export {getMain, getAdmin, getAppl, addFun, editFun}