import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, Alert } from "react-native"
import { FloatingButton, Screen } from "../../components"
import { useStores } from "../../models"
import { color } from "../../theme"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
}

export const HomeScreen: FC<StackScreenProps<NavigatorParamList, "home">> = observer(
  function HomeScreen({ navigation }) {
    // Pull in one of our MST stores
    const { refuelStore } = useStores()
    const { resetRefuelEntries, loadDemoRefuelEntries } = refuelStore

    // Pull in navigation via hook

    const loadDemo = () =>
      Alert.alert("Demo Tracker", "Do you want to load demo data into the Tracker?", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => loadDemoRefuelEntries() },
      ])

    const reset = () =>
      Alert.alert("Reset Tracker", "Do you want to reset the Tracker?", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => resetRefuelEntries() },
      ])

    const addEntry = () => {
      navigation.navigate("addEntry")
    }
    return (
      <Screen style={ROOT} preset="scroll">
        <FloatingButton icon={"demo"} offsetFromBottom={140} onPress={loadDemo} />
        <FloatingButton icon={"reset"} offsetFromBottom={80} onPress={reset} />
        <FloatingButton icon={"plus"} offsetFromBottom={16} onPress={addEntry} />
      </Screen>
    )
  },
)
