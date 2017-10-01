/**
 * @author <a href="mailto:stefanmayer13@gmail.com">Stefan Mayer</a>
 */

// @flow
import React from 'react';
import { View, Text } from 'react-native';

export default class Logo extends React.Component {
  render() {
    return (
      <View style={{flex: 2, backgroundColor: 'powderblue', justifyContent: 'center', alignItems: 'center'}}>
        <Text>CASA-CALIDA</Text>
      </View>
    );
  }
}
