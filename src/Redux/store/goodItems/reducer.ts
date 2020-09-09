import { GOOD_ITEMS_COUNT } from "../../../Document";

const initialState = (() => {
    const result = [];
    for (let i = 0; i < GOOD_ITEMS_COUNT; i++) {
        result[i] = {
            name: `item${i}`,
            quantity: String(i),
            price: "10",
            priceWithVat: "11",
            vatSummary: "1",
        }
    }
    return result;
})();

function goodItems (state = initialState, { type, index, value }: any) {
    switch (type) {
        case "CHANGE_GOOD_ITEM":
            return [ ...state.slice(0, index), value, ...state.slice(index + 1) ];
        default:
            return state;
    }
}

export default goodItems;
