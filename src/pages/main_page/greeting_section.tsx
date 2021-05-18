import { toRem } from 'lib/styles'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
    position: relative;
    padding-left: ${toRem(24)};
    padding-top: ${toRem(144)};
    padding-bottom: ${toRem(64)};
    box-sizing: border-box;
`

const Slogan = styled.span`
  font-size: ${toRem(48)};
  color: #850101;
  display: block;
  margin-bottom: ${toRem(64)};
`

const RequestButton = styled.button`
  font-size: ${toRem(24)};
  text-align: center;
  text-decoration: none;
  color: white;
  background-color: #850101;
  border-radius: 20px;
  width: ${toRem(360)};
  height: ${toRem(64)};
  cursor: pointer;
`

const GreetingSection = () => {
  return (
    <Wrapper>
      <Slogan>
        혈액이 필요한 소중한 사람에게
        <br />
        우리가 닿을 수 있도록
      </Slogan>
      <Link to="/request">
        <RequestButton>바스켓 등록하기</RequestButton>
      </Link>
    </Wrapper>
  )
}

export default GreetingSection
