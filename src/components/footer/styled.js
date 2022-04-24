import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  height: auto;
  overflow: scroll;
  box-sizing: border-box;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: space-around;
`;
Box.K = styled.div`
  width: 350px;
  height: 300px;
`;
Box.Img = styled.img`
  width: 350px;
  height: 190px;
  background-color: red;
  box-sizing: border-box;
`;
Box.D = styled.div`
  display: flex;
  margin-top: 12px;
`;
Box.I = styled.img`
  background-color: blue;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 12px;
`;
Box.T = styled.h1`
  padding: 0;
  margin: 0;
  font-size: 18px;
  color: black;
`;
Box.N = styled.h1`
  padding: 0;
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: black;
`;
Box.V = styled.h1`
  padding: 0;
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: black;
`;
