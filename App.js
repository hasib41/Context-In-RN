import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import React from "react";

import IndexScreen from "./src/screens/indexScreen";
import { BlogProvider } from "./src/screens/context/blogContext";

const navigator = createStackNavigator({
    Index: IndexScreen
}, {
    initialRouteName: 'Index',
    defaultNavigationOption: {
        title: 'Blogs'
    }
});

const App = createAppContainer(navigator);

export default () => { 
   return <BlogProvider>
        <App/>
   </BlogProvider> 
}