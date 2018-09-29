import React, { Component } from "react";
import { Dimensions } from "react-native";
import RNProgressBar from "react-native-progress/Bar";

import colors from "../utils/colors";
const deviceWidth = Dimensions.get("window").width;

class ProgressBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            progress: 0,
            indeterminate: true,
        };
    }

    componentDidMount() {
        this.animate();
    }

    animate() {
        setTimeout(() => {
            this.setState({ progress: this.props.rate / 100 });
        }, 500);
    }

    render() {
        return (
            <RNProgressBar
                progress={this.state.progress}
                width={deviceWidth / 1.2}
                height={17}
                color={colors.base}
                unfilledColor={colors.border}
                borderWidth={0}
                borderRadius={0}
            />
        );
    }
}

export default ProgressBar;
