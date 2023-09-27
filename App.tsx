import { StatusBar, View } from 'react-native';
import { Header } from './src/components/Header';
import { colors } from './src/themes/theme';
import { Home } from './src/screens/Home/index';

export default function App() {
  return (
    <>
      <View>
        <StatusBar
            barStyle="light-content"
            backgroundColor={colors.base.gray700}
            translucent
        />
        <Header />
      </View>
      <Home />
  </>
  );
}