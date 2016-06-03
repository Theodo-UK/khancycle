# khancycle

## how to install

```bash
cd khancycle
npm install
```

## how to run in simulator/emulator

Start the packager:
```bash
npm start
```
Followed by:

#### iOS
`npm run ios`
#### Android
`npm run android`

## Testing

To run eslint and tests, run:
```bash
npm test
```

## how to build for staging deployment
### iOS
- in `ios/KhanCycle/AppDelegate.m`, comment out this line:
` jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.ios.bundle?platform=ios&dev=true"];`
and uncomment this line:
`jsCodeLocation = [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];`
- ensure that in `ios/KhanCycle/Info.plist` and `ios/KhanCycle/Info.plist`, the `CFBundleIdentifier` is the same as in the provisioning profile (i.e. `uk.co.theodo.khancycle`)
- open `ios/KhanCycle.xcodeproj`, Product > Clean, Product > Archive - choose options for Ad Hoc distribution
- click 'Export' and then upload the resulting `.ipa` to HockeyApp

### Android
- generate keystore and sign as described [here](https://facebook.github.io/react-native/docs/signed-apk-android.html)
- enter `android` directory and run `./gradlew assembleRelease`
- upload `android/app/build/apk/app-release.apk` to HockeyApp
