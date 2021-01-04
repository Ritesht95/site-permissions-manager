const { mediaPermissions } = require("./permission-types/mediaPermissions");
const {
  locationPermissions,
} = require("./permission-types/locationPermissions");

exports.permissions = {
  promptGeoLocationPermission: locationPermissions.promptGeoLocationPermission,
  asyncPromptGeoLocationPermission:
    locationPermissions.asyncPromptGeoLocationPermission,
  getGeoLocationPermission: locationPermissions.getGeoLocationPermission,
  getCameraPermission: mediaPermissions.getCameraPermission,
  setAudioStreamOff: mediaPermissions.setAudioStreamOff,
  setVideoStreamOff: mediaPermissions.setVideoStreamOff,
  setAudioVideoStreamsOff: mediaPermissions.setAudioVideoStreamsOff,
};
