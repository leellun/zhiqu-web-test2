import { createReducer } from "@reduxjs/toolkit";

const userReducer = createReducer(
  {
    id:'',
    name:"sdfsdf"
  },
  (builder) => {
    builder
      .addCase("changeChannelAction2", (state, action:any) => {
        console.log(action.payload.name)
        state.name = action.payload.name;
      })
  }
);

export default userReducer;
