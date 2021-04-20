import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button, Image, LogBox} from 'react-native';
import { Header, LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions,} from 'react-native/Libraries/NewAppScreen';
import React from 'react';
import {useState, useEffect} from 'react';

import auth from '@react-native-firebase/auth';

const LoginGoogle = () => {
    const [loggedIn, setloggedIn] = useState(false);
    const [userInfo, setuserInfo] = useState([]);

    _signIn = async () => {
        try {
          await GoogleSignin.hasPlayServices();
          const {accessToken, idToken} = await GoogleSignin.signIn();
          setloggedIn(true);
          const credential = auth.GoogleAuthProvider.credential(
            idToken,
            accessToken,
          );
          await auth().signInWithCredential(credential);
          console.log(loggedIn);
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
                alert('Cancel');
            } else if (error.code === statusCodes.IN_PROGRESS) {
                alert('Signin in progress');
                // operation (f.e. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                alert('PLAY_SERVICES_NOT_AVAILABLE');
                // play services not available or outdated
            } else {
            // some other error happened
            }
        }
    };

    useEffect(() => {
        GoogleSignin.configure({
            scopes: ['email'], // what API you want to access on behalf of the user, default is email and profile
            webClientId:
                '736741736914-tb4036k6f51a7cfpol9c56uens6o1cb6.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
            offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
        });
    }, []);

    signOut = async () => {
      try {
        await GoogleSignin.revokeAccess();
        await GoogleSignin.signOut();
        auth()
          .signOut()
          .then(() => alert('Your are signed out!'));
        setloggedIn(false);
        // setuserInfo([]);
      } catch (error) {
        console.error(error);
      }
    };

    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={styles.scrollView}>
                <Header />
        
                <View style={styles.body}>
                    <View style={styles.sectionContainer}>
                    <GoogleSigninButton
                        style={{width: 192, height: 48}}
                        size={GoogleSigninButton.Size.Wide}
                        color={GoogleSigninButton.Color.Dark}
                        onPress={this._signIn}
                    />
                    </View>
                    <View style={styles.buttonContainer}>
                    {!loggedIn && <Text>You are currently logged out</Text>}
                    {loggedIn && (
                        <Button
                        onPress={this.signOut}
                        title="LogOut"
                        color="red"></Button>
                    )}
                    </View>
                </View>
                </ScrollView>
            </SafeAreaView>
        </>
      );
};

const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: Colors.lighter,
    },
    listHeader: {
      backgroundColor: '#eee',
      color: "#222",
      height: 44,
      padding: 12
    },
    detailContainer: {
      paddingHorizontal: 20
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      paddingTop: 10
    },
    message: {
      fontSize: 14,
      paddingBottom: 15,
      borderBottomColor: "#ccc",
      borderBottomWidth: 1
    },
    dp:{
      marginTop: 32,
      paddingHorizontal: 24,
      flexDirection: 'row',
      justifyContent: 'center'
    },
    engine: {
      position: 'absolute',
      right: 0,
    },
    body: {
      backgroundColor: Colors.white,
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
      flexDirection: 'row',
      justifyContent: 'center'
    },
    buttonContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
      flexDirection: 'row',
      justifyContent: 'center'
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: Colors.black,
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
      color: Colors.dark,
    },
    highlight: {
      fontWeight: '700',
    },
    footer: {
      color: Colors.dark,
      fontSize: 12,
      fontWeight: '600',
      padding: 4,
      paddingRight: 12,
      textAlign: 'right',
    },
});

export default LoginGoogle;