/**
 * @method getCameraMicroPhonePermission
 * @param {Object} args
 * @param {Boolean} args.video
 * @param {Number} args.minWidth
 * @param {Number} args.maxWidth
 * @param {Number} args.minHeight
 * @param {Number} args.maxHeight
 * @param {Boolean} args.audio
 * @description This function is to prompt user for media permissions like camera and microphone. It will return a promised based on the user action for permission request.
 */
async function getCameraMicroPhonePermission({
  video,
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,
  audio,
}) {
  return new Promise((resolve, reject) => {
    if (
      "mediaDevices" in navigator &&
      "getUserMedia" in navigator.mediaDevices
    ) {
      try {
        const constraintsObj = {};
        if (video && (minWidth || maxWidth || minHeight || maxHeight)) {
          const videoObj = {};
          if (minWidth || maxWidth) {
            videoObj.width = {};
            minWidth ? (videoObj.width.min = minWidth) : null;
            maxWidth ? (videoObj.width.max = maxWidth) : null;
          }
          if (minHeight || maxHeight) {
            videoObj.height = {};
            minHeight ? (videoObj.height.min = minHeight) : null;
            maxHeight ? (videoObj.height.max = maxHeight) : null;
          }
        } else if (video) {
          constraintsObj.video = true;
        }
        if (audio) {
          constraintsObj.audio = true;
        }
        const stream = navigator.mediaDevices.getUserMedia(constraintsObj);
        resolve(stream);
      } catch (err) {
        reject(err);
      }
    } else {
      reject("Your browser does not support media devices");
    }
  });
}

/**
 * @method setAudioVideoStreamsOff
 * @param {*} stream
 * @description This function is to stop both video and audio stream
 */
function setAudioVideoStreamsOff(stream) {
  stream.getTracks().forEach((track) => {
    if (track.readyState == "live") {
      track.stop();
    }
  });
}

/**
 * @method setVideoStreamOff
 * @param {*} stream
 * @description This function is to stop video stream only
 */
function setVideoStreamOff(stream) {
  stream.getTracks().forEach((track) => {
    if (track.readyState == "live" && track.kind === "video") {
      track.stop();
    }
  });
}

/**
 * @method setAudioStreamOff
 * @param {*} stream
 * @description This function is to stop audio stream only
 */
function setAudioStreamOff(stream) {
  stream.getTracks().forEach((track) => {
    if (track.readyState == "live" && track.kind === "audio") {
      track.stop();
    }
  });
}

exports.mediaPermissions = {
  getCameraMicroPhonePermission,
  setAudioVideoStreamsOff,
  setVideoStreamOff,
  setAudioStreamOff,
};
