const initialState = {};

const reducer = (state = initialState, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case type:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default reducer;
