import {NavigationProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

type RootStackParamList = {
  Home: {};
  AddRecipe: {};
};

export type RootNavigationProp = NavigationProp<
  StackNavigationProp<RootStackParamList>
>;
