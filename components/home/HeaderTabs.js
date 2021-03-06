import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const HeaderTabs = (props) => {
	return (
		<View style={{ flexDirection: "row", alignSelf: "center" }}>
			<HeaderButton
				text="Delivery"
				btnColor="black"
				textColor="white"
				activeTab={props.activeTab}
				setActiveTab={props.setActiveTab}
			/>
			<HeaderButton
				text="Pickup"
				btnColor="white"
				textColor="black"
				activeTab={props.activeTab}
				setActiveTab={props.setActiveTab}
			/>
		</View>
	);
};

const HeaderButton = (props) => {
	return (
		<TouchableOpacity
			style={{
				backgroundColor: props.activeTab === props.text ? "#000" : "#fff",
				paddingVertical: 6,
				paddingHorizontal: 16,
				borderRadius: 30,
			}}
			onPress={() => props.setActiveTab(props.text)}
		>
			<Text
				style={{
					color: props.activeTab === props.text ? "#fff" : "#000",
					fontSize: 15,
					fontWeight: "900",
				}}
			>
				{props.text}
			</Text>
		</TouchableOpacity>
	);
};
export default HeaderTabs;

const styles = StyleSheet.create({});
