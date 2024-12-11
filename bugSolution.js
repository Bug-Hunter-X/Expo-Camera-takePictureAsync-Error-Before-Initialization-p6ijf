import * as React from 'react';
import { Camera, CameraType } from 'expo-camera';
import { useState, useEffect, useRef } from 'react';
import { Button, View, Text } from 'react-native';

const BugSolution = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const [cameraRef, setCameraRef] = useState(null);
  const [picture, setPicture] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef && cameraRef.status === 'READY') {
      try {
        let photo = await cameraRef.takePictureAsync();
        setPicture(photo.uri);
      } catch (error) {
        console.error("Error taking picture:", error);
      }
    }
  };

  if (hasPermission === null) {
    return <View><Text>Requesting permission...</Text></View>;
  }
  if (hasPermission === false) {
    return <View><Text>No access to camera</Text></View>;
  }
  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type} ref={(ref) => setCameraRef(ref)}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}>
          <Button title="Take Picture" onPress={takePicture} />
        </View>
      </Camera>
      {picture && <Text>Picture taken: {picture}</Text>}
    </View>
  );
};
export default BugSolution; 