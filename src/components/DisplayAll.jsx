import React from "react";
import styled from "styled-components"
const DisplayAll =({data})=> {
  return (
    <Div>
      <Wrapper>
        <Ul>
          {data.map((item)=><A href={`/display/${item._id}`} target="_blank"><Li key={item._id}>{item.first_name}</Li></A>)}
        </Ul>
      </Wrapper>
    </Div>
  )}
export default DisplayAll;

const Div=styled.div`
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    `;
    const Wrapper=styled.div`
        height:70vh;
        background-color:white;
        width:50vw;
        box-shadow:-1em -1em 2em darkgrey;
        display:flex;
        justify-content:center;
        align-items:center;
    `;
    const Ul=styled.ul` 
    list-style: none;
    padding: 0;`;
    const Li=styled.li` 
     padding: 1px 10px;
    background-color: #EEEEEE;
     border: 1px solid #DDDDDD;`;

const A=styled.a`
    color:black;
    
    `;