import styled from "styled-components";

export const Container = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  z-index: 1;
  position: relative;
  height: 335px;
  width: fit-content;
  left:30%;
`;

export const Pdex = styled.img`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  z-index: 2;
  position: relative;
`;
export const ButtonUp = styled.div`
  margin: 0;
  z-index: 3;
  padding: 0;
  box-sizing: border-box;
  border-radius: 3px;
  position: relative;
  width: 18px;
  height: 20px;
  position: relative;
  bottom: 275px;
  left: 152px;
  cursor: pointer;
  :active {
    background-color: black;
    opacity: 10%;
  }
`;

export const ButtonDown = styled.div`
  margin: 0;
  z-index: 3;
  padding: 0;
  box-sizing: border-box;
  border-radius: 3px;
  position: relative;
  width: 18px;
  height: 20px;
  position: relative;

  bottom: 260px;
  left: 152px;
  cursor: pointer;
  :active {
    background-color: black;
    opacity: 10%;
  }
`;

// tela==================================================

export const PokePhoto = styled.img`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  z-index: 2;
  top: 100px;
  left: 0px;
  
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
  opacity: 10%;
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
export const ShowType = styled.div`
  z-index: 4;
  width: 60px;
  height: 30px;

  position: relative;
  bottom: 295px;
  left: 54px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Type = styled.div`
  font-size: 10px;
  color: white;
  border: 1px solid black;
  border-radius: 3px;
  text-align: center;
  background-color: ${(props) => props.type};
`;
export const ShowProfile = styled.div`
  font-size: 12px;
  color: white;

  width: 160px;
  height: 40px;
  z-index: 4;
  position: relative;
  left: 255px;
  bottom: 500px;
`;
export const SearchName = styled.input`
  font-size: 10px;
  position: relative;
  background-color: black;
  color: white;
  z-index: 6;
  left: 353px;
  width: 62px;
  bottom: 348px;
`;
export const SearchId = styled.input`
  font-size: 10px;
  position: relative;
  background-color: black;
  color: white;
  z-index: 7;
  left: 191px;
  width: 62px;
  bottom: 348px;
`;
export const SearchBotton = styled.div`
  width: 35px;
  height: 25px;

  border-radius: 3px;
  position: relative;
  z-index: 7;
  bottom: 411px;
  left: 290px;
  cursor: pointer;
  :active {
    background-color: black;
    opacity: 20%;
  }
`;
export const FavBotton = styled.div`
  width: 25px;
  height: 25px;

  border-radius: 100%;
  position: relative;
  z-index: 8;
  bottom: 435px;
  left: 13px;
  cursor: pointer;
  :active {
    background-color: black;
    opacity: 20%;
  }
`;
export const ShowFav = styled.img`
  position: relative;
  z-index: 9;
  width: 15px;
  bottom: 590px;
  left: 50px;
`;
