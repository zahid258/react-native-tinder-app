import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  actionImage: {
    width: hp(10),
    height: hp(10),
    alignSelf: "center",
    position: "absolute",
    marginTop: hp(10),
  },
});
