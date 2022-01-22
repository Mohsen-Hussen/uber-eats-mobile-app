import React, { useEffect, useState } from "react";
import { View, SafeAreaView, ScrollView } from "react-native";

import Categories from "../components/home/Categories";
import HeaderTabs from "../components/home/HeaderTabs";
import RestaurantItems, {
	localRestaurants,
} from "../components/home/RestaurantItems";
import SearchBar from "../components/home/SearchBar";
import { Divider } from "react-native-elements";
import BottomTabs from "../components/home/BottomTabs"

const YELP_API_KEY =
	"Gs8pnf8k0OQj64V97TumnZplT1IqnvE5zERx0XpRrkUq-vrk-ScmCIyn2BvN76SgjKRhldhzOHcmJDBMR-RXZ30r3RmFpgsRQCT-0S-IkU94VPaxAR73Ox_IwVXsYXYx";

const Home = () => {
	const [restaurantData, setRestaurantData] = useState(localRestaurants);
	const [activeTab, setActiveTab] = useState("Delivery");
	const [city, setCity] = useState("San Francisco");

	const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
	const apiOptions = {
		method: "GET",
		headers: {
			Authorization: `Bearer ${YELP_API_KEY}`,
		},
	};

	const getRestaurantsFromYelp = () => {
		return fetch(yelpUrl, apiOptions)
			.then((res) => res.json())
			.then((json) =>
				setRestaurantData(
					json.businesses.filter((business) =>
						business.transactions.includes(activeTab.toLowerCase())
					)
				)
			);
	};

	useEffect(() => {
		getRestaurantsFromYelp();
	}, [city, activeTab]);

	return (
		<SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
			<View style={{ backgroundColor: "white", padding: 15 }}>
				<HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
				<SearchBar cityHandler={setCity} />
			</View>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Categories />
				<RestaurantItems restaurantData={restaurantData} />
			</ScrollView>
			<Divider width={4} />
			<BottomTabs />
		</SafeAreaView>
	);
};

export default Home;
