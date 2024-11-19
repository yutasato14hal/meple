import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
  SafeAreaView,
} from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
function SelectFolder({ navigation }) {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('FolderDetail');
          }}
        >
          <Text style={styles.userIcon}>
            <MaterialIcons name="account-circle" size={64} color="white" />
          </Text>
          <MaterialIcons name="keyboard-arrow-right" size={48} color="white" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => Alert.alert('View Clicked!')}
        >
          <Text style={styles.userIcon}>
            <MaterialIcons name="account-circle" size={64} color="pink" />
          </Text>
          <MaterialIcons name="keyboard-arrow-right" size={48} color="pink" />
        </TouchableOpacity>
      </SafeAreaView>
      <View style={styles.settings}>
        <MaterialIcons name="settings" size={40} color="white" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userIcon: {
    marginLeft: 20,
  },
  button: {
    flexDirection: 'row',

    marginBottom: 40,
    width: 280,
    height: 200,
    backgroundColor: 'skyblue',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 27,
  },
  settings: {
    position: 'absolute', // 画面の絶対位置に配置
    bottom: 10, // 画面の下から10px
    right: 35, // 画面の右から10px
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SelectFolder;
