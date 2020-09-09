const initialState = {
    contractNumber: "",
    ordersNumber: "",
    contractDate: "",
    ordersDate: "",
}

function header (state = initialState, action: any) {
    switch (action.type) {
        case "CHANGE_HEADER":
            return { ...state, [action.path]: action.value };
        default:
            return state;
    }
};

export default header;
