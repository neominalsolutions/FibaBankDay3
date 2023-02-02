import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  counter: number;
}

const initialState: CounterState = { counter: 0 };

// slice tetiklenen actionlar sonucunda state güncellemesini yönettiğimiz fonksiyonlar
// birden fazla slice kullanabiliriz name ile redux devtolls üzerinden hangi isme sahip slice işlemi yaptığımızı döndürür
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
    incrementByValue: (state, action: PayloadAction<number>) => {
      state.counter += action.payload;
    },
  },
});

// actionları aşağıdaki isimler ile dışarı export ettik
export const { increment, decrement, incrementByValue } = counterSlice.actions;

// store reducerları bağlamamız lazım sebebi store hangi reducer ile çalışcağını bilmeliki ona göre state güncellemerini yapabilsin.

export default counterSlice.reducer;
