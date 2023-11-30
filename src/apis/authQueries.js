import axios from "axios"

export const loginApi = async (data) =>{
    const res = await axios.post("http://localhost:3000/api/user/auth",data)
    return res.data
}


export const registerApi = async (data) =>{
    const res = await axios.post("http://localhost:3000/api/user/register",data)
    return res.data
}

export const fetchCartApi = async (data) =>{
    const res = await axios.get(`http://localhost:3000/api/cart/get_items/${data}`)
    return res.data
}