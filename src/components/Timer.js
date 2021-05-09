import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Card from './Card'
import launchDate from '../constants/launchDay'

const Timer = () => {
  const [triggerRerender, setTriggerRerender] = useState(false)

  let date = new Date()
  date = new Date(launchDate - date)

  useEffect(() => {
    setTimeout(() => {
      setTriggerRerender(!triggerRerender)
    }, 1000)
    // eslint-disable-next-line
  }, [triggerRerender])

  const checkDaysRemaining = (date) => {
    return !(date.getDate() - 1 <= 0)
  }

  const checkHoursRemaining = (date) => {
    if (checkDaysRemaining(date)) return true
    return !(date.getHours() <= 0)
  }

  const checkMinutesRemaining = (date) => {
    if (checkHoursRemaining(date)) return true
    return !(date.getMinutes() - 1 <= 0)
  }

  const checkSecondsRemaining = (date) => {
    if (checkMinutesRemaining(date)) return true
    return !(date.getSeconds() - 1 <= 0)
  }

  return (
    <Wrapper>
      <Title>We're launching soon!</Title>
      <Main>
        {checkDaysRemaining(date) && (
          <Card title='days'>{date.getDate() - 1}</Card>
        )}
        {checkHoursRemaining(date) && (
          <Card title='hours'>{date.getHours()}</Card>
        )}
        {checkMinutesRemaining(date) && (
          <Card title='minutes'>{date.getMinutes()}</Card>
        )}
        {checkSecondsRemaining(date) && (
          <Card title='seconds'>{date.getSeconds()}</Card>
        )}
      </Main>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  z-index: -1;
`

const Main = styled.div`
  display: flex;

  div + div {
    margin-left: 50px;

    @media (max-width: 1000px) {
      margin-left: 20px;
    }
  }
`

const Title = styled.h1`
  font-size: 4rem;
  position: absolute;
  text-align: center;
  top: 90px;
  left: 50%;
  transform: translateX(-50%);
  letter-spacing: 7px;
  width: 100%;

  @media (max-width: 760px) {
    font-size: 3.5rem;
  }
`

export default Timer
