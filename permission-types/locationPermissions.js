function promptGeoLocationPermission(callback, error) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      callback(position);
    },
    (err) => {
      error(err);
    }
  );
}

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
