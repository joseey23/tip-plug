import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xLarge,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: SIZES.small,
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
    gap: SIZES.small,
  },
  input: {
    flex: 1,
    fontFamily: FONT.regular,
    backgroundColor: COLORS.white,
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 16,
    marginBottom: 16,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: SIZES.medium,
    borderRadius: SIZES.medium,
    // marginRight: SIZES.small,
    // marginLeft: SIZES.small,
  },
  applyBtn: {
    flex: 1,
    backgroundColor: "#FE7654",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: SIZES.large,
    marginRight: SIZES.large,
    marginTop: 20,
    marginBottom: 16,
    borderRadius: SIZES.medium,
  },
  applyBtnText: {
    fontSize: SIZES.medium,
    color: COLORS.white,
    fontFamily: FONT.bold,
  },
});

export default styles;
