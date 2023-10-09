import styled, { keyframes } from 'styled-components'

export const StyledMat = styled.div`
  display: flex;
  width: 700px;
  align-items: center;
  justify-content: center;
  background-color: #333;
  // padding: 10px;
  overflow: hidden;
`

export const ConveyorWrapper = styled.div`
  display: flex;
  align-items: center;
  // width: 1000px;
  animation: conveyorMove ${(props) => props.animationDuration || '10s'} linear infinite;
`

export const conveyorMove = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`

export const Cell = styled.div`
  width: 50px;
  height: 50px;
  background-color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: bold;
  border: 1px solid #aaa;
  margin-right: 4px;
  flex-shrink: 0;
`