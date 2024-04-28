import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeDataInAsyncStorage = async (key: string, value: string) => {
  await AsyncStorage.setItem(key, value);
};

export const getDataFromAsyncStorage = async (key: string) => {
  return await AsyncStorage.getItem(key);
};
