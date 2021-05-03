import React from "react";
import styled from "styled-components";
const Home=()=>{
    return(
        <Div>
            <h1>Welcome to users App</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste cupiditate doloribus, repellat voluptas quibusdam alias modi, non accusantium sunt dicta vero consequatur eos ea praesentium! Odit necessitatibus animi reiciendis quis, sunt explicabo minus soluta placeat blanditiis autem iste a ex similique eveniet doloribus? Animi saepe odit laborum dolorem architecto autem itaque tempora minus error quod. Consequatur autem quis magni eius perferendis, minus doloremque esse ipsum quaerat distinctio delectus minima similique excepturi aut corrupti laborum voluptatibus, libero doloribus soluta beatae, enim tempore! Optio voluptatem repellendus reprehenderit pariatur ut eveniet harum nihil! Aut tenetur enim temporibus tempora veniam dolore vel magni cupiditate.</p>
        </Div>
    )
}

export default Home;

const Div=styled.div`
    height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background-color:whitesmoke;
    h1{
        color:#A2D2FF;
    }
    p{
        color:darkgrey;
        width:50vw;

    }
`;