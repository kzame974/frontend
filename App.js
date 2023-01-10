import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Router} from "./src/chore/Router";
import HeaderBody from "./src/components/container/headerBody";
import FooterBody from "./src/components/container/footerBody";
import Recipe from "./src/pages/recipe";

export default function App() {
  return (
    <View style={styles.container}>
      <HeaderBody/>
      <Recipe/>
      <FooterBody/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
