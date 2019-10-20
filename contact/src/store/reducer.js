const initialState = {
    emailId: '',  
    name: '',
    password: '',
    phone:'',
    address:'',
    history: []
};

const reducer = (state = initialState, action) => {
    const newState = {...state};

    console.log('new state: ', state, action);
    switch (action.type) {  
        case "SUBMIT":
        return{
          ...state,
          emailId: action.payload.email,
          name: action.payload.name,
          password:action.payload.password,
          phone: action.payload.phone,
          address: action.payload.address,
          history: state.history.concat({
            id: Math.random(),
            emailId: action.payload.email,
            name:action.payload.name,
            password:action.payload.password,
            phone:action.payload.phone,
            address: action.payload.address,
          })
        }
      case "DEL_ITEM":
        return {
          ...state,
          history: state.history.filter(el => el.id !==action.key )
         };
        break;
    }
        return newState;

};

export default reducer;