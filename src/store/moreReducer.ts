const moreReducer = (state:any, action: any) => {
  state=action.payload
  console.log("moreReducer",state)
  if(state===undefined){
    return {}
  }
  switch (action.type) {
    case 'changeChannelAction':
      return state;
    case 'changeChannelAction2':
      return state;
    default:
      return state;
  }
};
export default moreReducer;
