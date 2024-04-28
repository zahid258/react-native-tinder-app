import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef: any = createNavigationContainerRef();

export const navigate = (name: string, params?: any) =>
  navigationRef.isReady() && navigationRef.navigate(name, params);
