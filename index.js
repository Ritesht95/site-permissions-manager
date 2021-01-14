const { mediaPermissions } = require("./permission-types/mediaPermissions");
const {
  locationPermissions,
} = require("./permission-types/locationPermissions");

exports.permissions = {
  promptGeoLocationPermission: locationPermissions.promptGeoLocationPermission,
  asyncPromptGeoLocationPermission:
    locationPermissions.asyncPromptGeoLocationPermission,
  getGeoLocationPermission: locationPermissions.getGeoLocationPermission,
  startLocationTracking: locationPermissions.startLocationTracking,
  stopLocationTracking: locationPermissions.stopLocationTracking,
  getCameraMicroPhonePermission: mediaPermissions.getCameraMicroPhonePermission,
  setAudioStreamOff: mediaPermissions.setAudioStreamOff,
  setVideoStreamOff: mediaPermissions.setVideoStreamOff,
  setAudioVideoStreamsOff: mediaPermissions.setAudioVideoStreamsOff,
};
