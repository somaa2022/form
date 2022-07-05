import React, { useState } from 'react'

const DetailsFilling = () => {

    const [fees,changedfees]=useState("1000");
    const initialValues = { firstname: "", lastname: "", fullname: "",attemptednumber: "",phonenumber: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [fullname, setFullname] = useState();
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  
  return (
    <>
    <form className=''>
        <h1>Details Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>First Name</label>
            <input
              type="text"
              name="firstname"
              placeholder="firstname"
              value={formValues.firstname}
              onChange={handleChange}
              
            />
          </div>
          
          <div className="field">
            <label>Last Name</label>
            <input
              type="text"
              placeholder="lastname"
              name="lastname"
              value={formValues.lastname}
              onChange={handleChange}
              
            />
          </div>
          <div className="field">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="fullname"
              value={fullname}
               onChange={setFullname}
            />
          </div>
          
          <div className="field">
            <label>Attempted Numbers</label>
            <input
              type="text"
              name="attemptednumber"
              placeholder="attempted numbers"
              value={formValues.attemptednumber}
              onChange={handleChange}
             
            />
          </div>
          <div className="field">
            <label>Phone Number</label>
            <input
              type="text"
              name="phonenumber"
              placeholder="phonenumber"
              value={formValues.phonenumber}
              onChange={handleChange}
             
            />
          </div>
          <div className="field">
            <label>Fees</label>
            <input style={{color: "white"}} value={fees}
              onChange={()=>changedfees(fees)}
             name="fees"
              
            />
          </div>
          <div>
          <button>Submit</button>
          </div>
        </div>
      </form>
    </>
  )
}

export default DetailsFilling