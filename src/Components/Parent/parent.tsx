import * as React from 'react';
import Me from '../Me/me';

interface ParentProp {
  toGrandChild: string;
  clickFromGrandChild(): void;
}

const Parent: React.SFC<ParentProp> = (props) => {
  return (
    <div>
      <p>여긴 Parent</p>
      <Me {...props} />
    </div>
  );
};

export default Parent;