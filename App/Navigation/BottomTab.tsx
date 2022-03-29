import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ChatViewModel, LoginViewModel, RegisterViewModel} from '../ViewModels';
import {ICONS} from '../Constants';
import HomeViewModel from '../ViewModels/HomeViewModel';
// import {COLORS} from '../../Constants/theme';
// import style from './styleTab';

// import Icons from '../../Assets/icons';

const Tab = createBottomTabNavigator();

const tabArr = [
  {route: 'Home', label: 'Home', type: ICONS.home, component:HomeViewModel},
  {
    route: 'Search',
    label: 'Search',
    type: ICONS.chat,
    component: ChatViewModel,
  },
  {
    route: 'Profile',
    label: 'Profile',
    type: ICONS.profile,
    component: LoginViewModel,
  },
];

const CustomTab = () => {
  const RenderTabIcon = ({Icon}: any) => {
    return (
      <Image
        source={Icon}
        style={{height: '40%', width: '30%', tintColor: 'black'}}
        resizeMode="contain"
      />
    );
  };

  const RenderButton = (props: any) => {

    const {item, onPress, accessibilityState} = props;
    const focused = accessibilityState.selected;

    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          height: '175%',
          borderRadius: focused ? 10 : 10,
          width: '33.33%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: focused ? 'lightgrey' : 'grey',
        //   margin:10
        }}>
        <Image
          source={item.type}
          style={{
            height: '45%',
            width: '25%',
            tintColor: focused ? 'black' : 'lightgrey',
          }}
          resizeMode="contain"
        />
        {/* <Text style={style.txtLable}>{item.label}</Text> */}
      </TouchableOpacity>
    );
  };

  return (
 
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
             tabBarStyle: {margin:25,borderRadius:15,height:70,alignItems:'center',justifyContent:'space-evenly',backgroundColor:'grey'},
          }}>
          {tabArr.map((item, index) => {
            return (
              <Tab.Screen
                key={`item` + index}
                name={item.route}
                component={item.component}
                options={{
                  tabBarShowLabel: false,
                  tabBarIcon: ({focused}) => (
                    <RenderTabIcon focused={focused} Icon={item.type} />
                  ),
                  tabBarButton: props => (
                    <RenderButton {...props} item={item} />
                  ),
                }}
              />
            );
          })}
        </Tab.Navigator>
   
  );
};

export default CustomTab;
