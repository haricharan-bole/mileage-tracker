import React from "react"
import { ImageStyle, TextStyle, useColorScheme } from "react-native"
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { HomeScreen, TimelinesScreen, AddEntryScreen } from "../screens"
import { navigationRef } from "./navigation-utilities"
import { Icon } from "../components"

export type NavigatorParamList = {
  welcome: undefined
  demo: undefined
  demoList: undefined
  home: undefined
  timelines: undefined
  addEntry: undefined
  AppStack: undefined
  AppTabs: undefined
}

const Tabs = createBottomTabNavigator<NavigatorParamList>()

const ICON: ImageStyle = { height: 30, width: 30 }

const AppTabs = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "green",
        tabBarLabelStyle: { fontWeight: "bold", paddingHorizontal: 4 },
        tabBarLabelPosition: "beside-icon",
        tabBarActiveBackgroundColor: "#BFEEB7",
      }}
      initialRouteName="home"
    >
      <Tabs.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          // eslint-disable-next-line react/display-name
          tabBarIcon: ({ focused }): React.ReactElement =>
            focused ? (
              <Icon icon="homeLight" style={ICON} />
            ) : (
              <Icon icon="homeDark" style={ICON} />
            ),
          tabBarItemStyle: { borderTopRightRadius: 10, borderBottomRightRadius: 10 },
        }}
      />
      <Tabs.Screen
        name="timelines"
        component={TimelinesScreen}
        options={{
          tabBarLabel: "Timeline",
          // eslint-disable-next-line react/display-name
          tabBarIcon: ({ focused }): React.ReactElement =>
            focused ? (
              <Icon icon="timelineLight" style={ICON} />
            ) : (
              <Icon icon="timelineDark" style={ICON} />
            ),
          tabBarItemStyle: { borderTopLeftRadius: 10, borderBottomLeftRadius: 10 },
        }}
      />
    </Tabs.Navigator>
  )
}

const Stack = createNativeStackNavigator<NavigatorParamList>()

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="AppTabs"
    >
      <Stack.Screen name="AppTabs" component={AppTabs} />
      <Stack.Screen name="addEntry" component={AddEntryScreen} options={{ headerShown: true }} />
    </Stack.Navigator>
  )
}

interface NavigationProps extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = (props: NavigationProps) => {
  const colorScheme = useColorScheme()
  return (
    <NavigationContainer
      ref={navigationRef}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      {...props}
    >
      <AppStack />
    </NavigationContainer>
  )
}

AppNavigator.displayName = "AppNavigator"

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 *
 * `canExit` is used in ./app/app.tsx in the `useBackButtonHandler` hook.
 */
const exitRoutes = ["welcome"]
export const canExit = (routeName: string) => exitRoutes.includes(routeName)
