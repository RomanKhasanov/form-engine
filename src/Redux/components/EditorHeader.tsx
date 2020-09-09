import React from "react";
import { connect } from "react-redux";

import { DateInput, NumberInput } from "../../Controls";

import { changeHeader } from "../store/header/actions";

// @ts-ignore
function EditorHeader({ value, onChange }): JSX.Element {
    const handleChange = (value: any) => {
        onChange("contractNumber", value)
    }

    const dependencies: [] = [];

    return (
        <table>
            <tbody>
                {/* <tr>
                    <td>Orders Number</td>
                    <td>
                        <NumberInput
                            value={value["ordersNumber"]}
                            dependencies={["ordersDate"]}
                            onChange={value => onChange("ordersNumber", value)}
                        />
                    </td>
                    <td>Orders Date</td>
                    <td>
                        <DateInput
                            value={value["ordersDate"]}
                            dependencies={["ordersNumber"]}
                            onChange={value => onChange("ordersDate", value)}
                        />
                    </td>
                </tr> */}
                <tr>
                    <td>Contract Number</td>
                    <td>
                        <NumberInput
                            value={value["contractNumber"]}
                            dependencies={dependencies}
                            onChange={handleChange}
                        />
                    </td>
                    <td>Contract Date</td>
                    <td>
                        <DateInput
                            value={value["contractDate"]}
                            dependencies={[]}
                            onChange={value => onChange("contractDate", value)}
                        />
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

const mapStateToProps = (state: any) => {
    return {
        value: state.header
    }
};

const mapDispatchToProps = {
    onChange: changeHeader
};

export default connect(mapStateToProps, mapDispatchToProps)(EditorHeader)
