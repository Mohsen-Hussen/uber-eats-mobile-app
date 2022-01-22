import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";

import Home from "./screens/Home";
import RestaurantDetail from "./screens/RestaurantDetail";

const App = () => {
	return (
		<SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
			<StatusBar style="auto" />
			<RestaurantDetail />
		</SafeAreaView>
	);
};
export default App;
