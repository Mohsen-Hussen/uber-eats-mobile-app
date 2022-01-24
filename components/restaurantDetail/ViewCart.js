import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Modal } from "react-native";
import { useSelector } from "react-redux";
import OrderItem from "./OrderItem";

const ViewCart = () => {
	const [modalVisible, setModalVisible] = useState(false);
	const [loading, setLoading] = useState(false);

	const { items, restaurantName } = useSelector(
		(state) => state.cartReducer.selectedItems
	);

	const total = items
		.map((item) => Number(item.price.replace("$", "")))
		.reduce((prev, curr) => prev + curr, 0);

	const totalUSD = total.toLocaleString("en", {
		style: "currency",
		currency: "USD",
	});
	// console.log(totalUSD);
	const checkoutModalContent = () => {
		return (
			<>
				<View style={styles.modalContainer}>
					<View style={styles.modalCheckoutContainer}>
						<Text style={styles.restaurantName}>{restaurantName}</Text>
						{items.map((item, index) => (
							<OrderItem key={index} item={item} />
						))}
						<View style={styles.subtotalContainer}>
							<Text style={styles.subtotalText}>SubTotal</Text>
							<Text style={styles.subtotalText}>${totalUSD}</Text>
						</View>
						<View style={{ flexDirection: "row", justifyContent: "center" }}>
							<TouchableOpacity
								style={{
									marginTop: 20,
									backgroundColor: "black",
									alignItems: "center",
									padding: 13,
									borderRadius: 30,
									width: 300,
									position: "relative",
								}}
								onPress={() => {
									setModalVisible(false);
								}}
							>
								<Text style={{ color: "white", fontSize: 20 }}>Checkout</Text>
								<Text
									style={{
										position: "absolute",
										right: 20,
										color: "white",
										fontSize: 15,
										top: 17,
									}}
								>
									${total ? totalUSD : ""}
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</>
		);
	};
	return (
		<>
			<Modal
				animationType="slide"
				visible={modalVisible}
				transparent={true}
				onRequestClose={() => setModalVisible(false)}
			>
				{checkoutModalContent()}
			</Modal>
			{total ? (
				<View
					style={{
						flex: 1,
						alignItems: "center",
						justifyContent: "center",
						flexDirection: "row",
						position: "absolute",
						zIndex: 100,
						bottom: 170,
					}}
				>
					<View
						style={{
							justifyContent: "center",
							flexDirection: "row",
							width: "100%",
						}}
					>
						<TouchableOpacity
							style={{
								marginTop: 20,
								backgroundColor: "#000",
								alignItems: "center",
								flexDirection: "row",
								justifyContent: "center",
								padding: 15,
								borderRadius: 30,
								width: 300,
								position: "relative",
							}}
							onPress={() => setModalVisible(true)}
						>
							<Text style={{ color: "#fff", fontSize: 20, marginRight: 20 }}>
								ViewCart
							</Text>
							<Text style={{ color: "white", fontSize: 20 }}>${totalUSD}</Text>
						</TouchableOpacity>
					</View>
				</View>
			) : (
				<></>
			)}
		</>
	);
};

export default ViewCart;

const styles = StyleSheet.create({
	modalContainer: {
		flex: 1,
		justifyContent: "flex-end",
		backgroundColor: "rgba(0,0,0,0.7)",
	},

	modalCheckoutContainer: {
		backgroundColor: "white",
		padding: 16,
		height: 500,
		borderWidth: 1,
	},

	restaurantName: {
		textAlign: "center",
		fontWeight: "600",
		fontSize: 18,
		marginBottom: 10,
	},

	subtotalContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 15,
	},

	subtotalText: {
		textAlign: "left",
		fontWeight: "600",
		fontSize: 15,
		marginBottom: 10,
	},
});
