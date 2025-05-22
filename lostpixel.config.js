"use strict"
var __defProp = Object.defineProperty
var __getOwnPropDesc = Object.getOwnPropertyDescriptor
var __getOwnPropNames = Object.getOwnPropertyNames
var __hasOwnProp = Object.prototype.hasOwnProperty
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true })
}
var __copyProps = (to, from, except, desc) => {
  if ((from && typeof from === "object") || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable,
        })
  }
  return to
}
var __toCommonJS = (mod) =>
  __copyProps(__defProp({}, "__esModule", { value: true }), mod)
var lostpixel_config_exports = {}
__export(lostpixel_config_exports, {
  default: () => lostpixel_config_default,
})
module.exports = __toCommonJS(lostpixel_config_exports)
var lostpixel_config_default = {
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
