module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      unitToConvert: 'rpx', // 要转化的单位
      viewportWidth: 750,
      viewportHeight: 1334,
      unitPrecision: 5,
      viewportUnit: 'vw',
      selectorBlackList: [],
      minPixelValue: 1,
      mediaQuery: false
    }
  }
}
