import React, { useState } from 'react';

import { initialComponentProps } from '@components/TestSwing/handlers';
import { TestSwing } from '@components/TestSwing/TestSwing';

export default (): JSX.Element => {
  const [componentProps] = useState(initialComponentProps);

  return <TestSwing {...componentProps} />;
};
