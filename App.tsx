import { LogBox } from "react-native";
import React, { useEffect } from "react";
import SplashScreen from "react-native-splash-screen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navigation from "./src/navigations";
import { config } from "./src/react-query/lib/react-query-config";

function App(): React.JSX.Element {
  const queryClient = new QueryClient(config);
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Navigation />
    </QueryClientProvider>
  );
}

export default App;

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);
LogBox.ignoreLogs(["new NativeEventEmitter"]);
LogBox.ignoreAllLogs();
