import React, { useEffect } from 'react'
import {
  StyledMat,
  ConveyorWrapper
} from './style'
import pizza from '../../assets/pizzas/bacon_pizza.png'

type Cell = {
  id: number
  pizza: string
}

type MatProps = {
  queue: Cell[]
}

const Mat: React.FC<MatProps> = (props) => {
  useEffect(() => {
    
    console.log(props)
  }, [props]) 

  return (
    <StyledMat>
      <ConveyorWrapper animationduration={`${props.queue.length * 10}s`}>
        {props.queue.map((cell) => (
          <div 
            key={cell.id}
            style={{
              width: '50px',
              height: '100px',
              backgroundColor: '#333',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#fff',
              fontWeight: 'bold',
              border: '1px solid #aaa',
              marginRight: '4px',
              flexShrink: 0
            }}
          >
            {cell.pizza ? <img src={pizza} style={{ width: 50, height: 50 }} /> : <></>}
          </div>
        ))}
      </ConveyorWrapper>
    </StyledMat>
  )
}

export default Mat