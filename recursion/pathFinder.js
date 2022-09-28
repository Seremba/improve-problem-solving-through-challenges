/* Write another function, pathFinder(directories, targetFile),
that returns the path that contains the targetFile.
If the targetFile is not found in the directories, then return null.
You can assume the files are unique. */

function pathFinder(directories, targetFile) {
  for (let name in directories) {
    if (name === targetFile) return "/" + targetFile;

    let subDir = directories[name];
    let subPath = pathFinder(subDir, targetFile);

    if (subPath !== null) {
      return name + subPath;
    }
  }

  return null;
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
console.log(pathFinder(desktop, "trixie_lou.jpeg")); // => '/images/pets/trixie_lou.jpeg'
console.log(pathFinder(desktop, "everlong.flac")); // => '/music/genres/rock/everlong.flac'
console.log(pathFinder(desktop, "honeybadger.png")); // => null
