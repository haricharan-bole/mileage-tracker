import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { FloatingButton, Screen } from "../../components"
// import { useStores } from "../../models"
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
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    const goToAddEntryScreen = () => {
      navigation.navigate("addEntry")
    }
    return (
      <Screen style={ROOT} preset="scroll">
        <FloatingButton onPress={goToAddEntryScreen} />
      </Screen>
    )
  },
)
