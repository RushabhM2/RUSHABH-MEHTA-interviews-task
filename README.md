# Fullstack Test

<p>
  <!-- iOS -->
  <img alt="Supports Expo iOS" longdesc="Supports Expo iOS" src="https://img.shields.io/badge/iOS-4630EB.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff" />
  <!-- Android -->
  <img alt="Supports Expo Android" longdesc="Supports Expo Android" src="https://img.shields.io/badge/Android-4630EB.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff" />
</p>

## Instructions

### What to build

The app should have only one button. Pressing the button should call a [firebase cloud function](https://firebase.google.com/docs/functions).
Here is a Figma of how the App could potentially look like [Figma Prototype](https://www.figma.com/proto/wZ16lZpnhJmgYh3LJ0AihI/Interview-Task?node-id=1%3A2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2)

Create a firebase function that calls the [Meteo API](https://open-meteo.com/en) and saves the current temperature in London in Celsius to the firestore database.

After clicking the button, the app should show the temperature in London.

### Consider
There are two ways to solve this, you can either query the firestore from the client or you can return the result in the firebase function. Decide which one you want to use and think and write down the pros and cons for yourself.

What is the best way to store the data in firestore?
## 🚀 How to run
- Create a firebase project (don’t worry, it is free) [Firebase Console](https://console.firebase.google.com/)
- Install the firebase [CLI](https://firebase.google.com/docs/cli)
- Log in to your google account you created the project with `firebase login`
- Next run: `firebase projects:list`
- And copy the “project-id” of the project you created.
Run `firebase use --add project-id`
- Go to firebase.ts and change the firebaseConfig to the one of the firebase project you just created

- to start the app, run:`yarn install`, `yarn ios` or `yarn android` from the "testapp" folder
- to start the local emulator, run `yarn install`, `yarn run serve` from the functions folder


## 📝 Notes

