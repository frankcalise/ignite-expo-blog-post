import { StyleSheet, Text, View, ViewStyle } from "react-native"

export default function IgniteScreen() {
  return (
    <View style={styles.root}>
      <Text>ignite</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
