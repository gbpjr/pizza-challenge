import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Pizza = {
  flavor: string
  cell: number 
}

type Cell = {
  id: number,
  pizza: string
}

export type Queue = Array<Cell>

const initialState: Queue = Array.from({ length: 12 }, (_, index) => ({ id: 9 - index, pizza: '' }))

const queueSlice = createSlice({
  name: 'queue',
  initialState,
  reducers: {
    enqueue: (state) => {
     const newState = [...state]

     const maxId = newState.reduce((max, item) => (item.id > max ? item.id : max), 0)

     const newItem: Cell = { id: maxId + 1, pizza: '' }

     newState.unshift(newItem)

     return newState
    },
    addPizza: (state, action: PayloadAction<Pizza>) => {    
      const startIndex = Math.floor((state.length - 12) / 2)

      state[startIndex].pizza = action.payload.flavor
      
      return state;
    },
    
    
  }
})

export const { enqueue, addPizza } = queueSlice.actions

export default queueSlice.reducer