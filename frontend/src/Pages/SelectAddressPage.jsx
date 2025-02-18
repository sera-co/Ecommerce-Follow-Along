import { useEffect,useState } from "react";
import AddressList from "../components/AllAddresses/Addresses";
import axios from "axios";

export default function SelectAddress(){
    const [AllAddresses,setAllAddresses]=useState([]);
    const data = useSelector((state) => state.user);
    useEffect(()=>{
        const fetchAddress=async()=>{
            const token=localStorage.getItem('token')
            if(!token){
                alert('token missing please login again')
            }
            const response=await axios.get(
                `http://localhost:8080/user/get-addresses?token=${token}`
            )
            console.log(response.data.userInfo)
            setAllAddresses(response.data.userInfo.address)
        }
        fetchAddress();

    },[])
    return(
        <div>
            <AddressList addresses={AllAddresses}/>
        </div>
    )
    
}