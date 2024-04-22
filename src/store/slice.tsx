import { createSlice } from "@reduxjs/toolkit";
import { changeChannelAction } from "./thunk";

const channelSlice = createSlice({
    name:"channel",
    initialState:{
        channel:{
            id:'',
            name:'3345345'
        }
    },
    reducers:{
        changeChannel(state, { payload }) {
            console.log(payload)
            state.channel = payload;
          }
    },
    extraReducers:(builder)=>{
        builder.addCase(changeChannelAction.pending, (state, action:any) => {
            console.log(action.payload,"===1")
        })
        builder.addCase(changeChannelAction.fulfilled, (state, action:any) => {console.log(action.payload,"===2")})
        builder.addCase(changeChannelAction.rejected, (state, action:any) => {console.log(action.payload,"===3")})
        builder.addCase("changeChannelAction2",(state,action:any)=>{
            console.log("=234=234")
            state.channel.name=action.payload.name
        })
    }
})
const { changeChannel } = channelSlice.actions;
const channelReducer = channelSlice.reducer;
export {changeChannel,channelReducer}