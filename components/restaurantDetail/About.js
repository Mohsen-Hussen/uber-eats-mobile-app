import React from "react";
import { Image, Text, View } from "react-native";

const About = (props) => {
	// const yelpResturantInfo = {
	// 	image:
	// 		"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
	// 	name: "name",
	// 	price: "$$",
	// 	reviews: "1500",
	// 	rating: "4.5",
	// 	categories: [{ title: "thai" }, { title: "comfort food" }],
	// };

	// const { name, image, price, reviews, rating, categories } = yelpResturantInfo;
	
	const { name, image, price, reviews, rating, categories } =
		props.route.params;

	const formattedCategories = categories.map((cat) => cat.title).join(" • ");
	const description = `${formattedCategories} ${
		price ? " • " + price : ""
	} • 🎫 • ${rating} ⭐ (${reviews}+)`;

	return (
		<View>
			<RestaurantImage image={image} />
			<RestaurantName name={name} />
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
		{props.name}
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
