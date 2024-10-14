import * as React from 'react';

import './TestSwing.scss';

interface ITestSwingProps {
  foo: string;
  bar: string;
}

export const TestSwing = (_props: ITestSwingProps): JSX.Element => (
  <div className="sample">
    Test your swing...
  </div>
);
