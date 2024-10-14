import { useState } from "react";

export const initialComponentProps = {
  bar: 'Ipsum',
  foo: 'Lorem',
};

export const useAccelerometer = () => {
  const [ACL, setACL] = useState({ x: 0, y: 0, z: 0 });

  // @ts-expect-error required as acc is new...
  if (DeviceMotionEvent && DeviceMotionEvent.requestPermission) {
    // @ts-expect-error required as acc is new...
    DeviceMotionEvent.requestPermission().then(response => {
      if (response == 'granted') {
          // Add a listener to get smartphone acceleration 
          // in the XYZ axes (units in m/s^2)
          window.addEventListener('devicemotion', (event) => {
            const {acceleration} = event 
            if (acceleration.x !== ACL.x || acceleration.y !== ACL.y || acceleration.z !== ACL.z) {
                setACL({...acceleration});
                console.log(`Acceleration is ${JSON.stringify(event)}`);
                console.log(`Acceleration along the X-axis ${acceleration.x}`);
                console.log(`Acceleration along the Y-axis ${acceleration.y}`);
                console.log(`Acceleration along the Z-axis ${acceleration.z}`);
              }
          });
          // Add a listener to get smartphone orientation 
          // in the alpha-beta-gamma axes (units in degrees)
          // window.addEventListener('deviceorientation',(event) => {
          //   console.log(event);
          // });
      }
    });
  }

  // const acl = new Accelerometer({ frequency: 60 });

  // acl.addEventListener("reading", () => {
  //   setACL({...acl});
  //   console.log(`Acceleration along the X-axis ${acl.x}`);
  //   console.log(`Acceleration along the Y-axis ${acl.y}`);
  //   console.log(`Acceleration along the Z-axis ${acl.z}`);
  // });

  // acl.start();

  return ACL;
};
