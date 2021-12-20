import * as React from "react"
import { TouchableOpacity, ViewStyle, ImageStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { Icon } from ".."

const CONTAINER: ViewStyle = {
  height: 60,
  width: 60,
  justifyContent: "center",
  position: "absolute",
  bottom: 16,
  right: 16,
}

const ICON: ImageStyle = { height: "90%", width: "90%", alignSelf: "center" }

export interface FloatingButtonProps {
  /**
   * An optional style override useful for padding & margin.
   */
  onPress?: () => void
}

/**
 * Describe your component here
 */
export const FloatingButton = observer(function FloatingButton(props: FloatingButtonProps) {
  const { onPress } = props

  return (
    <TouchableOpacity style={CONTAINER} onPress={onPress}>
      <Icon icon="plus" style={ICON} />
    </TouchableOpacity>
  )
})
