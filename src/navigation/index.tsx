import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddRecipe from '../screens/AddRecipe';
import Home from '../screens/Home';

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
          title: 'Add Recipe',
        }}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
