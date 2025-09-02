import React from 'react'
import styled from "styled-components"
import Tag from './Tag'
import { TableBody } from '@mui/material'


const Container = styled.div`
    flex: 1 1 30%;
    min-width: 300px;
    max-width: 32%;
    min-height: 120px;
    padding: 10px;
    margin: 0;
    background: #2A2A2C;
    border-radius: 10px;
    box-sizing: border-box;

    &:hover{
        cursor: pointer;
        transform: scale(1.007);
        transition: all 0.3s ease;
        background: #242424;
    }
`
const TopDiv = styled.div`
    flex:1;
    width:100%;

    display: flex;
    align-items: flex-start;
    justify-content: center;
`
const BottomDiv = styled.div`
    flex:1;
    /* width:100%; */
    word-wrap: break-word;
`
const TitleDiv = styled.div`
    flex:2;
    padding: 0px 20px;
`
const TagDiv = styled.div`
    flex:1;
    
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap:5px;
`
const Para = styled.p`
    padding: 0px 20px;
    font-style: italic;
    color:#F5F5DC;
    font-size: 110%;
`
const Title = styled.h1`
    color: #FFFFF8;
    margin:0px;
    font-size: 200%;
`

const ResultCard = ({list,setValue}) => {
    // let{_id,...others}=list.code;
    // console.log(list.code);
  return (
    <Container onClick={()=>{setValue({flag:true,data:{title:list.title,code:list.code,description:list.description}})
    }
    }>
        <TopDiv>
            <TitleDiv>
                <Title>
                    {list.title}
                </Title>
            </TitleDiv>
            <TagDiv>
            {list.code?.map((item)=>
            (<Tag language={item.language}/>))}
                
                
            </TagDiv>
        </TopDiv>
        <BottomDiv>
            <Para>
                {list.description.length>200 ? list.description.slice(0,200)+"..." :list.description}
            </Para>
        </BottomDiv>
    </Container>
  )
};

export default ResultCard;