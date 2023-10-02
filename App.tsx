import { StatusBar, View } from 'react-native';
import { Header } from './src/components/Header';
import { colors } from './src/themes/theme';
import { Home } from './src/screens/Home/index';
import { TasksContextProvider } from './src/context/TasksContext';

export default function App() {
  return (
    <>
      <View>
        <StatusBar
            barStyle="light-content"
            backgroundColor={colors.base.gray700}
            translucent
        />
      </View>
    <TasksContextProvider>
      {/* <Header /> */}
      <Home />
    </TasksContextProvider>

  </>
  );
}