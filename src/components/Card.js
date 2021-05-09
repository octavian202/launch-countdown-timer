import React, { useState } from 'react'
import styled, { css, keyframes } from 'styled-components'

const Card = ({ children, title }) => {
  const [shouldRotate, setShouldRotate] = useState(true)

  setTimeout(() => {
    setShouldRotate(!shouldRotate)
  }, 500)

  return (
    <Wrapper>
      <Container children={children} rotate={shouldRotate}>
        {children}
        <HorizontalDots />
      </Container>
      <Title>{title}</Title>
    </Wrapper>
  )
}

const slide = keyframes`
  from {
    transform: rotateX(0);
    background-color: black;
  }

  to {
    transform: rotateX(180deg);
    background-color: transparent;
  }
`

const animation = css`
  animation: ${slide} 500ms linear;
`
const getAnimation = (props) => {
  if (props.rotate) return animation
  return 'animation: none'
}

const Wrapper = styled.div`
  height: 250px;
  width: 200px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1000px) {
    width: 150px;
  }

  @media (max-width: 760px) {
    width: 120px;
  }
`

const Title = styled.h3`
  font-size: 1rem;
  margin-top: 30px;
  letter-spacing: 2px;
  color: hsl(237, 18%, 59%);
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 3px;
`

const Container = styled.div`
  --border-radius: 10px;

  font-size: 6rem;
  background-color: white;
  position: relative;
  display: block;
  height: 200px;
  width: 200px;
  border-radius: var(--border-radius);
  background-color: hsl(236, 21%, 26%);
  box-shadow: 0 8px #191a23;
  color: hsl(345, 95%, 68%);
  display: grid;
  place-items: center;

  @media (max-width: 1000px) {
    height: 150px;
    width: 150px;
    font-size: 4.7rem;
  }

  @media (max-width: 760px) {
    height: 120px;
    width: 120px;
    font-size: 4rem;
  }

  &:before {
    content: ${(props) => props.children[0].toString() || ''};
    width: 100%;
    height: 50%;
    background-color: white;
    display: block;
    position: absolute;
    top: 0;
    border-radius: var(--border-radius) var(--border-radius) 0 0;

    transform-origin: bottom;
    /* ${getAnimation}; */
  }

  &:after {
    content: '';
    width: 100%;
    height: 50%;
    background-color: white;
    display: block;
    position: absolute;
    top: 50%;
    border-top: 1px solid whitesmoke;
    border-radius: 0 0 var(--border-radius) var(--border-radius);
    opacity: 0.1;
    box-shadow: 0 -1px black;
  }
`

const HorizontalDots = styled.div`
  --border-radius: 10px;

  position: absolute;
  display: block;
  height: 100%;
  width: 100%;
  z-index: 10;
  background-color: transparent;

  &:before {
    content: '';
    display: block;
    height: 10px;
    width: 5px;
    background-color: #191a23;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 0 var(--border-radius) var(--border-radius) 0;
  }

  &:after {
    content: '';
    display: block;
    height: 10px;
    width: 5px;
    background-color: #191a23;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    border-radius: var(--border-radius) 0 0 var(--border-radius);
  }
`

export default Card
