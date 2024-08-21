import { Link } from 'expo-router'
import { View, Text, StyleSheet } from 'react-native'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Tab [Home|Settings]</Text>
      <Link href="/details">View first user details</Link>
      <Link href="/details">View second user details</Link>
      <Link href="/(tabs)/(settings)">Settings</Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
