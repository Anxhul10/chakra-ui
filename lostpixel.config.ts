export default {
  storybookShots: {
    storybookUrl: "./storybook-static",
  },
  compareEngine: "pixelmatch",
  failOnDifference: true,
  // OSS mode
  // imagePathBaseline: "./lost-pixel/baseline-images",
  // imagePathCurrent: "./lost-pixel/current-images",
  // imagePathDifference: "./lost-pixel/difference-images",

  // Lost Pixel Platform (to use in Platform mode, comment out the OSS mode and uncomment this part )
  // lostPixelProjectId: "xxxx",
  // process.env.LOST_PIXEL_API_KEY,
}
