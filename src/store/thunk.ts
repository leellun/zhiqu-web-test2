import { createAsyncThunk } from "@reduxjs/toolkit";

const changeChannelAction = createAsyncThunk(
    'changeChannelAction',
    async (extraInfo: { userId: string }, { dispatch }) => {
      const { userId } = extraInfo;
      return userId+"====createAsyncThunk="
    }
  );
  export { changeChannelAction };