/**
 * @method promptGeoLocationPermission
 * @param {*} successCallback
 * @param {*} errorCallback
 * @description This function is to prompt user for location permission if it is not already determined and invoke success or error callback based on that.
 */
function promptGeoLocationPermission(successCallback, errorCallback) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      successCallback(position);
    },
    (err) => {
      errorCallback(err);
    }
  );
}

/**
 * @method asyncPromptGeoLocationPermission
 * @description This function is to prompt user for location permission if it is not already determined and returns promise.
 */
function asyncPromptGeoLocationPermission() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve(position);
      },
      (err) => {
        reject(err);
      }
    );
  });
}

/**
 * @method getGeoLocationPermission
 * @param {*} successCallback
 * @param {*} errorCallback
 * @description This function is to get location permission state without prompting the user for location access and return result via callback.
 */
function getGeoLocationPermission(successCallback, errorCallback) {
  try {
    navigator.permissions
      .query({ name: "geolocation" })
      .then((result) => {
        successCallback(result.state);
      })
      .catch((err) => {
        errorCallback(err);
      });
  } catch (err) {
    errorCallback(err);
  }
}

/**
 * @method startLocationTracking
 * @param {Object} args
 * @param {Function} args.successCallback
 * @param {Function} args.errorCallback
 * @param {Object} args.positionOptions
 * @param {Number} args.thresholdTime
 * @description This function is to continuously track user location. A threshold can be set by passing the miliseconds for thresholdTime parameter.
 */
function startLocationTracking({
  successCallback,
  errorCallback,
  positionOptions,
  thresholdTime,
}) {
  let enableCall = true;
  const locationWatchPositionId = navigator.geolocation.watchPosition(
    (position) => {
      if (thresholdTime) {
        if (!enableCall) {
          return;
        }
        enableCall = false;
      }
      try {
        successCallback(position);
      } catch (err) {
        errorCallback(err);
      }
      if (thresholdTime) {
        setTimeout(() => {
          enableCall = true;
        }, thresholdTime);
      }
    },
    (err) => {
      navigator.geolocation.clearWatch(locationWatchPositionId);
      errorCallback(err);
    },
    positionOptions
  );
  return locationWatchPositionId;
}

/**
 * @method stopLocationTracking
 * @param {Number} locationTrackingId
 * @description This function is to stop tracking user location which was started before by passing locationTrackingId.
 */
function stopLocationTracking(locationTrackingId) {
  navigator.geolocation.clearWatch(locationTrackingId);
}

exports.locationPermissions = {
  promptGeoLocationPermission,
  asyncPromptGeoLocationPermission,
  getGeoLocationPermission,
  startLocationTracking,
  stopLocationTracking,
};
