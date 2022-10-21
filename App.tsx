import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as PaperProvider, MD3LightTheme as DefaultTheme } from 'react-native-paper';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import TabTwoScreen from './screens/TabTwoScreen';
import TabOneScreen from './screens/TabOneScreen';
import TopNav from './navigation/TopNav';
import BottomNav from './navigation/BottomNav';
import { ScrollView } from 'react-native';
import Onboard from './screens/Onboard';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MatchSection from './screens/MatchSection';


const Stack = createNativeStackNavigator();

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const theme = {
    ...DefaultTheme,
    roundness: 2,
    version: 3,
    colors: {
      ...DefaultTheme.colors,
      primary: '#FF595D',
      primaryContainer: '#FFEDEB',
      secondary: '#FBCECF',
      tertiary: '#1B2800'
    },
  };


  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <PaperProvider theme={theme}>

          <TopNav />
          {/* <TabOneScreen /> */}
          {/* <TabTwoScreen/> */}
 
          {/* <Onboard /> */}
          <MatchSection/>
          {/* <Navigation colorScheme="light" /> */}
          <BottomNav />
        </PaperProvider>
      </SafeAreaProvider>
    );
  }
}
