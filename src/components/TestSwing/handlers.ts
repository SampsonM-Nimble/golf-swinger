import { useState } from "react";

export const initialComponentProps = {
  bar: 'Ipsum',
  foo: 'Lorem',
};

export const useAccelerometer = () => {
  const [ACL, setACL] = useState({});

  // @ts-expect-error required as acc is new...
  const acl = new Accelerometer({ frequency: 60 });

  acl.addEventListener("reading", () => {
    setACL({...acl});
    console.log(`Acceleration along the X-axis ${acl.x}`);
    console.log(`Acceleration along the Y-axis ${acl.y}`);
    console.log(`Acceleration along the Z-axis ${acl.z}`);
  });

  acl.start();

  return ACL;
};
