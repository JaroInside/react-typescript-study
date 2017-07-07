import * as React from 'react';
import Child from '../Child/child';

interface MeProp {
  toGrandChild: string;
  clickFromGrandChild(): void;
}

const Me: React.SFC<MeProp> = (props) => {
  return (
    <div>
      <p>여긴 Me</p>
      <Child {...props} />
    </div>
  );
};

export default Me;