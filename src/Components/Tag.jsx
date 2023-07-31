import React from 'react'
import styled from "styled-components"

const Container = styled.div`
    height: 20px;
    border-radius: 15px;
    background-color:black;
    padding: 3px 10px;
    color: white;
`


const Tag = ({language}) => {
  // const colors = new Map();
  // colors.set("C++","black");
  
  // colors.set("Java","Gray");
  // colors.set("Python","Gray");

  return (
    // <Container color={colors.get(language)} >
    <Container>
        {language} 
    </Container>
  )
}

export default Tag