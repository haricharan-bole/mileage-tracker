import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { FloatingButton, Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
import { useStores } from "../../models"
import { color } from "../../theme"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
}

export const TimelinesScreen: FC<StackScreenProps<NavigatorParamList, "timelines">> = observer(
  function TimelinesScreen({ navigation }) {
    // Pull in one of our MST stores
    const { refuelStore } = useStores()
    const { refuelEntries } = refuelStore

    // Pull in navigation via hook
    // const navigation = useNavigation()
    const addEntry = () => {
      navigation.navigate("addEntry")
    }
    return (
      <Screen style={ROOT} preset="scroll">
        {refuelEntries.map((entry) => {
          return <Text key={entry.id} text={entry.timeStamp} />
        })}
        <FloatingButton icon={"plus"} offsetFromBottom={16} onPress={addEntry} />
      </Screen>
    )
  },
)
