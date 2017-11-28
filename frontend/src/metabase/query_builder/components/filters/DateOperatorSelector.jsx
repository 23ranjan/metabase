/* @flow */

import React, { Component } from "react";

import Select, { Option } from "metabase/components/Select";

import type { Operator } from "./pickers/DatePicker";

type Props = {
    operator: ?string,
    operators: Operator[],
    onOperatorChange: (o: Operator) => void,
    hideTimeSelectors?: bool
}

export default class DateOperatorSelector extends Component {
    props: Props;

    render() {
        const { operator, operators, onOperatorChange } = this.props;

        return (
            <Select onChange={onOperatorChange} value={operator}>
                { operators.map(({name}) =>
                    <Option name={name}>
                        {name}
                    </Option>
                )}
            </Select>
        );
    }
}
