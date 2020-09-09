import React from "react";
import { connect } from "react-redux";

import { GoodItemRow, GoodItemsHeader } from "../../Controls";

import { changeGoodItem } from "../store/goodItems/actions";

// @ts-ignore
export function EditorItems({ items, onChange }): JSX.Element {
    return (
        <table>
            <GoodItemsHeader />
            <tbody>
                {items.map((item: any, index: number) => (
                    <GoodItemRow key={index} value={item} onChange={value => onChange(index, value)} />
                ))}
            </tbody>
        </table>
    );
}


const mapDispatchToProps = {
    onChange: changeGoodItem,
};

const mapStateToProps = (state: any) => {
    return {
        items: state.goodItems
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditorItems);
