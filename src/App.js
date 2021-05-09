import styled from 'styled-components'
import Timer from './components/Timer'
import SocialLinks from './components/SocialLinks'

const App = () => {
  return (
    <Wrapper className='app'>
      <Container>
        <Timer />
        <SocialLinks />
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  place-items: center;
`

const Container = styled.div``

export default App
