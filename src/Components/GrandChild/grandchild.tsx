import * as React from 'react';

interface GrandChildProp {
  toGrandChild: string;
  clickFromGrandChild(): void;
}

const GrandChild: React.SFC<GrandChildProp> = (props) => {
  return (
    <div>
      <p>여긴 GrandChild</p>
      <h3>{props.toGrandChild}</h3>
      <button onClick={props.clickFromGrandChild}>GrandChild 버튼</button>
    </div>
  );
};

export default GrandChild;