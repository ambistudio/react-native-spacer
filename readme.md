# React Native Spacer
[![npm version](https://badge.fury.io/js/react-native-spacer.svg)](https://badge.fury.io/js/react-native-spacer)

A view wrapper that will float above the keyboard when it displayed. Technically, it uses Animated.View and will animate a `translateY` value to avoid the keyboard.

`KeyboardAvodingView` is highly recommended. But in some rare case when `KeyboardAvodingView` not working, try this `Spacer`. 

## Demo

[See demo on Expo Snack](https://snack.expo.io/@hieunc/react-native-spacer)


[View gif demo](https://media.giphy.com/media/1rLwVHQufUoFzxyNeT/giphy.gif)

<img src="https://media.giphy.com/media/1rLwVHQufUoFzxyNeT/giphy.gif">


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

Feel free to have any question, file an issue, or contributing to the module.

## IV. Todo

- Create tests
