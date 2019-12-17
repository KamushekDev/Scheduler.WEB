import React, { useState } from 'react'

interface Variable {
    name: string;
    value: string;
}


interface Input {
    variables: Array<Variable>;
}

const EnvVariables: React.FunctionComponent<Input> = (props) => {
    let result = props.variables.filter(x => !x.value.startsWith('C:')).map(x => (
        <tr key={x.name}>
            <td>{x.name}</td>
            <td>{x.value.substring(0, 60)}</td>
        </tr>));
    return (
        <div id="Variables">
            <table >
                <caption>Переменные</caption>
                <tr>
                    <th>Название переменной</th>
                    <th>Значение</th>
                </tr>
                {result}
            </table>
        </div>);
}

EnvVariables.defaultProps = { variables: [{ name: 'Default', value: 'value' }] };

export default EnvVariables;