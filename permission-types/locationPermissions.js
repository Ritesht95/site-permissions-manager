function promptGeoLocationPermission(callback, error) {
    navigator.geolocation.getCurrentPosition((position) => {
        console.log('position: ', position);
        callback(position);
    }, (err) => {
        console.error('error: ', err);
        error(err);
    });
}
function promptGeoLocationPermissionSync() {
    return new Promise((resolve, reject)=> {
        navigator.geolocation.getCurrentPosition((position) => {
            resolve(position);
        }, (err) => {
            reject(err);
        });
    });
}

exports.locationPermissions = {
    promptGeoLocationPermission,
    promptGeoLocationPermissionSync
}