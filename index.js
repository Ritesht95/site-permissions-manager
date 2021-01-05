const { mediaPermissions } = require("./permission-types/mediaPermissions");
const {
  locationPermissions,
} = require("./permission-types/locationPermissions");

exports.permissions = {
  promptGeoLocationPermission: locationPermissions.promptGeoLocationPermission,
  asyncPromptGeoLocationPermission:
    locationPermissions.asyncPromptGeoLocationPermission,
  getGeoLocationPermission: locationPermissions.getGeoLocationPermission,
  getCameraMicroPhonePermission: mediaPermissions.getCameraMicroPhonePermission,
  setAudioStreamOff: mediaPermissions.setAudioStreamOff,
  setVideoStreamOff: mediaPermissions.setVideoStreamOff,
  setAudioVideoStreamsOff: mediaPermissions.setAudioVideoStreamsOff,
};
