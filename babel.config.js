
const presets = [
  [
    "@babel/env",
    {
      targets: {
        edge: "17",
        ie: "11",
        firefox: "60",
        chrome: "67",
        safari: "11.1",
        browsers: [ "last 1 version", "ie => 11" ]
      },
      useBuiltIns: "usage",
    },
  ],
];
module.exports = { presets };