import React from 'react';
import {View, Text,StyleSheet} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {COLORS} from '../../utils/colors';
const HEADER_HEIGHT = 45 + 8 + getStatusBarHeight(false);
const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <View style={styles.titleWrapper}>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={styles.textTitle}>
          {title}
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    paddingTop: getStatusBarHeight(false),
    borderBottomColor: COLORS.brightGray,
    borderBottomWidth: 1,
    alignItems: 'center',
    paddingVertical: 8,
    height: HEADER_HEIGHT,
  },
  titleWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textTitle: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    color: COLORS.darkCharcoal,
  },
})
export default Header;
