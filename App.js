import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {

  const [number, setNumber] = useState(0);

  const increseNumber = () => {
    setNumber(number + 1);
  }
  return (
    <View style={styles.container}>

      <View style={styles.containerTwo}>

      <TouchableOpacity onPress={increseNumber}>
        <View style={styles.countervIEW}>
          <Text>COUNTER</Text>
        </View>
        </TouchableOpacity>
  
        <View style={styles.numberView}>
          <Text>{number}</Text>
        </View>

        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:'center',
    alignItems:'center'
  },
  countervIEW:{
    alignItems:'center',
    justifyContent:'center',
    borderColor:'black',
    borderWidth:1,
    width:100,
    height:50,
    marginLeft:30
  },
  numberView:{
    justifyContent:'center',
    alignItems:'center',
    width:100,
    height:40,
    borderColor:'black',
    borderWidth:1,
    marginRight:30
    
  },
  containerTwo:{
    width:400,
    height:70,
    borderWidth:1,
    borderColor:'black',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:50,
    flexDirection:'row'
  }

});
