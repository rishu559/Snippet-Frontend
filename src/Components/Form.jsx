import React, { useState } from 'react';
import axios from 'axios';

const initialFormData = {
  title: '',
  id: '',
  description: '',
  code: [],
  secret: '',
};

const FormComponent = () => {
  const [formData, setFormData] = useState(initialFormData);
    const [code,setCode]=useState({code:"",language:""});
    
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const serverURL = 'http://localhost:5001/api/snippet'; // Replace with the actual server URL

    // Make the POST request
    const handleSubmit=(e)=>{
        e.preventDefault();
    }
    const postData=async()=>{
        try{
            const {data}=await axios.post(serverURL,formData);
            console.log(data);
        }catch(error){
            console.log(error); 
        }
    }
  const setCodeRec=(e)=>{
    let {name,value}=e.target;
    setCode((prev)=>({...prev,[name]: value}));
    
  }
  const setFormDataRec=(e)=>{
    let arr=formData.code;

    arr.push(code);
    setFormData((item)=>({...formData,[code]:arr}));
    setCode({code:"",language:""})
  }
  console.log(formData)
  return (
    <form onSubmit={(e)=>handleSubmit(e)}>
      <label>
        Title:
        <input type="text" name="title" value={formData.title} onChange={handleChange} />
      </label>
      <br />
      <label>
        ID:
        <input type="text" name="id" value={formData.id} onChange={handleChange} />
      </label>
      <br />
     
      <label>
        Description:
        <textarea name="description" value={formData.description} onChange={handleChange} />
      </label>
      <br />
      
      <label>
        Secret:
        <input type="password" name="secret" value={formData.secret} onChange={handleChange} />
      </label>
      <br />
      <button type="submit" onClick={postData}>Submit</button>
      <div style={{backgroundColor:"red",height:"10px"}}>h</div>
      <textarea  name="code" value={code.code} onChange={setCodeRec} />
      <input type="text" name="language" value={code.language} onChange={setCodeRec} />
      <button onClick={setFormDataRec}>add</button>
    </form>
  );
};

export default FormComponent;
