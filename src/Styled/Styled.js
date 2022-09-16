import styled from "styled-components"
import { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom"
import Brasao from "../Img/casa.jpg"


export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,500;0,700;1,100;1,300;1,700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,500;0,700;1,100;1,300;1,700&family=Work+Sans:ital,wght@0,200;0,300;1,200;1,300&display=swap');

body {
  margin: 0;
  padding: 0;
  background-image:url(${Brasao});
  background-repeat: no-repeat;
  background-size: 100% 100%;


}
`

export const Menu = styled(Link)`

display:flex;
font-size:3em;
text-decoration:none;
color:#00ffff;
`

export const Button = styled.button`

width:10%;
height:10%;
background-color:rgb(195, 212, 96);
font-size:60px;
`
export const Ul = styled.ul`
display:flex;
justify-content:space-between;
width:90%;
list-style:none;
border-radius:0 10% 0 10%;


`


export const Img = styled.img`
width:100%;
height:100%;
border-radius:0 10% 0 10%;


`
export const Div = styled.div`
width:100%;
height:150vh;
display:flex;
flex-wrap:wrap;
justify-content: space-evenly;
align-items:center;


`
export const Divs = styled.div`
width:100%;
height:100vh;
display:flex;
align-items:center;
flex-direction: column;
justify-content:center;


img{
    width:50%;
}
p{
    width:80%;
    font-size:100%;
    font-family: 'Work Sans', sans-serif;
    
}

`

export const Divao = styled.div`
width:100%;
height:150vh;
display:flex;
align-items:center;
flex-direction: column;


input{

    width:50%;
    height:50px; 
   
}
`
export const Figure = styled.figure`
width:40%;
border:solid;
border-radius:0 13% 0 13%;

`
export const P = styled.p`
width:15vw;
font-size:100%;
text-transform: capitalize;
font-family: 'Roboto', sans-serif;

`


export const Personagens = styled.div`
width:25%;
height:35vh;
display:flex;
justify-content: space-evenly;
background-color: rgb(195, 212, 96);
border:solid;
border-radius:5%

`
export const DivPerson = styled.div`
width:50%;
height:100%
display:flex;
flex-direction: column;
font-size:20px;
`
export const Texto = styled.div`
border:solid 3px red;
height:80%;
background-color:#FFFAF0;
color:black;
width:80%;
display:flex;
flex-direction: column;
justify-content: center;
align-items:center;

`
export const DivInp = styled.div`
width:80%;
height:30%
display:flex;
display:flex;
justify-content: center;




`
