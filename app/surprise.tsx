import { StyleSheet } from "react-native";

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function SurpriseModal() {
  return (
    <ThemedView style={styles.container}>
      <IconSymbol size={200} color="#808080" name="party.popper" />
      <ThemedText>
        You found the generated modal!
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
});