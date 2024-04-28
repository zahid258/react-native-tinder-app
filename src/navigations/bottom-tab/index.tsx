import React, { useEffect } from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../../modules/screens/home';
import Favorites from '../../modules/screens/favorites';
import { IMAGES } from '../../components/constants/images';
import { generateUUID } from '../../utilities/utils/uuid';
import {
  getDataFromAsyncStorage,
  storeDataInAsyncStorage,
} from '../../utilities/utils/async-storage';
import { styles } from './styles';
import { theme } from '../../config/theme';

const Tab = createBottomTabNavigator();

const BottomTab = (): React.JSX.Element => {
  useEffect(() => {
    generateUserId();
  }, []);

  const generateUserId = async () => {
    const userId = await getDataFromAsyncStorage('uuid');
    if (!userId) storeDataInAsyncStorage('uuid', generateUUID());
  };

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name='Home'
        component={Home}
        options={({ route }) => ({
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <Image
              source={IMAGES.MAIN}
              style={[
                styles.image,
                {
                  tintColor: focused
                    ? theme.color.theme.original
                    : theme.color.lightGrey.secondary,
                },
              ]}
            />
          ),
        })}
      />
      <Tab.Screen
        name='Favorites'
        component={Favorites}
        options={({ route }) => ({
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <Image
              source={IMAGES.FAVORITE}
              style={[
                styles.image,
                {
                  tintColor: focused
                    ? theme.color.theme.original
                    : theme.color.lightGrey.secondary,
                },
              ]}
            />
          ),
        })}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
