import * as React from 'react';

import './TestSwing.scss';

interface ITestSwingProps {
  ACL: Record<string, unknown>;
}

export const TestSwing = ({ ACL }: ITestSwingProps): JSX.Element => (
  <div className="sample">
    Test your swing...
    {ACL ? JSON.stringify(ACL) : 'No ACL data'}
  </div>
);
