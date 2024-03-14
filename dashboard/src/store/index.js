import { configureStore } from '@reduxjs/toolkit';
import uiSlice from './ui-slice';
import dashboardSlice from './dashboard-slice';

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    dashboard: dashboardSlice
  }
})

export default store