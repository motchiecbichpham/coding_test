import React, {memo} from 'react';
import {View, Text, Image,StyleSheet} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../utils/colors';
import {DEFAULT_ICON} from '../../utils/constant';
import StyledText from 'react-native-styled-text';
const AssessmentCard = memo(({props}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={props.image} />
      <View style={styles.contentContainer}>
        <Text numberOfLines={3} style={styles.title}>
          {props.title}
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
    padding: 16,
    borderRadius: 8,
    flexDirection: 'row',
    width: 300,
    height: 120,
    elevation: 5,
    shadowColor: COLORS.black,
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
    maxWidth: 100,
    height: 100,
    alignSelf: 'center',
  },
  title: { fontWeight: '700', width: '90%', color: COLORS.darkCharcoal },
  description: {
    width: '50%',
  },
  contentContainer: {
    paddingHorizontal: 16,
    flex: 1,
    justifyContent: 'space-around',
  },
  descriptionContainer: {
    flexDirection: 'row',
    marginTop: 16,
    justifyContent: 'space-between',
  },
});
export default AssessmentCard;
