// In App.js in a new project

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PrimerScreen from './screens/PrimerScreen';
import UploadStatementScreen from './screens/UploadStatementScreen';
import GrantPermissionScreen from './screens/GrantPermissionScreen';
import StatusScreen from './screens/StatusScreen';

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>            
            <Stack.Navigator>
            <Stack.Screen name="Primer" component={PrimerScreen} options={{headerShown: false ,  }}/>
            <Stack.Screen name="Upload" component={UploadStatementScreen} options={{headerShown: false }}/>
            <Stack.Screen name="Permission" component={GrantPermissionScreen} options={{headerShown: false }}/>
            <Stack.Screen name="Status" component={StatusScreen} options={{headerShown: false }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default App;
