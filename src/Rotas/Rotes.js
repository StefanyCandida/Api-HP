import React from "react";
import * as S from "../Styled/Styled"

const Modal = ({ indice1, indice2, indice3, indice4,indice5}) => {

  return (
    <nav>
    <S.Ul>
        <li><S.Menu to="/">{indice1}</S.Menu ></li>                
        <li><S.Menu to="/Gryffindor">{indice2}</S.Menu ></li>
        <li><S.Menu to="/Slytherin">{indice3}</S.Menu ></li>
        <li><S.Menu to="/Ravenclaw">{indice4}</S.Menu ></li>
        <li><S.Menu to="/Hufflepuff">{indice5}</S.Menu ></li>
       
    </S.Ul>
   </nav>

  );
};

export default Modal;
         
 