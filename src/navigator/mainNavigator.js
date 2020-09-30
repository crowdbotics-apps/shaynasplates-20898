import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile118331Navigator from '../features/UserProfile118331/navigator';
import Maps118260Navigator from '../features/Maps118260/navigator';
import Add-Item118259Navigator from '../features/Add-Item118259/navigator';
import Maps118255Navigator from '../features/Maps118255/navigator';
import UserProfile118251Navigator from '../features/UserProfile118251/navigator';
import Maps118211Navigator from '../features/Maps118211/navigator';
import Add-Item118210Navigator from '../features/Add-Item118210/navigator';
import Maps118206Navigator from '../features/Maps118206/navigator';
import UserProfile118202Navigator from '../features/UserProfile118202/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile118331: { screen: UserProfile118331Navigator },
Maps118260: { screen: Maps118260Navigator },
Add-Item118259: { screen: Add-Item118259Navigator },
Maps118255: { screen: Maps118255Navigator },
UserProfile118251: { screen: UserProfile118251Navigator },
Maps118211: { screen: Maps118211Navigator },
Add-Item118210: { screen: Add-Item118210Navigator },
Maps118206: { screen: Maps118206Navigator },
UserProfile118202: { screen: UserProfile118202Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
