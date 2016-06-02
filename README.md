# khancycle

## how to install
`cd khancycle`
`npm install`
`npm install -g react-native-cli`

## how to run in simulator
### iOS
`react-native run-ios`
### Android
`react-native run-android`

## how to test
`npm test`

## how to build for staging deployment
### iOS
- in `ios/KhanCycle/AppDelegate.m`, comment out this line:
` jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.ios.bundle?platform=ios&dev=true"];`
and uncomment this line:
`jsCodeLocation = [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];`

- open `ios/KhanCycle.xcodeproj`, Product > Clean, Product > Archive - choose options for Ad Hoc distribution
- click 'Export' and then upload the resulting `.ipa` to HockeyApp

### Android
- generate keystore and sign as described [here](https://facebook.github.io/react-native/docs/signed-apk-android.html)
- enter `android` directory and run `./gradlew assembleRelease`
- upload `android/app/build/apk/app-release.apk` to HockeyApp
