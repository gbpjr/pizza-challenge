import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { enqueue, addPizza } from '../../redux/queueSlice'
import Mat from '../../components/Mat'
import {
  PageWrapper,
  BackgroundImage
} from './style'
import {
  Typography,
  Button
} from '@mui/material'
import AppBar from '../../components/AppBar'

const Home: React.FC = () => {
  const dispatch = useDispatch()
  const queue = useSelector((state: RootState) => state.queue)

  const [currentCell, setCurrentCell] = useState(0)
  const [pizzaCount, setPizzaCount] = useState(0)
  const [isButtonDisabled, setIsButtonDisabled] = useState(false)


  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(enqueue())
    }, 500)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  const handleAddPizza = () => {
    setIsButtonDisabled(true)

    setTimeout(() => {
      setIsButtonDisabled(false)
    }, 500)

    if (currentCell >= 0 && currentCell < queue.length) {
      dispatch(addPizza({ flavor: 'Pizza', cell: currentCell }))
      setCurrentCell(currentCell + 1) 
      setPizzaCount(pizzaCount + 1)
    }
  }

  return (
    <PageWrapper>
      <AppBar />
      <BackgroundImage>
        <Typography variant="h1" gutterBottom>
          Di Geovane Pizzeria 🤌 🇮🇹
        </Typography>
        <Mat
          queue={queue}
        />
        {pizzaCount > 0 ? (
          <Typography variant="subtitle1">
            Great! You added {pizzaCount} pizza(s).
          </Typography>
        ) : (
          <Typography variant="subtitle1">
            ~ Mamma mia! There's no pizza added yet.
          </Typography>
        )}
        <Button 
          variant="contained"
          onClick={handleAddPizza}
          disabled={isButtonDisabled} 
        >
          Add Pizza
        </Button>
      </BackgroundImage>
    </PageWrapper>
  )
}

export default Home