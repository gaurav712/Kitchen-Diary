import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddRecipe from '../screens/AddRecipe';
import Home from '../screens/Home';
import RecipeDetails from '../screens/RecipeDetails';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AddRecipe"
        component={AddRecipe}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="RecipeDetails"
        component={RecipeDetails}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
