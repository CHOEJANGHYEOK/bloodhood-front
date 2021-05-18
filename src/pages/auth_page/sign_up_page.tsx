import { toRem } from 'lib/styles'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div``

const KakaoLoginButton = styled.a`
  width: ${toRem(630)};
  height: ${toRem(58)};
  background-color: #fbe300;
  border-radius: 5px;
`

const SignInPage = () => {
  return (
    <Wrapper>
      <KakaoLoginButton href="http://localhost:8080/oauth2/authorization/kakao">
        카카오톡으로 로그인 하기
      </KakaoLoginButton>
    </Wrapper>
  )
}

export default SignInPage
