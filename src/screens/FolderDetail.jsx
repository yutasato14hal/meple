// App.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList,SafeAreaView} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const DATA = [
  { id: '1', title: 'タイトル', date: '2027/11/30 木曜日', subtitle: '追加タイトル' },
  { id: '2', title: 'タイトル', date: '2027/11/30 木曜日', subtitle: '追加タイトル' },
  { id: '3', title: 'タイトル', date: '2027/11/30 木曜日', subtitle: '追加タイトル' },
  { id: '4', title: 'タイトル', date: '2027/11/30 木曜日', subtitle: '追加タイトル' },
];

const FolderDetail = ({navigation}) => {
  // FlatListのレンダーアイテム関数
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.date}>{item.date}</Text>
      <Text style={styles.subtitle}>{item.subtitle}</Text>
    </View>
  );

  return (
   
    <View style={styles.container}>
      <SafeAreaView/>
      {/* ヘッダー */} 
      <View style={styles.header}>
      <TouchableOpacity 
      onPress={() => {
        navigation.goBack();
      }}
      >
        <MaterialIcons name="arrow-back-ios" size={24} color="#FFB74D" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>個人フォルダ</Text>
        <Text style={styles.editText}>編集</Text>
       
      </View>

      {/* リスト */}
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />

      {/* フッターのアイコン */}
      <TouchableOpacity style={styles.fab}>
        <MaterialIcons name="edit" size={24} color="#FFB74D" />
      </TouchableOpacity>
    </View>
  );
};

// スタイル
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0E0E0',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#E0E0E0',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  editText: {
    color: '#FFB74D',
    fontSize: 16,
  },
  list: {
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 14,
    color: '#757575',
  },
  subtitle: {
    fontSize: 14,
    color: '#757575',
  },
  fab: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 28,
    padding: 16,
    elevation: 4, // Android用の影効果
  },
});

export default FolderDetail;
