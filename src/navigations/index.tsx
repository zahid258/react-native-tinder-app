import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import BottomTab from "./bottom-tab";
import { Stack } from "../utilities/navigation";
import { navigationRef } from "./navigation-utils";

const Navigation = (): JSX.Element => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{ headerShown: false, animation: "slide_from_right" }}
      >
        <Stack.Screen name="BottomTab" component={BottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
