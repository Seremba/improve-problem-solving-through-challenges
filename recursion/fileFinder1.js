/*
Write a function, fileFinder(directories, targetFile), that accepts an object representing
directories and a string respresenting a filename.
The function should return true, if the file is contained anywhere in the given directories.
Note that directory names will begin with '/', but file names will not.
*/
function fileFinder(directories, targetFile) {
  for (let key in directories) {
    if (key === targetFile || fileFinder(directories[key], targetFile)) {
      return true;
    }
  }
  return false;
}

let desktop = {
  "/images": {
    "app_academy_logo.svg": null,
    "/parks": {
      "yosemite.jpeg": null,
      "acadia.jpeg": null,
      "yellowstone.png": null,
    },
    "/pets": {
      "trixie_lou.jpeg": null,
      "rolo.jpeg": null,
      "opal.jpeg": null,
      "diana.jpeg": null,
    },
  },
  "/music": {
    "hey_programmers.mp3": null,
    "/genres": {
      "/rock": {
        "everlong.flac": null,
        "livin_on_a_prayer.mp3": null,
      },
      "/hip_hop": {
        "express_yourself.wav": null,
        "ny_state_of_mind.mp3": null,
      },
    },
  },
};

console.log(fileFinder(desktop, "app_academy_logo.svg")); // => true
console.log(fileFinder(desktop, "everlong.flac")); // => true
console.log(fileFinder(desktop, "sequoia.jpeg")); // => false
