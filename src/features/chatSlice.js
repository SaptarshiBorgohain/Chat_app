import { createSlice } from '@reduxjs/toolkit';

export const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    chatId: null,
    chatName: null,
  },
  reducers: {
    setChat: (state, action) => {
      state.chatId = action.payload.chatId;
      state.chatName = action.payload.chatName;
    },
    // logout: (state) => {
    //   state.chat = null;
    // },
  },
});

export const { setChat } = chatSlice.actions; // logout execution was done here

export const selectchatName = (state) => state.chat.chatName;
export const selectchatId = (state) => state.chat.chatId;

export default chatSlice.reducer;
