#!/bin/bash

# Note: run this from the 'ios' folder -- not here in the 'ios/buildTools' folder!

# Clean project
xcodebuild clean -project KhanCycle.xcodeproj -configuration Release -alltargets

# Copy release version of AppDelegate.m
cp BuildTools/AppDelegate-Release.m KhanCycle/AppDelegate.m

# Create archive
xcodebuild archive -project KhanCycle.xcodeproj -scheme KhanCycle -archivePath KhanCycle.xcarchive

# Save archive for ad-hoc deployment (You'll get a deprecation warning, but the
# new method doesn't work correctly -- http://stackoverflow.com/a/34003826).
xcodebuild -exportArchive -archivePath KhanCycle.xcarchive -exportPath KhanCycle -exportFormat ipa -exportProvisioningProfile "KhanCycle: Ad-Hoc Distribution"

# Remove archive and restore AppDelegate.m
rm -rf KhanCycle.xcarchive
git checkout -- KhanCycle/AppDelegate.m
