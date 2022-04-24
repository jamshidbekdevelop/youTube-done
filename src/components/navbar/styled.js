import styled from "styled-components";
import { ReactComponent as G1 } from "../../assats/assat/nav/Group1.svg";
import { ReactComponent as G2 } from "../../assats/assat/nav/Group2.svg";
import { ReactComponent as G3 } from "../../assats/assat/nav/Group3.svg";
import { ReactComponent as G4 } from "../../assats/assat/nav/Group4.svg";
import { ReactComponent as G5 } from "../../assats/assat/nav/Group5.svg";
import { ReactComponent as G6 } from "../../assats/assat/nav/Group6.svg";
import { ReactComponent as G7 } from "../../assats/assat/nav/Group7.svg";
import { ReactComponent as G8 } from "../../assats/assat/nav/Group8.svg";

export const Div = styled.div`
  display: flex;
  box-sizing: border-box;
  height: auto;
  flex-direction: column;
  flex-wrap: nowrap;
`;
Div.K = styled.div`
  display: flex;
  height: 40px;
  width: 230px;
`;
Div.B = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding-left: 25px;
  gap: 28px;
  width: 230px;
  height: 40px;
  border-style: none;
  background-color: white;
  :hover {
    background-color: rgb(219, 219, 180);
    height: 40px;
  }
  :focus {
    background-color: rgb(219, 219, 200);
    height: 40px;
  }
`;
Div.H = styled.h1`
  padding: 0;
  margin: 0;
  font-size: 15px;
  color: black;
  font-weight: 700;
`;
Div.G1 = styled(G1)`
  width: 21px;
  height: 21px;
`;
Div.G2 = styled(G2)`
  width: 21px;
  height: 21px;
`;
Div.G3 = styled(G3)`
  width: 21px;
  height: 21px;
`;
Div.G4 = styled(G4)`
  width: 21px;
  height: 21px;
`;
Div.G5 = styled(G5)`
  width: 21px;
  height: 21px;
`;
Div.G6 = styled(G6)`
  width: 21px;
  height: 21px;
`;
Div.G7 = styled(G7)`
  width: 21px;
  height: 21px;
`;
Div.G8 = styled(G8)`
  width: 21px;
  height: 21px;
`;
