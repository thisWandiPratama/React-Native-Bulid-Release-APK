import React from 'react';
import { StatusBar } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/routers';

const App = () => {

  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
      <Router />
    </NavigationContainer>
  )

};

export default App;

// import React, {Component} from 'react';
// import {
//   Animated,
//   Dimensions,
//   Image,
//   StyleSheet,
//   Text,
//   View,
//   Button,
//   Modal,
//   TouchableWithoutFeedback,
//   TouchableOpacity,
// } from 'react-native';
// import Interactable from 'react-native-interactable';

// const Screen = {
//   width: Dimensions.get('window').width,
//   height: Dimensions.get('window').height,
// };

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this._deltaY = new Animated.Value(Screen.height - 100);
//     this._deltaX = new Animated.Value(Screen.height - 100);
//     this.state = {
//       initialPosition: false,
//     };
//   }

//   bs = React.createRef();

//   render() {
//     return (
//       <View style={styles.container}>
//         <Button
//           title="Open"
//           onPress={() =>
//             this.setState({initialPosition: !this.state.initialPosition})
//           }
//         />
//         <Modal
//           animationType="slide"
//           transparent={true}
//           visible={this.state.initialPosition}
//           onRequestClose={() => {
//             this.setState({initialPosition: !this.state.initialPosition});
//           }}>
//           <View style={styles.panelContainer} pointerEvents={'box-none'}>
//             <Animated.View
//               pointerEvents={'box-none'}
//               style={[
//                 styles.panelContainer,
//                 {
//                   backgroundColor: 'black',
//                   opacity: this._deltaY.interpolate({
//                     inputRange: [0, Screen.height - 100],
//                     outputRange: [0.5, 0],
//                     extrapolateRight: 'clamp',
//                   }),
//                 },
//               ]}
//             />
//             <Interactable.View
//               ref={this.bs}
//               verticalOnly={true}
//               snapPoints={[
//                 {y: 0},
//                 {y: Screen.height - 400},
//                 {y: Screen.height - 210},
//               ]}
//               boundaries={{top: -300}}
//               initialPosition={{
//                 y: Screen.height - 400,
//               }}
//               animatedValueY={this._deltaY}
//               animatedValueX={this._deltaX}>
//               <TouchableWithoutFeedback
//                 onPress={() => this.setState({initialPosition: false})}>
//                 <View style={{height: '10%'}} />
//               </TouchableWithoutFeedback>
//               <View style={styles.panel}>
//                 <View style={styles.panelHeader}>
//                   <View style={styles.panelHandle} />
//                 </View>
//                 <Text style={styles.panelTitle}>San Francisco Airport</Text>
//                 <Text style={styles.panelSubtitle}>
//                   International Airport - 40 miles away
//                 </Text>
//                 <View style={styles.panelButton}>
//                   <Text style={styles.panelButtonTitle}>Directions</Text>
//                 </View>
//                 <View style={styles.panelButton}>
//                   <Text style={styles.panelButtonTitle}>Search Nearby</Text>
//                 </View>
//                 <Image
//                   style={styles.photo}
//                   source={{
//                     uri: 'https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
//                   }}
//                 />
//               </View>
//             </Interactable.View>
//           </View>
//         </Modal>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#efefef',
//   },
//   panelContainer: {
//     position: 'absolute',
//     top: 0,
//     bottom: 0,
//     left: 0,
//     right: 0,
//   },
//   panel: {
//     height: Screen.height + 300,
//     padding: 20,
//     backgroundColor: '#f7f5eee8',
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//     shadowColor: 'black',
//     shadowOffset: {width: 0, height: 0},
//     shadowRadius: 5,
//     shadowOpacity: 0.4,
//   },
//   panelHeader: {
//     alignItems: 'center',
//   },
//   panelHandle: {
//     width: 40,
//     height: 8,
//     borderRadius: 4,
//     backgroundColor: '#00000040',
//     marginBottom: 10,
//   },
//   panelTitle: {
//     fontSize: 27,
//     height: 35,
//   },
//   panelSubtitle: {
//     fontSize: 14,
//     color: 'gray',
//     height: 30,
//     marginBottom: 10,
//   },
//   panelButton: {
//     padding: 20,
//     borderRadius: 10,
//     backgroundColor: '#459FED',
//     alignItems: 'center',
//     marginVertical: 10,
//   },
//   panelButtonTitle: {
//     fontSize: 17,
//     fontWeight: 'bold',
//     color: 'white',
//   },
//   photo: {
//     width: Screen.width - 40,
//     height: 225,
//     marginTop: 30,
//   },
//   map: {
//     height: Screen.height,
//     width: Screen.width,
//   },
// });
