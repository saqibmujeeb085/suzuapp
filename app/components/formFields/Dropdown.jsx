import { StyleSheet, Text, View } from "react-native";
import React from "react";

import DropDownPicker from "react-native-dropdown-picker";

const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
  ]);
  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    />
  );
};

export default Dropdown;

const styles = StyleSheet.create({});

// import { StyleSheet, Text, View } from "react-native";
// import React, { useState } from "react";
// import AppText from "../text/Text";
// import { Ionicons, MaterialIcons } from "@expo/vector-icons";
// import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
// import Search from "../search/Search";

// const Data = [
//   {
//     id: 1,
//     Branch: "toyota-1",
//   },
//   {
//     id: 2,
//     Branch: "toyota-2",
//   },
//   {
//     id: 3,
//     Branch: "toyota-3",
//   },
//   {
//     id: 4,
//     Branch: "toyota-4",
//   },
//   {
//     id: 5,
//     Branch: "toyota-5",
//   },
//   {
//     id: 6,
//     Branch: "toyota-6",
//   },
//   {
//     id: 7,
//     Branch: "toyota-7",
//   },
//   {
//     id: 8,
//     Branch: "toyota-8",
//   },
//   {
//     id: 9,
//     Branch: "toyota-9",
//   },
// ];

// const Dropdown = () => {
//   const [open, setOpen] = useState(false);
//   const [value, setValue] = useState("Dealership");
//   return (
//     <View style={styles.selectorContainer}>
//       <TouchableOpacity
//         style={{ backgroundColor: "white" }}
//         onPress={() => setOpen(!open)}
//       >
//         <View style={styles.selector}>
//           <AppText color={"#BBBBBB"} fontSize={10}>
//             {value}
//           </AppText>
//           {open ? (
//             <MaterialIcons name="arrow-drop-up" color={"#BBBBBB"} size={20} />
//           ) : (
//             <MaterialIcons name="arrow-drop-down" color={"#BBBBBB"} size={20} />
//           )}
//         </View>
//       </TouchableOpacity>

//       {open && (
//         <View style={styles.dropdownContainer}>
//           <Search />
//           {/* <View style={styles.valuesContainer}>

//         <FlatList
//           data={Data}
//           keyExtractor={(Data) => Data.id.toString()}
//           renderItem={({ item }) => <AppText>{item.Branch}</AppText>}
//         />
//       </View> */}
//         </View>
//       )}
//     </View>
//   );
// };

// export default Dropdown;

// const styles = StyleSheet.create({
//   selectorContainer: {
//     backgroundColor: "white",
//     justifyContent: "center",
//     borderRadius: 5,
//   },
//   selector: {
//     elevation: 2,
//     overflow: "hidden",
//     minHeight: 60,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     zIndex: 99,
//     width: "100%",
//     paddingHorizontal: 20,
//     paddingVertical: 15,
//   },
//   dropdownContainer: {
//     position: "absolute",
//     elevation: 2,
//     height: 200,
//     width: "100%",
//     top: 0,
//     backgroundColor: "red",
//     zIndex: 999999,
//   },
// });
