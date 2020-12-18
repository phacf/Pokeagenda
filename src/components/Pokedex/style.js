import styled from "styled-components";


export const Container = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  z-index: 1;
  position: relative;
  border: 1px solid black;
`;

export const Pdex =styled.img`
    
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  z-index: 2;
  position: relative;
`;
export const Button = styled.div `
    margin: 0;
  padding: 0;
  box-sizing: border-box;
  position: relative;
  width:100px;
  height: 100px;
  background-image:url("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props=> `${props.id}`}.png");
`; 

// tela==================================================

export const PokePhoto = styled.img `
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  z-index: 2;
  top: 100px;
  left:0px ;
  
  position: relative;
`;

export const Screen = styled.div`
  margin: 0;
  padding: 0;
  width: 100px;
  box-sizing: border-box;  
  z-index: 3;
  left: 60px;
  bottom: 319px;
  position: relative;
  

`;
export const Pball = styled.img`
  animation: rotation 20s infinite linear;
  margin: 0;
  padding: 0;
  width: 90px;
  box-sizing: border-box;
  z-index: 1;
  opacity: 20%;
  position: relative;

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;
