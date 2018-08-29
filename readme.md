# React Native Spacer

A view wrapper that will float above the keyboard when it displayed. Technically, it used Animated.View and will animate a `translateY` value to avoid the keyboard.

It is highly recommended to use `KeyboardAvodingView`. But in some rare case when `KeyboardAvodingView` not working, try this `Spacer`. 

## Demo

[See demo on Expo Snack](https://snack.expo.io/rk3f3lNZQ)
 
![react-native-spacer demo](https://media.giphy.com/media/1rLwVHQufUoFzxyNeT/giphy.gif)


## I. Installation 
```ssh
npm install --save react-native-spacer
```

## II. How to use

Class `Spacer` is a wraper using Animated.View. For usage, see official documentation [Animated](https://facebook.github.io/react-native/docs/animated.html) and [View](https://facebook.github.io/react-native/docs/view.html)

__1. Import library__

```javascript
import Spacer from 'react-native-spacer';
```

__2. Wrap component into Spacer__

```javascript

<Spacer spaceMargin={20}>
    {/* Components that float when keyboard is showing */}
</Spacer>
```

## III. Properties

| Property Name | Type     | Default Value | Definition | 
| ------------- | -------- | ------------- |----------- |
| spaceMargin   |  number  | 10            | A distance of component above the keyboard when it displayed |

Feel free to have any question, file an issue, or contributing to the module.

## IV. Todo

- Create tests