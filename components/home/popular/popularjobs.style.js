import { StyleSheet } from "react-native";

import { FONT, SIZES, COLORS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xLarge,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.primary,
  },
  headerBtn: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.gray,
  },
  cardsContainer: {
    marginTop: SIZES.medium,
  },
  input: {
    flex: 1,
    fontFamily: FONT.regular,
    backgroundColor: COLORS.white,
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 16,
    marginBottom: 5,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: SIZES.medium,
    borderRadius: SIZES.medium,
    // marginRight: SIZES.small,
  },
  
});

export default styles;
