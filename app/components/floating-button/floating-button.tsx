import * as React from "react"
import { TouchableOpacity, ViewStyle, ImageStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { Icon } from ".."
import { IconTypes } from "../icon/icons"

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

  /**
   * Icon Type
   */
  icon?: IconTypes

  /**
   * Icon Type
   */
  offsetFromBottom?: number
}

/**
 * Describe your component here
 */
export const FloatingButton = observer(function FloatingButton(props: FloatingButtonProps) {
  const { onPress, icon, offsetFromBottom } = props

  return (
    <TouchableOpacity style={[CONTAINER, { bottom: offsetFromBottom }]} onPress={onPress}>
      <Icon icon={icon} style={ICON} />
    </TouchableOpacity>
  )
})
