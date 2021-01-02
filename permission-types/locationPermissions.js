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
 * @method promptGeoLocationPermission
 * @param {*} successCallback
 * @param {*} errorCallback
 * @description This function is to get location permission state and return result via callback.
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

exports.locationPermissions = {
  promptGeoLocationPermission,
  asyncPromptGeoLocationPermission,
  getGeoLocationPermission,
};
