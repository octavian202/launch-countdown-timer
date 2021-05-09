import React from 'react'
import styled from 'styled-components'
import { ReactComponent as FacebookIcon } from '../assets/images/icon-facebook.svg'
import { ReactComponent as InstagramIcon } from '../assets/images/icon-instagram.svg'
import { ReactComponent as PinterestIcon } from '../assets/images/icon-pinterest.svg'

const SocialLinks = () => {
  return (
    <Wrapper>
      <List>
        <ListElement>
          <Link href='https://ro-ro.facebook.com/'>
            <FacebookIcon />
          </Link>
        </ListElement>
        <ListElement>
          <Link href='https://ro.pinterest.com/'>
            <PinterestIcon />
          </Link>
        </ListElement>
        <ListElement>
          <Link href='https://www.instagram.com/'>
            <InstagramIcon />
          </Link>
        </ListElement>
      </List>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  bottom: 120px;
  left: 50%;
  transform: translateX(-50%);
`

const Link = styled.a``

const ListElement = styled.li`
  svg {
    fill: #8385a9;
    transition: fill 200ms;
  }

  svg:hover {
    fill: hsl(345, 95%, 68%);
  }
`

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;

  ${ListElement} + ${ListElement} {
    margin-left: 20px;
  }
`

export default SocialLinks
