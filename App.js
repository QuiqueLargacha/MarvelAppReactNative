import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HeroesListScreen from "./src/features/heroes/screens/HeroesListScreen";
import HeroesDetailScreen from "./src/features/heroes/screens/HeroesDetailScreen";

const navigator = createStackNavigator({
  HeroesList: HeroesListScreen,
  HeroesDetail: HeroesDetailScreen
}, {
  initialRouteName: "HeroesList",
  defaultNavigationOptions: {
    title: "Marvel App"
  }
});

export default createAppContainer(navigator)
