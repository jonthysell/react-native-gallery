import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {SymbolIcon} from 'react-native-xaml';

const styles = StyleSheet.create({
  badgeContainer: {
    paddingLeft: 10,
    paddingRight: 10,
    height: 28,
    borderRadius: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 2,
  },
  badgeText: {
    fontSize: 15,
    fontWeight: '400',
    paddingRight: 4,
  },
});

export function Badge(props: {
  badgeColor: string;
  textColor: string;
  badgeTitle: string;
  icon: number;
  description: string;
}) {
  return (
    <View
      style={[styles.badgeContainer, {backgroundColor: props.badgeColor}]}
      tooltip={props.description}>
      <Text style={[styles.badgeText, {color: props.textColor}]}>
        {props.badgeTitle}
      </Text>
      <SymbolIcon symbol={props.icon} foreground={props.textColor} />
    </View>
  );
}
