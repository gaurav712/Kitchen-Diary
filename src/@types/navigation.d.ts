import {NavigationProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

type RootStackParamList = {
  Home: {};
  AddRecipe: {};
  RecipeDetails: {};
};

export type RootNavigationProp = NavigationProp<
  StackNavigationProp<RootStackParamList>
>;
