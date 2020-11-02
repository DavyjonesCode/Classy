import React from "react"
import { createDrawerNavigator } from 'react-navigation-drawer';

const Drawer = createDrawerNavigator(
    {
      Home:{ screen: Home},
      Profile:{ screen: Profile},
      Settings:{ screen: Settings}
  
    },
    {
      initialRouteName: "Home",
      unmountInactiveRoutes: true,
      headerMode: "none",
      contentComponent: props => <Sidebar {...props} />
    }
  )

  const AppNavigator = createStackNavigator(
    {
      Drawer : {screen: Drawer},
    },
    {
      initialRouteName: "Drawer",
    }
  )