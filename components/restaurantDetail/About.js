import React from "react";
import { Image, Text, View } from "react-native";

const About = (props) => {
	// const { name, image, price, reviews, rating, categories } =
	// 	props.route.params;

	// const formattedCategories = categories.map((cat) => cat.title).join(" • ");

	// const description = `${formattedCategories} ${
	// 	price ? " • " + price : ""
	// } • 🎫 • ${rating} ⭐ (${reviews}+)`;
	const image =
		"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80";
	const title = "title";
	const description = "description";

	return (
		<View>
			<RestaurantImage image={image} />
			<RestaurantName title={title} />
			<RestaurantDescription description={description} />
		</View>
	);
};

const RestaurantImage = (props) => (
	<Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
);

const RestaurantName = (props) => (
	<Text
		style={{
			fontSize: 29,
			fontWeight: "600",
			marginTop: 10,
			marginHorizontal: 15,
		}}
	>
		{props.title}
	</Text>
);

const RestaurantDescription = (props) => (
	<Text
		style={{
			marginTop: 10,
			marginHorizontal: 15,
			fontWeight: "400",
			fontSize: 15.5,
		}}
	>
		{props.description}
	</Text>
);
export default About;
