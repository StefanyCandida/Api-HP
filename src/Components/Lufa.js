import React, { useState, useEffect } from "react";
import * as S from "../Styled/Styled"
import axios from "axios";

export default function Api() {
   const [api, setApi] = useState([]);
   const[busca, setBusca] = useState('')
   const [open, setOpen] = useState(false);

  const harry = "http://hp-api.herokuapp.com/api/characters/house/Hufflepuff";
  useEffect(() => {
    axios
      .get(harry)
      .then((resposta) => {
        setApi(resposta.data);
      })
      .catch((error) => {
        console.log("Erro", error);
      });
  }, []);
  console.log(api);
  

   const Filtradas =  api.filter(item => {
    return item.name.toLowerCase().includes(busca.toLowerCase())
     
    
  });
  


  return (
    <S.Divao>
      
      <S.DivInp>
      <input onChange={e => setBusca(e.target.value)} />
      </S.DivInp>
      <S.Div>
      {Filtradas.splice(0,3).map((item) => (
        <S.Personagens>        
         <S.Figure>
            <S.Img src={item.image} alt={item.name}/>
         </S.Figure> 
         <S.DivPerson>    
          <S.P> Nome: {item.name}</S.P> 
          <S.P>Casa: {item.house}</S.P>    
          <S.P> Nascimento: {open && item.dateOfBirth}</S.P> 
          <S.P> Status: {open &&item.ancestry}</S.P> 
          <S.P>Especie: {open && item.species}</S.P> 
          <S.P>Genero: {open &&item.gender}</S.P> 
          
          <button
        onClick={() => {
          setOpen(!open);
        }}>
        open
      </button>                   
        </S.DivPerson> 
        </S.Personagens>
      ))}
    </S.Div>
  </S.Divao>
  );
}
