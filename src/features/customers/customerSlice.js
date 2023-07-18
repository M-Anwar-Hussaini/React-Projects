const initialStateCustomer = {
  fullName: '',
  nationalID: '',
  createdAt: '',
};

function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case 'customer/createCustomer':
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };
    case 'customer/updateCustomer':
      return {
        ...state,
        fullName: action.payload,
      };
    default:
      return state;
  }
}

function createCustomer(fullName, nationalID) {
  return {
    type: 'customer/createCustomer',
    payload: {
      fullName,
      nationalID,
      createdAt: new Date().toISOString(),
    },
  };
}

function updateName(newName) {
  return { type: 'customer/updateName', payload: newName };
}

export default customerReducer;
export { createCustomer, updateName };
