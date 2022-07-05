import React, {memo, useEffect} from 'react';
import {Text, FlatList, ScrollView, StyleSheet} from 'react-native';
import {
  defaultAssessmentCards,
  defaultChallengeCards,
  defaultHeaderTitle,
} from '../../utils/constant';
import AssessmentCard from '../../components/AssessmentCard/AssessmentCard';
import ChallengeCard from '../../components/ChallengeCard/ChallengeCard';
import Header from '../../components/Header/Header';
import useDashboard from '../../hooks/useDashboard';
import {COLORS} from '../../utils/colors';

const DashboardPage = memo(() => {
  const {fetchData} = useDashboard();
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const renderAssessmentCard = ({item, index}) => {
    return <AssessmentCard key={index} props={item} />;
  };
  const renderChallengeCard = ({item, index}) => {
    return <ChallengeCard key={index} props={item} />;
  };
  return (
    <>
      <Header title={defaultHeaderTitle} />
      <ScrollView style={styles.container}>
        <Text style={styles.title}>{defaultAssessmentCards.title}</Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={defaultAssessmentCards.data}
          renderItem={renderAssessmentCard}
          keyExtractor={item => item.id.toString()}
        />
        <Text style={styles.title}>{defaultChallengeCards.title}</Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          food
          horizontal
          data={defaultChallengeCards.data}
          renderItem={renderChallengeCard}
          keyExtractor={item => item.id.toString()}
        />
      </ScrollView>
    </>
  );
});
const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginLeft: 16,
    marginTop: 16,
    color: COLORS.darkCharcoal,
  },
  container: {
    backgroundColor: COLORS.white,
  },
});
export default DashboardPage;
