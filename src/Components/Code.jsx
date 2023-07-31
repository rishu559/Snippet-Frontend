import React from "react";
import { styled } from "styled-components";
import Tag from "./Tag";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { CopyBlock, dracula } from "react-code-blocks";

const Container = styled.div`
  top: 0px;
  bottom: 0px;

  width: 100%;
  min-height: 100%;
  position: absolute;
  z-index: 100;
  

  /* background-color: rgb(0, 0, 0, 0.7); */
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 0px 30px;
  box-sizing: border-box; // isse size nahi bdhta hai
  /* padding: 30px 40px 0px 40px; */
`;

const TopDiv = styled.div`
  flex: 1;
  width: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: center;
`;
const BottomDiv = styled.div`
  flex: 1;
  /* width:100%; */
  word-wrap: break-word;
`;
const TitleDiv = styled.div`
  flex: 2;
  padding: 0px 20px;
`;
const TagDiv = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 5px;
`;
const Para = styled.p`
  padding: 0px 20px;
  font-style: italic;
  color: #f5f5dc;
  font-size: 110%;
  word-wrap: break-word;
`;
const Title = styled.h1`
  color: #fffff8;
  margin: 0px;
  font-size: 200%;
`;
const Body = styled.div`

    box-shadow: 0px 0px 500px #466d1d;
  margin-top: 20px;
  width: 90%;
  padding: 10px;
  height: 90vh;
  border: 1px white solid;
  background: #272822;
  border-radius: 10px;
  z-index: 100;

  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const MiddleDiv = styled.div`
  flex: 1;
  width: 100%;
`;
const CrossButton = styled.div`
  position: absolute;
  top: 20px;
  right: 5px;
  border-radius: 10px;
  cursor: pointer;
  height: 40px;
  width: 40px;
  /* background-color: red; */
`;
const Language = styled.h2`
  padding: 10px 20px;
  color: white;
`;

const CodeDiv = styled.div`
    margin: 0px 20px;
    border:1px solid rgb(64,224,208,0.2);
`
const Code = ({ props, setValue }) => {
  return (
    <Container>
      <Body>
        <TopDiv>
          <TitleDiv>
            <Title>{props.title}</Title>
          </TitleDiv>
          <TagDiv>
            {props.code?.map((item) => (
              <Tag color="pink" language={item.language} />
            ))}
          </TagDiv>
        </TopDiv>
        <MiddleDiv>
          <Para>{props.description}</Para>
        </MiddleDiv>
        {props.code?.map((item) => (
          <BottomDiv>
            <Language>{item.language}</Language>
            <CodeDiv><CopyBlock
              text={item.code}
              language={item.language}
              showLineNumbers={true}
              theme={dracula}
              wrapLines
            /></CodeDiv>
          </BottomDiv>
        ))}
      </Body>
      <CrossButton
        onClick={() =>
          setValue({
            flag: false,
            data: { title: "", description: "", code: [] },
          })
        }
      >
        <CloseRoundedIcon
          style={{ color: "white", height: "30px", width: "30px" }}
        />
      </CrossButton>
    </Container>
  );
};

export default Code;
