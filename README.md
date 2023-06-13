## ron
Sample [@ionic/vue](https://ionicframework.com/docs/vue/overview) application for **Android**.

### Requirements
1. **Node.js**: Install the latest version of Node.js from <https://nodejs.org>.
2. **Android SDK**: Install Android SDK with **API 33**.
    Download Android Studio from <https://developer.android.com/studio>
    and download API 33 in its SDK Manager.
3. **Ionic CLI**: Install the Ionic CLI globally using this command:
    ```shell
    npm install -g @ionic/cli
    ```
   
### Development Setup
1. Clone the repository.
2. Open a terminal and navigate to the project directory.
3. Install the project dependencies.
    ```shell
    npm install
    ```
4. Start the development server.
    ```shell
    npm run dev
    ```
   Open the URL in your browser.
5. Build the Android app.
    ```shell
    ionic capacitor build android
    ```
6. Run the android app.
    ```shell
    ionic capacitor run android
    ```
   Open the android app on an emulator or connected device with 
   [USB Debugging](https://www.makeuseof.com/tag/what-is-usb-debugging-mode-on-android-makeuseof-explains/)
   turned on.

### Production Build
To build the APK using **Android Studio**:

1. Open Android Studio.
2. Select "Open an Existing Project" and navigate to the project directory.
3. Inside the project, locate the android folder and open it.
4. Wait for the project to sync and build.
5. Once the build is complete, go to the "Build" menu and select "Build Bundle(s) / APK(s)".
6. Choose "Build APK(s)" from the options.
7, Android Studio will generate the APK file, which can be found in the android/app/build/outputs/apk directory.
