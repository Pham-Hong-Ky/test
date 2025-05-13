import Router from "./router/router";
import MyDrawer from "./router/drawer";
import './gesture-handler';
import 'react-native-reanimated';
import { NavigationContainer } from "@react-navigation/native";

import { MyTabs } from "./router/tabs"

const App = () => {

  return (
    <NavigationContainer>
      <Router />
      {/* <MyDrawer />
      <MyTabs /> */}
    </NavigationContainer>
  )
}

export default App