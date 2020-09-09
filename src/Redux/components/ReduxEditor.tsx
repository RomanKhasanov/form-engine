import { ValidationContainer } from "@skbkontur/react-ui-validations";
import Button from "@skbkontur/react-ui/Button";
import React from "react";

import EditorHeader from "./EditorHeader";
import EditorItems from "./EditorItems";
import store from "../store";

export default class ReduxEditor extends React.Component {
    public render(): JSX.Element {
        return (
            <div>
                <ValidationContainer>
                    <EditorHeader />
                    <EditorItems />
                    <Button onClick={this.handleSave}>Save</Button>
                </ValidationContainer>
            </div>
        );
    }

    private readonly handleSave = () => {
        console.info(store.getState());
    };
}


