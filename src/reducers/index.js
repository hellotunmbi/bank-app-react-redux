
export default (state, action) => {
    console.log(state);
    switch(action.type) {
        case 'WITHDRAWAL':
            return {
                ...state,
                totalAmount: state.totalAmount - action.payload.amount
            }
        default:
            return state;
    }
}