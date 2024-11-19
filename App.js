import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// 必要なコンポーネントをインポート
import SelectFolder from './src/screens/SelectFolder';
import FolderDetail from './src/screens/FolderDetail';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SelectFolder">
        <Stack.Screen
          name="SelectFolder"
          component={SelectFolder}
          options={{
            title: 'Folder Detail',
            headerShown: false, // ヘッダーを非表示に設定
          }}
          // オプションのタイトル設定
        />
        <Stack.Screen
          name="FolderDetail"
          component={FolderDetail}
          options={{
            title: 'Select Folder',
            headerShown: false, // ヘッダーを非表示に設定
          }}
         // オプションのタイトル設定
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
