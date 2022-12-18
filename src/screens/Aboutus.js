import {
    Linking,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
    ScrollView
  } from "react-native";
  import React from "react";
  
  const Aboutus = () => {
    return (
        <ScrollView>
      <View style={styles.aboutContainer}>
        <View>
          <Image
            style={styles.imgStyle}
            source={require("../assets/splashicon.png")}
            // source={{
            //   uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpjatiXE5apJcFrHQsOpsAvq3Q9w4_NIE-ag&usqp=CAU",
            // }}
          />
        </View>
  
        <View style={styles.aboutLayout}>
          <Text style={styles.aboutSubHeader}> About Us </Text>
          <Text style={[styles.paraStyle, styles.aboutPara]}>
            Women ERA is an online platform which gathers information 
            regarding scholarships, jobs and PhD experts in IT. We are here to 
            recommend you scholarships and jobs that matches your skills and qualification.{'\n'}
            {'\n'}
            At womenera you can get info regarding latest scholarship and job openings. The scholarship
            openings are helpful for students all around the world seeking financial means for higher education abroad,
          </Text>
          </View>
          <View style={styles.aboutLayout}>
          <Text style={styles.aboutSubHeader}> Our mission </Text>
          <Text style={[styles.paraStyle, styles.aboutPara]}>
          •To provide a platform that will help the female students to choose their careers, and
find women-specific scholarships and professors and skills.{'\n'}
{'\n'}
• To provide a system that not only saves time to get information in one place but
also helps women to communicate with registered supervisors and authors in the
IT domain.{'\n'}
{'\n'}
• To provide a platform that empowers women to choose the IT field and explore
scholarships and jobs specifically for women that remain unnoticed on multiple
websites.{'\n'}
{'\n'}

• To provide a recommendation of scholarships, jobs, and experts according to user
needs.

          </Text>
          </View>
       
  
        <Text style={styles.mainHeader}> Follow us on Social Network </Text>
  
        <View style={styles.menuContainer}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() =>
              Linking.openURL("https://www.instagram.com")
            }>
            <Image
              style={styles.iconStyle}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
              }}
            />
          </TouchableOpacity>
  
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() =>
              Linking.openURL(
                "https://www.youtube.com"
              )
            }>
            <Image
              style={styles.iconStyle}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/187/187210.png",
              }}
            />
          </TouchableOpacity>
  
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => Linking.openURL("https://discord.gg/")}>
            <Image
              style={styles.iconStyle}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/906/906361.png",
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
    );
  };
  
  const styles = StyleSheet.create({
    aboutContainer: {
      display: "flex",
      alignItems: "center",
    },
  
    imgStyle: {
      width: 300,
      height: 250,
      borderRadius: 20,
    },
    mainHeader: {
      fontSize: 18,
      color: "#344055",
      fontWeight: "500",
      marginTop: 50,
      marginBottom: 10,
      fontFamily: "JosefinSans_700Bold",
    },
    paraStyle: {
      fontSize: 18,
      color: "#7d7d7d",
      paddingBottom: 30,
    },
    aboutLayout: {
      backgroundColor: "#be7df0",
      paddingHorizontal: 30,
      marginVertical: 30,
      borderRadius:30,
      width:340,
      elevation:2
    
    },
    aboutSubHeader: {
      fontSize: 18,
      color: "#fff",
      textTransform: "uppercase",
      fontWeight: "bold",
      marginVertical: 15,
      fontFamily: "JosefinSans_700Bold",
      alignSelf: "center",
    },
    aboutPara: {
      color: "#fff",
    },
    menuContainer: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-evenly",
    },
  
    iconStyle: {
      width: "100%",
      height: 50,
      aspectRatio: 1,
    },
  });
  
  export default Aboutus;