// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`
export const Title = styled.h1`
  color: #1e293b;
  font-size: 22px;
  font-family: 'Roboto';
  font-weight: bold;
  padding-top: 20px;
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`
export const Description = styled.p`
  color: #334155;
  font-size: 12px;
  font-family: 'Roboto';

  padding-top: 8px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const HooksImage = styled.img`
  //height: 200px;
  width: 50%;

  padding-top: 10px;
  @media screen and (min-width: 768px) {
    //height: 600px;
    width: 70%;
  }
`
export const Data = styled.p`
  color: #334155;
  font-size: 11px;
  font-family: 'Roboto';

  padding-top: 20px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Button = styled.button`
color:#ffffff;
background-color:#1f81ff;
font-size:15px;
font-family:'Roboto';
width:125px;
height:40px:
border: none; 
border-radius:9px;
padding:3px;
margin:10px;
cursor:outline;
outline:none;

@media screen and (min-width:768px){
    width: 145px;
    height:50px;
    font-size:22px
}

`
