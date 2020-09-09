export function changeGoodItem(index: number, value: any): any {
    return {
        type: "CHANGE_GOOD_ITEM",
        index: index,
        value: value,
    };
}
