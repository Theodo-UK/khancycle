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
#### First-time setup
- get the keystore (`theodo-uk.keystore`) and passwords from someone on the team.
- put the keystore in the directory `android/app`.
- edit the file `~/.gradle/gradle.properties` and add the following lines (replacing `*****` with the correct passwords):
```
  THEODO_RELEASE_STORE_FILE=theodo-uk.keystore
  THEODO_RELEASE_STORE_PASSWORD=*****
  KHANCYCLE_RELEASE_KEY_ALIAS=khancycle
  KHANCYCLE_RELEASE_KEY_PASSWORD=*****
```

#### Building the app
- build the app using `npm run release:android`
- upload `android/app/build/outputs/apk/app-release.apk` to HockeyApp
