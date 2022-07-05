import React, {memo} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {DEFAULT_ICON} from '../../utils/constant';
import StyledText from 'react-native-styled-text';
import {COLORS} from '../../utils/colors';

const ChallengeCard = memo(({props}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={props.image} />
      <View style={styles.contentContainer}>
        <Text numberOfLines={3} style={styles.title}>
          {props.title}
        </Text>
        <Text numberOfLines={3} style={styles.subTitle}>
          {props.subTitle}
        </Text>
        <View style={styles.descriptionContainer}>
          <StyledText style={styles.description}>
            {props.description.replace('{{num}}', props.point || '0')}
          </StyledText>
          <Ionicon
            name={DEFAULT_ICON.name}
            color={DEFAULT_ICON.color}
            size={DEFAULT_ICON.size}
          />
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 16,
    borderRadius: 8,
    width: 150,
    height: 300,
    shadowColor: COLORS.black,
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    backgroundColor: COLORS.white,
    margin: 16,
  },
  image: {
    width: 100,
    maxHeight: 120,
    alignSelf: 'center',
  },
  title: { fontWeight: '700', width: '100%', color: COLORS.darkCharcoal },
  description: {
    width: '70%',
  },
  subTitle: {
    fontWeight: '300',
    color: COLORS.grey,
    marginTop: 8,
  },
  contentContainer: {
    marginTop: 16,
  },
  descriptionContainer: {
    marginTop: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
export default ChallengeCard;
