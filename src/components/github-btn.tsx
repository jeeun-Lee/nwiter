import { GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react'
import styled from 'styled-components'

import { useNavigate } from 'react-router-dom';
import { auth } from '../routes/firebase';

const Button = styled.span`
  margin-top: 50px;
  background-color: white;
  font-weight: 500;
  width: 100%;
  color: black;
  padding: 10px 20px;
  border-radius: 50px;
  border: 0;
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const Logo = styled.img`
    height: 25px;
`

export default function GithubButton() {
    const navigate = useNavigate();
    const onCLick = async() => {
        try {
            const provider  =new GithubAuthProvider();
            await signInWithPopup(auth,provider);
            navigate("/");
        } catch (error) {
            console.log(error)
        }
     }
  return (
    <Button onClick={onCLick}>
        <Logo src="/github-logo.svg" />
        깃허브로 로그인
    </Button>
  )
}
