import React from 'react';
import { Keyboard, Animated, Dimensions } from 'react-native';
import PropTypes from 'prop-types';

const windowHeight = Dimensions.get('window').height;

/**
 * react-native-spacer
 * @author hieunc229<hieunc@live.com>
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
        Keyboard.addListener('keyboardWillShow', this._keyboardWillShow);
        Keyboard.addListener('keyboardWillHide', this._keyboardWillHide);

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
            // Calculation new position above the keyboard
            let toValue = (this._locationY + this._viewHeight) - (windowHeight - (ev.endCoordinates.height + this._spaceMargin));
            this._animate(-1 *toValue).start();
        }
    };

    _animate = (toValue, duration = 150) => {

        // Short hand for animating view
        return Animated.spring(this._topValue, {
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
        let { style } = this.props;
        delete this.props.style;

        return <Animated.View
            ref={ref => this._container = ref}
            onLayout={this._setLayoutProps}
            style={[style, {
                transform: [{ translateY: this._topValue }]
            }]}
            collapsable={false}
            {...this.props}
        ></Animated.View>;
    }
}

Spacer.propsTypes = {

    // A distance of component above the keyboard when it has shown
    spaceMargin: PropTypes.number,

    // Enable/disable spacing (for minimize animation to improve performance)
    enabled: PropTypes.bool
}

Spacer.defaultProps = {
    spaceMargin: 10,
    enabled: true
}
