import { createAction } from "@reduxjs/toolkit";

const changeChannelAction2 = createAction('changeChannelAction2', (text: string)=> {
  return {
    payload: {
      id:'',
      name:text
    } as any,
  }
})
export { changeChannelAction2 };