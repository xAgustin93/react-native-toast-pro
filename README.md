<!-- prettier-ignore -->
# react-native-toast-pro

A react native module to show toast like android, it works on iOS and Android.

[ ![Web](https://img.shields.io/badge/Web-Agustin-blue.svg)](https://github.com/xAgustin93/react-native-toast-pro/releases)
[ ![Release](https://img.shields.io/badge/release-v0.0.1-blue.svg)](https://github.com/xAgustin93/react-native-toast-pro/releases)
[ ![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen.svg)](https://github.com/xAgustin93/react-native-toast-pro/pulls)
[ ![NPM Version](https://img.shields.io/badge/npm-v.0.01-blue.svg)](....)
[ ![YARN Version](https://img.shields.io/badge/yarn-v.0.01-blue.svg)](....)
[![License MIT](http://img.shields.io/badge/license-ISC-orange.svg?style=flat)](https://github.com/xAgustin93/react-native-toast-pro/master/LICENSE)

### Install

`npm install react-native-toast-pro`
`yarn add react-native-toast-pro`

### Settings

| Name      | Default | Type    | Description |
| --------- | ------- | ------- | ----------- |
| ref       | null    | useRef  | .....       |
| isVisible | false   | Boolean | .....       |
| timer     | 1500    | Number  | .....       |

### Usage 

##### **Toast Error**
```
import React, { useRef } from 'react';
import Toast from 'react-native-root-toast';

export default function App() {
  const toastRef = useRef();

  const toastError = () => {
    toastRef.current.showError("QR Invalido");
  };

  return (
    <View style={styles.container}>
      <Text>React Native Toast Pro</Text>

      <Button title="Test Toast Componente" onPress={() => toastError()} />

      <Toast ref={toastRef} isVisible={true} duration={3500} />
    </View>
  );
}
```

### Run example:

```
cd ./Example
npm install
npm dev
```

## Contribution

Issues are welcome. Please add a screenshot of bug and code snippet. Quickest way to solve issue is to reproduce it on one of the examples.

Pull requests are welcome. If you want to change API or making something big better to create issue and discuss it first.

---

**MIT Licensed**
