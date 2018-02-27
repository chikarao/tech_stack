import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';
// going up one directory with ..

class ListItem extends Component {
  // automatically called right before whenever component rerendered
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    const { propsLibrary, expanded } = this.props;
    console.log(this.props.expanded);
    console.log(this.props.propsLibrary.id);

      if (expanded) {
        return (
          <CardSection>
            <Text style={{ flex: 1, padding: 10 }}>{propsLibrary.description}</Text>
          </CardSection>
        );
      }
  }

  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.propsLibrary;
    // console.log(id);

    return (
      <TouchableWithoutFeedback
      onPress={() => this.props.selectLibrary(id)}
      >
          <View>
              <CardSection>
                <Text style={titleStyle}>
                  {title}
                </Text>
              </CardSection>
              {this.renderDescription()}
          </View>
        </TouchableWithoutFeedback>
      );
        }
    }

  const styles = {
    titleStyle: {
      fontSize: 18,
      paddingLeft: 15,
    }
};

// ownProps is this.props
// did precalculatoin on selectedLibraryId==
// which comes from SelectionReducer and returns payload which is id
// expanded has id in props
// also turning previously clicked ones to false when new one clicked
const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.propsLibrary.id;
  return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
// no mapStateToProps so pass null; first arg in () specifically for mapStateToProps
// second pass entire actions, and use as props
// adds to redux store and connectded to props
