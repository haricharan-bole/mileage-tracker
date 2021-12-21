/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from "react"
import { observer } from "mobx-react-lite"
import { TextInput, View, ViewStyle, Dimensions, ImageStyle, TextStyle } from "react-native"
import { Screen, Text, Button, Icon } from "../../components"
// import { useNavigation } from "@react-navigation/native"
import { useStores } from "../../models"
import { color } from "../../theme"
import { Formik } from "formik"
import DateTimePicker from "@react-native-community/datetimepicker"
import { TouchableOpacity } from "react-native-gesture-handler"

const windowWidth = Dimensions.get("window").width
const windowHeight = Dimensions.get("window").height

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
  alignItems: "flex-end",
  justifyContent: "center",
}

const TEXT_INPUT: ViewStyle = {
  backgroundColor: "grey",
  marginVertical: 16,
  marginLeft: 16,
  borderRadius: 10,
  width: windowWidth * 0.8,
}

const FORM_ITEM_CONTAINER: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  alignSelf: "flex-end",
  justifyContent: "space-evenly",
  marginRight: 16,
}

const BUTTON_CONTAINER: ViewStyle = {
  backgroundColor: "transparent",
  borderRadius: 10,
  marginTop: 32,
  width: windowWidth / 4,
  alignItems: "center",
  alignSelf: "center",
}

const BUTTON_TEXT: TextStyle = {
  color: "black",
}

const FORM_ITEM_ICON: ImageStyle = { height: 40, width: 40 }

export const AddEntryScreen = observer(function AddEntryScreen() {
  // Pull in one of our MST stores
  const { refuelStore } = useStores()
  const { addRefuelEntry } = refuelStore

  const [showDatePicker, setshowDatePicker] = useState(false)
  const [showTimePicker, setshowTimePicker] = useState(false)

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={ROOT} preset="scroll">
      <Formik
        initialValues={{
          odometerMiles: "",
          gasInLiters: "",
          pricePerLiter: "",
          date: new Date().toDateString(),
          time: new Date().toTimeString(),
        }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <View style={FORM_ITEM_CONTAINER}>
              <Icon icon="odo" style={FORM_ITEM_ICON} />
              <TextInput
                onChangeText={handleChange("odometerMiles")}
                onBlur={handleBlur("odometerMiles")}
                value={values.odometerMiles}
                style={TEXT_INPUT}
                placeholder="Odometer (mi)"
                placeholderTextColor={"white"}
                keyboardType="decimal-pad"
              />
            </View>
            <View style={FORM_ITEM_CONTAINER}>
              <Icon icon="gas" style={FORM_ITEM_ICON} />
              <TextInput
                onChangeText={handleChange("gasInLiters")}
                onBlur={handleBlur("gasInLiters")}
                value={values.gasInLiters}
                style={TEXT_INPUT}
                placeholder="Gas (l)"
                placeholderTextColor={"white"}
                keyboardType="decimal-pad"
              />
            </View>
            <View style={FORM_ITEM_CONTAINER}>
              <Icon icon="dollar" style={FORM_ITEM_ICON} />
              <TextInput
                onChangeText={handleChange("pricePerLiter")}
                onBlur={handleBlur("pricePerLiter")}
                value={values.pricePerLiter}
                style={[TEXT_INPUT, { width: windowWidth * 0.4 - 8 }]}
                placeholder="Price/L"
                placeholderTextColor={"white"}
                keyboardType="decimal-pad"
              />
              <TextInput
                onChangeText={handleChange("pricePerLiter")}
                onBlur={handleBlur("pricePerLiter")}
                value={values.pricePerLiter}
                style={[TEXT_INPUT, { width: windowWidth * 0.4 - 8 }]}
                placeholder="Total Cost"
                editable={false}
                placeholderTextColor={"white"}
              />
            </View>
            <View style={FORM_ITEM_CONTAINER}>
              <Icon icon="datetime" style={FORM_ITEM_ICON} />
              <TouchableOpacity
                onPress={() => {
                  setshowDatePicker(true)
                }}
                style={{ zIndex: 3, elevation: 3 }}
              >
                <TextInput
                  value={values.date}
                  style={[TEXT_INPUT, { width: windowWidth * 0.4 - 8, color: "white" }]}
                  placeholder="Price/L"
                  placeholderTextColor={"white"}
                  editable={false}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setshowTimePicker(true)
                }}
              >
                <TextInput
                  value={values.time}
                  style={[TEXT_INPUT, { width: windowWidth * 0.4 - 8, color: "white" }]}
                  placeholder="Total Cost"
                  editable={false}
                />
              </TouchableOpacity>
              {showDatePicker && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={values.date}
                  mode={"date"}
                  is24Hour={true}
                  display="default"
                  onChange={() => {
                    setshowDatePicker(false)
                    handleChange("date")
                  }}
                />
              )}
              {showTimePicker && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={values.time}
                  mode={"time"}
                  is24Hour={true}
                  display="default"
                  onChange={() => {
                    setshowTimePicker(false)
                    handleChange("date")
                  }}
                />
              )}
            </View>
            <View style={BUTTON_CONTAINER}>
              <Button
                preset="primary"
                onPress={handleSubmit}
                text="Add"
                textStyle={BUTTON_TEXT}
                style={{ width: windowWidth / 4 }}
              />
            </View>
          </View>
        )}
      </Formik>
    </Screen>
  )
})
