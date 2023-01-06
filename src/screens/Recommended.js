import React, {useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  FlatList,
} from 'react-native';

import {hp, wp} from '../util/index';
import Icons from 'react-native-vector-icons/Fontisto';
import IconFont from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect} from 'react';
const Recommended = props => {
  console.log('props========>', props.route.params.skills);

  const Data = [
    {
      'Google Alerts Title': 'Software engineer jobs',
      Publisher: 'Rozee.pk',
      Summary:
        'Senior Software Engineer ... Job Description; About Company. Requirement: Good knowledge of Web Development Standards and Technologies ...',
      URL: 'https://www.rozee.pk/cognitiive-axis-senior-software-engineer-lahore-jobs-1330057%3Futm_source%3DjobSearch%26utm_medium%3Dwebsite%26utm_content%3DjobSearch_1330057%26utm_campaign%3Drozee.pk_job_search',
      'Share on Facebook':
        'https://www.google.com/alerts/share?hl=en&gl=PK&ru=https://www.rozee.pk/cognitiive-axis-senior-software-engineer-lahore-jobs-1330057%3Futm_source%3DjobSearch%26utm_medium%3Dwebsite%26utm_content%3DjobSearch_1330057%26utm_campaign%3Drozee.pk_job_search&ss=fb&rt=Senior+Software+Engineer+Job,+Lahore,+Cognitiive+Axis+-+ROZEE.PK&cd=KhM5MzYxMTQ2NTUxMDM1MzkyNjI4Mhw2ZjAyNjkwNDQ4NjFhZGVhOmNvbTplbjpQSzpS&ssp=AMJHsmWzSyc7nFgi0p2h1y2FioSLkV7-pQ',
      'Flag as Irrelevant':
        'https://www.google.com/alerts/feedback?ffu=https://www.rozee.pk/cognitiive-axis-senior-software-engineer-lahore-jobs-1330057%3Futm_source%3DjobSearch%26utm_medium%3Dwebsite%26utm_content%3DjobSearch_1330057%26utm_campaign%3Drozee.pk_job_search&source=alertsmail&hl=en&gl=PK&msgid=OTM2MTE0NjU1MTAzNTM5MjYyOA&s=AB2Xq4jTOCMV-MEecEZ7v6nVxyez2IzLqvYtly4',
      'Your Notes': null,
      'Date & Time': 'Dec 11, 2022, 07:48:00',
    },
    {
      'Google Alerts Title': 'Software engineer jobs',
      Publisher: 'Rozee.pk',
      Summary:
        "UBL is looking to hire Software Engineers for its Information Technology Division. Job Requirements: Bachelor's degree in Software Engineering or ...",
      URL: 'https://www.rozee.pk/united-bank-limited-ubl-software-engineer-karachi-lahore-jobs-1330183',
      'Share on Facebook':
        'https://www.google.com/alerts/share?hl=en&gl=PK&ru=https://www.rozee.pk/united-bank-limited-ubl-software-engineer-karachi-lahore-jobs-1330183&ss=fb&rt=Software+Engineer+Job,+Karachi,+Lahore,+United+Bank+Limited+(UBL)+-+Rozee.pk&cd=KhM5MzYxMTQ2NTUxMDM1MzkyNjI4Mhw2ZjAyNjkwNDQ4NjFhZGVhOmNvbTplbjpQSzpS&ssp=AMJHsmVd-m8sYkARc39awptSHQjKzZGgPg',
      'Flag as Irrelevant':
        'https://www.google.com/alerts/feedback?ffu=https://www.rozee.pk/united-bank-limited-ubl-software-engineer-karachi-lahore-jobs-1330183&source=alertsmail&hl=en&gl=PK&msgid=OTM2MTE0NjU1MTAzNTM5MjYyOA&s=AB2Xq4jTOCMV-MEecEZ7v6nVxyez2IzLqvYtly4',
      'Your Notes': null,
      'Date & Time': 'Dec 11, 2022, 07:48:00',
    },
    {
      'Google Alerts Title': 'Software engineer jobs',
      Publisher: 'LinkedIn Pakistan',
      Summary:
        'Posted 5:59:48 AM. ILSA INTERACTIVE is looking for a talented individual for the post of Sr. Software Engineer ( .NET\u2026See this and similar jobs on ...',
      URL: 'https://pk.linkedin.com/jobs/view/sr-software-engineer-net-developer-at-ilsa-interactive-3387202267',
      'Share on Facebook':
        'https://www.google.com/alerts/share?hl=en&gl=PK&ru=https://pk.linkedin.com/jobs/view/sr-software-engineer-net-developer-at-ilsa-interactive-3387202267&ss=fb&rt=ILSA+Interactive+hiring+Sr.+Software+Engineer+(.NET+Developer)+in+Lahore,+Punjab,+Pakistan&cd=KhM5MzYxMTQ2NTUxMDM1MzkyNjI4Mhw2ZjAyNjkwNDQ4NjFhZGVhOmNvbTplbjpQSzpS&ssp=AMJHsmV11p7ml5_KGAaRmIFwwtGYRjZ8ZA',
      'Flag as Irrelevant':
        'https://www.google.com/alerts/feedback?ffu=https://pk.linkedin.com/jobs/view/sr-software-engineer-net-developer-at-ilsa-interactive-3387202267&source=alertsmail&hl=en&gl=PK&msgid=OTM2MTE0NjU1MTAzNTM5MjYyOA&s=AB2Xq4jTOCMV-MEecEZ7v6nVxyez2IzLqvYtly4',
      'Your Notes': null,
      'Date & Time': 'Dec 11, 2022, 07:48:00',
    },
  ];
  return (
    <FlatList
      keyExtractor={item => item.id}
      data={Data}
      renderItem={({item, index}) => {
        return (
          <TouchableOpacity>
            <View style={styles.container}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}>
                <View style={styles.topContainer}>
                  <Image
                    source={require('../assets/rec.png')}
                    resizeMode="contain"
                    style={styles.imageStyle}
                  />
                  <View style={styles.jobTitle}>
                    <Text style={styles.titleText}>
                      {item['Google Alerts Title']}
                    </Text>
                    <View style={styles.categoryView}>
                      <Text style={styles.categoryText}>{item.Publisher}</Text>
                    </View>
                  </View>
                </View>
              </View>

              <Text style={styles.description} numberOfLines={2}>
                {item.Summary}
              </Text>
              <View style={styles.bottomView}>
                <View style={styles.rowContainer}>
                  <Icons name={'date'} color={'#be7df0'} size={wp(6)} />
                  {/* <Calendar width={wp(6)} height={wp(6)} /> */}
                  <Text style={styles.dateTimeText}>{'12/23/22'}</Text>
                </View>
                <View style={styles.rowContainer}>
                  <IconFont name={'clock-o'} color={'#be7df0'} size={wp(6)} />
                  <Text style={styles.dateTimeText}>{'9:10'}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default Recommended;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: wp(4),
    borderColor: '#F5F5F5',
    borderWidth: hp(0.15),

    backgroundColor: '#fff',
    padding: hp(2),
    borderRadius: 10,
    marginBottom: hp(1.5),
  },
  topContainer: {
    flexDirection: 'row',
    marginLeft: wp(-2),
  },
  imageStyle: {
    width: wp(12),
    height: wp(12),
    borderRadius: 10,
  },
  jobTitle: {
    marginLeft: wp(2.5),
  },
  titleText: {
    fontSize: hp(2.2),
    width: wp(65),
    color: '#000',
    // fontFamily: theme.family.semiBold,
  },
  categoryView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryText: {
    color: '#2670FF',
    marginRight: wp(3),
    fontSize: hp(1.6),
    // fontFamily: theme.family.semiBold,
  },
  address: {
    color: '#2670FF',
    fontSize: hp(1.6),
    width: wp(35),
    marginLeft: wp(1),
    // backgroundColor: 'red',
    // fontFamily: theme.family.semiBold,
  },
  description: {
    marginVertical: hp(1),
  },
  bottomView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp(55),
    justifyContent: 'space-between',
  },

  dateTimeText: {
    // color: theme.color.buttonBackground,
    fontSize: hp(1.5),
    marginLeft: wp(1.5),
    // fontFamily: theme.family.semiBold,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inviteStyle: {
    color: '#fff',
    // fontFamily: theme.family.semiBold,
    // fontSize: theme.size.xSmall,
  },
});
