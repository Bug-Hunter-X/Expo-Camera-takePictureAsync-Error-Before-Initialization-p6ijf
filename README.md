# Expo Camera takePictureAsync Error Before Initialization

This repository demonstrates a common error encountered when using the Expo Camera API: calling `takePictureAsync` before the camera is fully initialized.  The error is typically a `Camera.takePictureAsync is not a function` or a similar message.  The solution shows how to properly check the camera's status and wait for initialization.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` or `yarn install`.
3. Run the app using Expo Go or a similar Expo client.
4. Observe the console errors (in the original `bug.js` file).
5. Switch to the corrected version (`bugSolution.js`) and see the successful image capture.

## Solution

The solution involves using the `camera.status` to check if the camera is ready before using `takePictureAsync`. This ensures the camera is properly initialized, eliminating the error.