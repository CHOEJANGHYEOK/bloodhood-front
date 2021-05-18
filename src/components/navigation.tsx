import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { toRem } from '../lib/styles'

interface ItemProps {
  isTitle?: boolean
}

const Wrapper = styled.nav`
  margin-top: ${toRem(36)};
  padding: 12px 0;
  display: flex;
  flex: 2;
  justify-content: space-between;
`

const RightMenu = styled.div`

`

const Item = styled(Link)`
  font-size: ${(props: ItemProps) => (props.isTitle ? toRem(36) : toRem(24))};
  color: #850101;
  text-decoration: none;
  margin-left: ${(props: ItemProps) => !props.isTitle && toRem(32)};
`

const Navigation = () => {
  return (
    <Wrapper>
      <Item to="/" isTitle>
        Bloodhood
      </Item>
      <RightMenu>
        <Item to="/signin">로그인</Item>
        <Item to="/signup">회원가입</Item>
      </RightMenu>
    </Wrapper>
  )
}

export default Navigation
