import React, { useEffect, useState } from 'react';

import { initialComponentProps, useAccelerometer } from '@components/TestSwing/handlers';
import { TestSwing } from '@components/TestSwing/TestSwing';

export default (): JSX.Element => {
  const [componentProps] = useState(initialComponentProps);

  const ACL = useAccelerometer();

  return <TestSwing {...componentProps} ACL={ACL} />;
};
