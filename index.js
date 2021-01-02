const {
  locationPermissions,
} = require("./permission-types/locationPermissions");

exports.permissions = {
  promptGeoLocationPermission: locationPermissions.promptGeoLocationPermission,
  asyncPromptGeoLocationPermission:
    locationPermissions.asyncPromptGeoLocationPermission,
  getGeoLocationPermission: locationPermissions.getGeoLocationPermission,
};
