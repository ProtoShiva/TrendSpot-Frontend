import { configureStore } from "@reduxjs/toolkit"
import userSlices from "../slices/users/usersSlices"
import productSlices from "../slices/products/productsSlices"

const store = configureStore({
  reducer: {
    users: userSlices,
    products: productSlices
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }) // to ensure the data we get from our backend should be in json format
})

export default store
