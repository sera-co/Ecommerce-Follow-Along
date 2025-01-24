import React,{useState} from "react";

const AddressCard=()=>{
    const [city,setCity]=useState('');
    const [country,setCountry]=useState('');
    const [add1,setAdd1]=useState('');
    const [add2,setAdd2]=useState('');
    const [zipCode,setZipCode]=useState('');
    const [addressType,setAddressType]=useState('');

    const handleSubmit=(e)=>{
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
    }
    return (
        <div style={styles.container}>
          <h2>Enter Your Address</h2>
          <form onSubmit={handleSubmit} style={styles.form}>
            <label style={styles.label}>Full Name:</label>
            <input type="text" name="name" value={city} onChange={''} style={styles.input} required />
    
            <label style={styles.label}>Street:</label>
            <input type="text" name="street" value={country} onChange={''} style={styles.input} required />
    
            <label style={styles.label}>City:</label>
            <input type="text" name="city" value={add1} onChange={''} style={styles.input} required />
    
            <label style={styles.label}>State:</label>
            <input type="text" name="state" value={add2} onChange={''} style={styles.input} required />
    
            <label style={styles.label}>Zip Code:</label>
            <input type="text" name="zip" value={zipCode} onChange={''} style={styles.input} required />
    
            <label style={styles.label}>Country:</label>
            <input type="text" name="country" value={addressType} onChange={''} style={styles.input} required />
    
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