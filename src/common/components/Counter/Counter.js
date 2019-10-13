import React from 'react';
import {Text} from 'react-native';
import {View} from 'react-native';
import {Icon} from 'native-base';
import {counterStyles} from './Counter.styles';

const CounterComponent = props => {
  return (
    <View style={counterStyles.container}>
      <Icon
        onPress={() => {
          if (props.peopleCounter > 1) {
            props.setPeopleCounter(props.peopleCounter - 1);
          }
        }}
        type="AntDesign"
        name="minus"
        style={counterStyles.minus}
      />
      <Text style={counterStyles.numberOfPeople}>
        {' '}
        {props.peopleCounter} peopple
      </Text>
      <Icon
        onPress={() => {
          props.setPeopleCounter(props.peopleCounter + 1);
        }}
        type="AntDesign"
        name="plus"
        style={counterStyles.plus}
      />
    </View>
  );
};

export const Counter = CounterComponent;
