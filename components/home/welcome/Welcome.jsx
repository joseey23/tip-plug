import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList } from "react-native";
import { useRouter } from "expo-router";

import styles from "./welcome.style";
import { SIZES } from "../../../constants";

const jobTypes = ["5 $", "10 $", "20 $", "50 $", "100 $"];

const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState(null);

  const handlePresetAmountPress = (amount) => {
    setSearchTerm(amount);
    setActiveJobType(amount);
  };

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Tip Plug Admin</Text>
        <Text style={styles.welcomeMessage}>Leave a Tip</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder="Enter Tip Amount"
            keyboardType="numeric"
          />
        </View>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => handlePresetAmountPress(item)}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;
