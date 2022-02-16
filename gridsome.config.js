// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

module.exports = {
  siteName: 'Robonomics.academy',
  plugins: [
    {
      use: 'gridsome-source-google-sheets',
      options: {
        // sheetId: '14WAbsWX11-W96B6xbA6bHsYtu_UTS1S3e6Mjea5LTLA',
        // apiKey: 'AIzaSyAeEl3_CEYUjV2bfEIMXEyoBGkuPzyxiyQ',
        // script: "1Qbyaoa4BYnhHw9r-jYxrcsUBLYL-3OuBXcvKFXDzv8j27SCoLvlSABt1",
        // script: "AKfycbxC1Rh0_lDevyLfhfcenPY5L0OucRICvHVdBuZqP_jc6W4yuspbXQb_1eKD-GGr3i0O"
      }
    }
  ],
  chainWebpack: config => {
    config.resolve.alias.set('@images', '~/assets/images')
  }
}
