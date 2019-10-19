import React, { useState } from 'react'

interface Variable {
    name: string;
    value: string;
}


interface Input {
    variables: Array<Variable>;
}

const EnvVariables: React.FunctionComponent<Input> = (props) => {
    let result = props.variables.map(x => (<p key={x.name}>{x.name} - {x.value}</p>));
    return (<div id="Variables">{result}</div>);
}

EnvVariables.defaultProps = { variables: [{ name: 'test', value: 'testValue' }] };

export default EnvVariables;