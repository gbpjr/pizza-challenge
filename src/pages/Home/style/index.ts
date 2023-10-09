import styled from 'styled-components'
import backgroundImg from '../../../assets/pizzeria.jpeg'

export const PageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const BackgroundImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;
  // background-image: url(${backgroundImg});
  background-image:
  linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0,0,0, 0.9)),
  url(${backgroundImg});
  background-size: cover;
  min-width: 100%;
  min-height: 700px;
`