import React, { useState,useContext } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { ShopContext } from '../Context/ShopContext';
import { toast } from 'react-toastify';
import "./CSS/proceedtopay.css"
const ProceedToPaymentPage = () => {

    const { all_product, cartItems, removeFromCart } = useContext(ShopContext);

    var query = require('india-pincode-search');
    const[pincode,setPincode]=useState();
  const [formData, setFormData] = useState({
    name: localStorage.getItem('name'),
    addressLine1: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
    contactNumber: ''
  });
  const [address,setaddress]=useState([]);
  const [step, setStep] = useState(1); // 1 for delivery address, 2 for payment methods
  const [formError, setFormError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
    if (step === 1) {
      // Validate if all required fields are filled in Step 1
      if (validateStep1()) {
        setStep(2);
        setFormError(false);
      } else {
        setFormError(true);
      }
    } else {
      // Handle payment submission logic here
      console.log('Payment submitted:', formData); // Example: Replace with actual submission logic
    }
  };

  const validateStep1 = () => {
    const { name, addressLine1, city, state, postalCode, country, contactNumber } = formData;
    return (name !== '' && addressLine1 !== '' && city !== '' && state !== '' && postalCode !== '' && country !== '' && contactNumber !== '');
  };
  const handleChangepincode=(e)=>{
    setaddress(query.search(e.target.value));
    
   
  }
  if(address.length!=0)
    {
        formData.postalCode=address[0].pincode;
        formData.addressLine1=address[0].office;
        formData.city=address[0].city;
        formData.state=address[0].state;
        formData.country="INDIA";
        console.log(address);
    }
    let tot=0;
    all_product.map((e) =>
    {
        if (cartItems[e.id] > 0) 
        {
          tot = tot + (e.new_price * cartItems[e.id]);
        }
    })

  return (
    <div className="container mt-5 deliveryform">
      {step === 1 && (
        <div>
          <h2>Step 1: Delivery Address</h2>
          {formError && (
            <Alert variant="danger">
              Please fill out all fields.
            </Alert>
          )}
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" name="name" value={formData.name} onChange={handleChange} required />
            </Form.Group>
            <Form.Group controlId="formPostalCode">
              <Form.Label>Postal/ZIP Code</Form.Label>
              <Form.Control type="text" placeholder="Enter postal/ZIP code" name="postalCode" value={pincode} onChange={handleChangepincode} required />
            </Form.Group>
            <Form.Group controlId="formAddress1">
              <Form.Label>Address Line 1</Form.Label>
              <Form.Control type="text" placeholder="Enter address line 1" name="addressLine1" value={formData.addressLine1} onChange={handleChange} required />
            </Form.Group>
            
            <Form.Group controlId="formCity">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="Enter city" name="city" value={formData.city} onChange={handleChange} required />
            </Form.Group>
            <Form.Group controlId="formState">
              <Form.Label>State/Province</Form.Label>
              <Form.Control type="text" placeholder="Enter state/province" name="state" value={formData.state} onChange={handleChange} required />
            </Form.Group>
           
            <Form.Group controlId="formCountry">
              <Form.Label>Country</Form.Label>
              <Form.Control type="text" placeholder="Enter country" name="country" value={formData.country} onChange={handleChange} required />
            </Form.Group>
            <Form.Group controlId="formContactNumber">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control type="text" placeholder="Enter contact number" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />
            </Form.Group>
            <Button variant="primary" onClick={handleNext}>Next</Button>
          </Form>
        </div>
      )}
      {step === 2 && (
        <div>
          <h2>Step 2: Payment Methods</h2>
          <p>Review your delivery address:</p>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Address:</strong> {formData.addressLine1}, {formData.city}, {formData.state}, {formData.postalCode}, {formData.country}</p>
          
          <hr />    
          <h2>RS{tot}</h2>

          

          <Button variant="primary" onClick={handleNext}>Pay Now</Button>
        </div>
      )}
    </div>
  );
};

export default ProceedToPaymentPage;
