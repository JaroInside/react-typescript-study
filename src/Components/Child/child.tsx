import * as React from 'react';
import GrandChild from '../GrandChild/grandchild';

interface ChildProp {
  toGrandChild: string;
  clickFromGrandChild(): void;
}

const Child: React.SFC<ChildProp> = (props) => {
  return (
    <div>
      <p>여긴 Child</p>
      <GrandChild {...props} />
    </div>
  );
};

export default Child;