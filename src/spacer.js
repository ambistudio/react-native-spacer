import React from 'react';
import { Keyboard, Animated, Dimensions, Platform } from 'react-native';
import PropTypes from 'prop-types';

const windowHeight = Dimensions.get('window').height;

/**
 * react-native-spacer https://snack.expo.io/@hieunc/react-native-spacer
 * - Spacer is used to dynamically positioning its child component when keyboard is toggled.
 *   Technically, the view position will be calculate and update (positioning translateY property)
 *   while keyboard appear/disappear
 * - Usage
  <Spacer spaceMargin={4}>
    <ChildComponent ... />
  </Spacer>
 */
export default class Spacer extends React.PureComponent {
    _topValue = new Animated.Value(0);
    _viewHeight = 0;
    _locationY = 0;
    _toValue = 0;

    componentDidMount() {

        const showListenerEvent =
            Platform.OS === 'android' ? 'keyboardDidShow' : 'keyboardWillShow';
        const hideListenerEvent =
            Platform.OS === 'android' ? 'keyboardDidHide' : 'keyboardWillHide';

        Keyboard.addListener(showListenerEvent, this._keyboardWillShow);
        Keyboard.addListener(hideListenerEvent, this._keyboardWillHide);

        this._spaceMargin = this.props.spaceMargin;
    }

    _keyboardWillHide = () => {
        if (this.props.enabled) {
            // Move view back to the initiated position
            this._animate(0).start();
        }
    };

    _keyboardWillShow = ev => {

        if (this.props.enabled) {
            if (this._container) {
                this._container._component.measureInWindow((x, y, w, h) => {
                    // Calculation new position above the keyboard
                    let toValue = (y + h) - (windowHeight - (ev.endCoordinates.height + this._spaceMargin));
                    this._animate(-1 * toValue).start();
                })
            } else {
                // Calculation new position above the keyboard
                let toValue = (this._locationY + this._viewHeight) - (windowHeight - (ev.endCoordinates.height + this._spaceMargin));
                this._animate(-1 * toValue).start();
            }
        }
    };

    _animate = (toValue, duration = 300) => {

        // Short hand for animating view
        return Animated.timing(this._topValue, {
            toValue,
            duration,
        });
    };


    _setLayoutProps = ev => {

        // View height, sometimes it return 0
        this._viewHeight = ev.nativeEvent.layout.height;

        // Cordinator y of view
        if (y = ev.nativeEvent.layout.y) {
            this._locationY = y
        } else {
            this._container
                ._component
                .measureInWindow((x, y, width, height) => {
                    this._locationY = y;
                })
        }
    };

    render() {
        let { style, ref, children, backgroundColor, ...rest } = this.props;

        return <Animated.View
            ref={ref => this._container = ref}
            onLayout={this._setLayoutProps}
            style={[style, {
                transform: [{ translateY: this._topValue }],
                backgroundColor
            }]}
            collapsable={false}
            {...rest}
        >{children}</Animated.View>;
    }
}

Spacer.propsTypes = {
    // A distance of component above the keyboard when it has shown
    spaceMargin: PropTypes.number,
    enabled: PropTypes.bool,
    backgroundColor: PropTypes.string
}

Spacer.defaultProps = {
    spaceMargin: 0,
    enabled: true,
    backgroundColor: '#fffffff7'
}
