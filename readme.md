
<h1 align="center">React Native Spacer</h1>
<p align="center">
    <a href="https://www.npmjs.com/package/react-native-spacer" target="_blank" />
        <img src="https://badge.fury.io/js/react-native-spacer.svg" alt="NPM badge" />
    </a>
    <a href="https://github.com/ambistudio/react-native-spacer/blob/master/LICENSE" target="_blank" />
        <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="NPM badge" />
    </a>
</p>

<h3 align="center">
    <b>A view wrapper that will float above the keyboard when it displayed</b>
</h3>

Technically, it uses Animated.View and will animate a `translateY` value to avoid the keyboard. `KeyboardAvodingView` is highly recommended. But in some rare case when `KeyboardAvodingView` not working, try this `Spacer`. 

## Demo

[See demo on Expo Snack](https://snack.expo.io/@hieunc/react-native-spacer)

<img src="https://i.giphy.com/media/PhCDE18p1uMekZC6CX/giphy.gif" alt="Demo" title="Demo" />

## I. Installation 
```ssh
npm install --save react-native-spacer
```

## II. How to use

Class `Spacer` is a wrapper using Animated.View. For usage, see official documentation [Animated](https://facebook.github.io/react-native/docs/animated.html) and [View](https://facebook.github.io/react-native/docs/view.html)

__1. Import library__

```javascript
import Spacer from 'react-native-spacer';
```

__2. Wrap component into Spacer__

```javascript

<Spacer spaceMargin={20}>
    {/* Components that need to float when keyboard showing */}
</Spacer>
```

## III. Properties

| Property Name | Type     | Default Value | Definition | 
| ------------- | -------- | ------------- |----------- |
| spaceMargin   | number   | 0            | Component's margin above the keyboard when it displayed |
| enabled       | bool     | true          | Set to `false` to disable Spacer
| backgroundColor | string | #fffffff7 | Spacer component background color
| animationDuration | number | 300 | Duration of the view animation

Feel free to have any question, file an issue, or contributing to the module.

## IV. Todo

- Create tests
