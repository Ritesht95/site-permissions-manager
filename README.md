# site-permissions-manager

This is a library which provides a wrapper to manage all the types of site permissions using JavaScript.

## How to install

```
npm i site-permissions-manager

import { permissions } from "site-permissions-manager";
```

## Location Permission Functions

#### promptGeoLocationPermission
It is to prompt user for location permission if it is not already determined and invoke success or error callback based on user action.

##### Usage
```
permissions.promptGeoLocationPermission((result) => {
	//TODO: User grants location permission.
}, (error) => {
	//TODO: User denies location permission or location service is not available.
});
```

#### asyncPromptGeoLocationPermission

It is to prompt user for location permission if it is not already determined and returns promise.

##### Usage

```
try {
	const result = await permissions.asyncPromptGeoLocationPermission();
	//TODO: Location permission granted
} catch (error) {
	//TODO: Location permission denied
}
```

or

```
permissions.asyncPromptGeoLocationPermission()
.then((result) => {
	//TODO: Location permission granted
}).catch((error) => {
	//TODO: Location permission denied
});
```

#### getGeoLocationPermission

It is to get location permission state without prompting user for location access and return result via callback.

##### Usage

```
permissions.getGeoLocationPermission((locationState) => {
	// TODO: Action based on location state
},(error) => {
	// TODO: Handling action on error
});
```

#### startLocationTracking

This function is to continuously track user location as it changes/navigates. It will return `locationTrackingId` which will later be used to stop tracking location.
- Position object will be return with `successCallback` or any error will be return with `errorCallback`.
- PostionOptions can be set by passing `positionOptions` parameter. (i.e. `{enableHighAccuracy: true, timeout: 10000, maximumAge: 5000}`)
	- `enableHighAccuracy`: If true and if the device is able to provide a more accurate position. Default value is true.
	- `timeout`: Value representing the maximum length of time (in milliseconds) the device is allowed to take in order to return a position. Default value is infinity.
	- `maximumAge`: Value indicating the maximum age in milliseconds of a possible cached position that is acceptable to return. Default value is 0.
- A threshold can also be set by passing the miliseconds for `thresholdTime` parameter.
##### Usage

```
const locationTrackingId = permissions.startLocationTracking({
      successCallback: (position) => {
        // TODO: Task on successfully receiving the position 
      },
      errorCallback: (err) => {
        // TODO: Task on error
      },
      positionOptions: {enableHighAccuracy: true, timeout: 10000, maximumAge: 5000},
      thresholdTime: 3000,
    });
```
#### stopLocationTracking

This function is to stop tracking user location which was started before by passing `locationTrackingId`.

##### Usage

```
permissions.stopLocationTracking(locationTrackingId);
```

## Media Permission Functions

#### getCameraMicroPhonePermission

It is to prompt user for camera and microphone permissions. This function returns the promise which resolves as an object of stream if permission is granted.
This function also accept the min/max width/height for video stream.

##### Usage

```
/* Simply getting both video and audio permissions and stream */
const stream = await permissions.getCameraMicroPhonePermission({
	video: true,
      	audio: true,
});
```

or

```
/* Passing the min/max width/height for video stream and no audio */
const stream = await permissions.getCameraMicroPhonePermission({
	video: true,
	minWidth: 480,
	maxWidth: 1920,
	minHeight: 320,
	maxHeight: 1080,
      	audio: false,
});
```

or

```
/* Simply getting just audio permission and stream */
const stream = await permissions.getCameraMicroPhonePermission({
	video: false,
      	audio: true,
});
```

#### setAudioStreamOff

It is to turn off only audio stream which was previously started using 'getCameraMicroPhonePermission' function.

##### Usage

```
permissions.setAudioStreamOff(stream);
```

#### setVideoStreamOff

It is to turn off only video stream which was previously started using 'getCameraMicroPhonePermission' function.

##### Usage

```
permissions.setVideoStreamOff(stream);
```

#### setAudioVideoStreamsOff

It is to turn off both video and audio streams which were previously started using 'getCameraMicroPhonePermission' function.

##### Usage

```
permissions.setAudioVideoStreamsOff(stream);
```
