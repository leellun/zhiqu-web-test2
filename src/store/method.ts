export function changeUserMsg(payload: any) {
    return {
      type: 'changeChannelAction',
      payload
    };
  }
export function changeAsyncUserMsg(payload: any) {
    return async (dispatch:any)=>{
        dispatch(changeUserMsg(payload))
    };
  }