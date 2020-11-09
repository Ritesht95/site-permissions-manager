const {locationPermissions} = require('./permission-types/locationPermissions');

exports.permissions = {
    promptGeoLocationPermission: locationPermissions.promptGeoLocationPermission,
    promptGeoLocationPermissionSync: locationPermissions.promptGeoLocationPermissionSync
}