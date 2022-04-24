import styled from "styled-components";
import {ReactComponent  as first} from '../../assats/assat/first.svg'
import {ReactComponent  as youtube} from '../../assats/assat/youtube.svg'
import {ReactComponent  as second} from '../../assats/assat/second.svg'
import {ReactComponent  as four} from '../../assats/assat/four.svg'
import {ReactComponent  as third} from '../../assats/assat/third.svg'
import {ReactComponent  as img1} from '../../assats/assat/Vector.svg'


export const Div =styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
height: auto;
background-color: white;
opacity: 0.95;
`
Div.DD=styled.div`
display: flex;
`
Div.M=styled.div`
display: flex;
justify-content: space-between;
gap: 20px;
`
Div.K=styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
gap: 3px;
`
Div.H1=styled.div`
color: black;
font-size: 23px;
font-weight: 600;
`
Div.Img0=styled(first)`
padding: 3px 0px 0px 0px;
width: 20px;
height: 15px;
`
Div.Img2=styled(youtube)`
width: 30px;
height: 20px;
`
Div.Button=styled.button`
margin-left: 20px;
display: flex;
border-style: none;
width: 30px;
height: 30px;
background-color: white;
border-radius: 50%;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
:active{
    background-color: rgb(208, 228, 228);
}
`
Div.Input=styled.input`
min-width: 0px;
border-style: none;
border-right: 2px solid black;
padding: 0;
padding-left: 15px;
margin: 0;
width: 546px;
height: 30px;
font-size: 15.5px;
`
Div.Img1=styled(img1)`
width:70%;
height: 70%;
color: black;
`
Div.Button1=styled.button` 
border-left: none;
border-style: none;
background-color: white;
padding: 0;
margin: 0;
width: 70px;
min-width: 50px;
height: 32px;
cursor: pointer;
:active{
    background-color:rgb(224, 235, 235);
}
`
Div.B=styled.div`
margin-left: 28px;
margin-right: 28px;
display: flex;
align-items: center;
min-width: 50px;
box-sizing: border-box;
height: 34px;
border: 0.5px solid black;
`
Div.L=styled.div`
display: flex;
align-items: center;
gap: 20px;
`
Div.Img3=styled(second)`
width: 30px;
height: 20px;
`
Div.Img4=styled(third)`
width: 30px;
height: 20px;
`
Div.Img5=styled(four)`
width: 30px;
height: 20px;
`
Div.Img6=styled.div`
width: 30px;
height: 30px;
margin-right: 20px;
background-color: yellow;
`
