import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counter-slice";

export const store = configureStore({
  reducer: {
    counterSlice: counterSlice,
  },
  devTools: process.env.NODE_ENV !== "production", // redux devtools
});

// store.getState tüm state bilgisini veren yapı
export type RootState = ReturnType<typeof store.getState>;
// tüm dispatch operasyonlarını getirceğim tip
export type AppDispatch = typeof store.dispatch;

// 1. Store Tanımı
// 2. Store App.tsx dosyasına uygulanması (Provider)
// 3. Slice yazılması (Reducer tanımı State güncelleme kısmı)
// 4. UseSelect yada UseDispatch ile sayfanın store ile etkileşimi
