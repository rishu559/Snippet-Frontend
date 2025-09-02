import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components'; // Import Styled Components

const initialFormData = {
  title: "",
  description: "",
  code: [],
  secret: '',
};

const FormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: white;
  position: relative;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const InputGroup = styled.div`
  flex: 1 1 50%;
  margin-right: 20px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;

  label {
    flex: 0 0 30%;
  }

  input[type='text'],
  textarea {
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const CodeSection = styled.div`
  display: flex;
  align-items: center;
  margin:10px;
  
`;

const CodeTextArea = styled.textarea`
  flex: 1;
  height: 150px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  min-width: 150px;
`;


const LanguageInput = styled.input`
  flex: 1;
  padding: 10px;
  margin-left: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;

`;

const AddButton = styled.button`
    position: absolute;
    right:10px;
    bottom: 10px;
  background-color: #28a745;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1b8c3b;
  }
`;

const Input = styled.input`
    height: 20px;
    padding: 10px;
    width: 250px;
    border-radius: 5px;
    border: 1px solid gray;
`

const Textarea = styled.input`
    height: 20px;
    padding: 10px;
    width: 250px;
    border-radius: 5px;
    border: 1px solid gray;
`

const FormComponent = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [code, setCode] = useState({ code: "", language: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit=(e)=>{
        e.preventDefault();
    }
  // Save snippet to localStorage
  const postData = () => {
    let snippets = localStorage.getItem("snippets");
    snippets = snippets ? JSON.parse(snippets) : [];
    snippets.push(formData);
    localStorage.setItem("snippets", JSON.stringify(snippets));
    setFormData(initialFormData);
    setCode({ code: "", language: "" });
  };

  const setCodeRec = (e) => {
    let { name, value } = e.target;
    setCode((prev) => ({ ...prev, [name]: value }));
  };
  const setFormDataRec = (e) => {
    let arr = formData.code;

    arr.push(code);
    setFormData((item) => ({ ...formData, [code]: arr }));
    setCode({ code: "", language: "" });
  };
  return (
    <FormContainer>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <InputGroup>
          <label htmlFor="title">Title:</label>
          <Input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </InputGroup>

        <InputGroup>
          <label htmlFor="description">Description:</label>
          <Textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </InputGroup>

        <InputGroup>
          <label htmlFor="secret">Secret:</label>
          <Input
            type="password"
            name="secret"
            value={formData.secret}
            onChange={handleChange}
          />
        </InputGroup>

        <SubmitButton type="submit" onClick={postData}>
          Submit
        </SubmitButton>
      </Form>
      <CodeSection>
        <CodeTextArea name="code" value={code.code} onChange={setCodeRec} />
        <LanguageInput
          type="text"
          name="language"
          value={code.language}
          onChange={setCodeRec}
        />
      </CodeSection>
      <AddButton onClick={setFormDataRec}>Add</AddButton>
    </FormContainer>
  );
};

export default FormComponent;
