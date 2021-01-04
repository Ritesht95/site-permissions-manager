# site-permissions-manager

This is a library which provides a wrapper to manage all the types of site permissions using JavaScript.

## How to install
```
npm i site-permissions-manager
```

## Functions
### promptGeoLocationPermission
It is to prompt user for location permission if it is not already determined and invoke success or error callback based on user action.

#### Usage
```
permissions.promptGeoLocationPermission((result) => {
	//TODO: User grants location permission.
}, (error) => {
	//TODO: User denies location permission or location service is not available.
});
```

### asyncPromptGeoLocationPermission

It is to prompt user for location permission if it is not already determined and returns promise.

#### Usage
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

### getGeoLocationPermission

It is to get location permission state without prompting user for location access and return result via callback.

#### Usage
```
permissions.getGeoLocationPermission((locationState) => {
	// TODO: Action based on location state
},(error) => {
	// TODO: Handling action on error
});
```
