import { USER_SET } from "../../ActionType/User";

const initialState = {
 user:{},
 token:""
}

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_SET:
      console.log(action.data,'data');
      return {
        ...state,
        token: action.data,
       
        
      };

    default:
      return state;
  }
};
