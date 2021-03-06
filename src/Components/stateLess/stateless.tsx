import * as React from 'react';
import './stateless.css';

interface StateLessProps {
  name?: string;
}

const defaultProps: StateLessProps = {
    name: 'JaroInside'
};

const StatelessComponent: React.SFC<StateLessProps> = (props) => {
  return (
    <h2>{props.name} / {props.children}</h2>
  );
};
console.log(StatelessComponent);
StatelessComponent.defaultProps = defaultProps;

export default StatelessComponent;