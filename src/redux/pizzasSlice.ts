import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Pizza = {
  flavor: string
  cell: number
}

type Pizzas = Array<Pizza>

const initialState: Pizzas = []

const pizzasSlice = createSlice({
  name: 'queue',
  initialState,
  reducers: {
    push: (state, action: PayloadAction<Pizza>) => {
      state.push(action.payload)
    }
  }
})

export const { push } = pizzasSlice.actions

export default pizzasSlice.reducer