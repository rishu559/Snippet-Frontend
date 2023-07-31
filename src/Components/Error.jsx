import React from 'react'
import styled from 'styled-components'

const ErrorContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const Errormsg = styled.h2`
    color: #f8f3ed;
`
const Error = () => {
  return (
    <ErrorContainer>
        <Errormsg>
            No Match Found 
        </Errormsg>
    </ErrorContainer>
  )
}

export default Error