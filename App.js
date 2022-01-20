import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

import Home from "./screens/Home";
import SearchBar from "./components/SearchBar";
const App = () => {
	return (
		<SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
			<View style={{ backgroundColor: "#fff", padding: 15 }}>
				<Home />
				<SearchBar />
				<StatusBar style="auto" />
			</View>
		</SafeAreaView>
	);
};
export default App;

const styles = StyleSheet.create({});
