# Mobile-eKYC-Zoloz

### Description
This is demonstration for integration ZOLOZ on Application React Native. For more details, you can check at [here](https://docs.zoloz.com/zoloz/saas/integration/grv4bb)

Project uses [react-native-zolozkit](https://www.npmjs.com/package/react-native-zolozkit) package to interact ZOLOZ.

### Tools
* [Node js v16.11.1](https://nodejs.org/)
* [NPM v8.10.0](https://www.npmjs.com/) (packaged by Node js)
* [Java version 11](https://openjdk.org/projects/jdk/11/)

### Instructions

* If you don't have the API server, you can use this [sample project](https://github.com/Patrix2001/Web-eKYC-Zoloz)

* Clone this repo

* Navigate your cloned project on your directory

* Install the package

```bash
 npm install
```

* Edit variable **BASE_URL_API** with your domain API server on file *endpoint.js* in the src/constants directory.

* Run the app

```bash
 npx react-native run-android
```

**Expected Output**

```console
BUILD SUCCESSFUL in 48s
110 actionable tasks: 2 executed, 108 up-to-date
info Connecting to the development server...
info Starting the app on "AV"...
Starting: Intent { cmp=com.applicationzoloz/.MainActivity }
```

### Development Screen's

#### Home Screen

<img src="/images/home.png" alt="home" width="200"/>

#### Feature Description

<div>
<img align=top src="/images/face_capture.png" alt="features" width="200"/>
<img align=top src="/images/selection.png" alt="features" width="200"/>
</div>

#### Face ID

<img src="/images/zoloz_sdk.png" alt="face id" width="200"/>

#### Result

<img src="/images/result_face.png" alt="drawing" width="200"/>


### Further Development

* Fixing the Biometric Authentication Connect ZOLOZ
