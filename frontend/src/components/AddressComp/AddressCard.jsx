import React,{useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddressCard=()=>{
    const [city,setCity]=useState('');
    const [country,setCountry]=useState('');
    const [add1,setAdd1]=useState('');
    const [add2,setAdd2]=useState('');
    const [zipCode,setZipCode]=useState('');
    const [addressType,setAddressType]=useState('');
    const navigate=useNavigate();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const addressData={
            city,
            country,
            add1,
            add2,
            zipCode,
            addressType,
        }
        console.log(addressData);
        const token=localStorage.getItem('token');
        if(!token){
            return alert('Token missing')
        }
        const response=await axios.post(`http://localhost:8080/user/add-address?token=${token}`,addressData)
        navigate('/profile');
    }
    return (
        <div style={styles.container}>
          <h2>Enter Your Address</h2>
          <form onSubmit={handleSubmit} style={styles.form}>
            <label style={styles.label}>City:</label>
            <input type="text" name="name" value={city} onChange={(e)=>setCity(e.target.value)} style={styles.input} required />
    
            <label style={styles.label}>Country:</label>
            <input type="text" name="street" value={country} onChange={(e)=>setCountry(e.target.value)} style={styles.input} required />
    
            <label style={styles.label}>Address1:</label>
            <input type="text" name="city" value={add1} onChange={(e)=>setAdd1(e.target.value)} style={styles.input} required />
    
            <label style={styles.label}>Address2:</label>
            <input type="text" name="state" value={add2} onChange={(e)=>setAdd2(e.target.value)} style={styles.input} required />
    
            <label style={styles.label}>Zip Code:</label>
            <input type="text" name="zip" value={zipCode} onChange={(e)=>setZipCode(e.target.value)} style={styles.input} required />
    
            <label style={styles.label}>Address Type:</label>
<select 
  name="addressType" 
  value={addressType} 
  onChange={(e) => setAddressType(e.target.value)} 
  style={styles.input} 
  required
>
  <option value="Home">Home</option>
  <option value="Work">Work</option>
  <option value="Other">Other</option>
</select>
    
            <button type="submit" style={styles.button}>Submit Address</button>
          </form>
        </div>
      );
    };
    
    const styles = {
      container: {
        maxWidth: "400px",
        margin: "20px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
        backgroundColor: "#f9f9f9",
      },
      form: {
        display: "flex",
        flexDirection: "column",
      },
      label: {
        marginBottom: "5px",
        fontSize: "14px",
        fontWeight: "bold",
      },
      input: {
        padding: "8px",
        marginBottom: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        fontSize: "14px",
      },
      button: {
        padding: "10px",
        backgroundColor: "#28a745",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px",
      },
    };
export default AddressCard;