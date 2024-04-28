import { Dimensions, StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { theme } from "../../../config/theme";

const { width: screenWidth } = Dimensions.get("window");

export const styles = StyleSheet.create({
  cardContainer: {
    width: screenWidth,
    height: "100%",
  },
  image: {
    borderRadius: hp(2),
    height: "93%",
  },
  imageInfoContainer: {
    position: "absolute",
    bottom: 0,
    height: hp(12.5),
    width: "92%",
    alignSelf: "center",
  },
  name: {
    color: theme.color.white.original,
    fontFamily: "Poppins-SemiBold",
    fontSize: hp(2.8),
    textTransform: "capitalize",
  },
  age: {
    fontFamily: "Poppins-Regular",
    fontSize: hp(2.8),
  },
  locationWrapper: {
    flexDirection: "row",
    alignItems: "center",
    bottom: hp(0.9),
  },
  distance: {
    color: theme.color.white.original,
    fontFamily: "Poppins-Regular",
    fontSize: hp(1.8),
    left: hp(0.8),
    top: hp(0.2),
  },
  itemContainer: {
    backgroundColor: theme.color.white.original,
    borderRadius: 5,
    height: hp(20),
    padding: hp(2),
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: hp(2.4),
    fontWeight: "bold",
  },
  text: {
    fontSize: hp(1.6),
  },
  iconContainer: {
    width: "18%",
    alignItems: "center",
    justifyContent: "center",
  },
});
