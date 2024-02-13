import React from "react";
import {View, Text, ImageBackground} from 'react-native';
import styles from './style';
import StyledButton from "../StyledButton";


const CarItem = (props) => {
    return (
        <View style={styles.carContainer}>

        <ImageBackground 
        source = {require('../../assets/images/ModelS.jpeg')}
        style={styles.image}
        />


        <View style={styles.titles}>
          <Text style={styles.title}>Model S</Text>
          <Text style={styles.subtitle}> Starting at $69,240</Text>
        </View>

      <View style={styles.buttonsContainer}>
              <StyledButton type="primary" content={"Custom Order"} onPress={()=> {console.warn (data, "Customer order was pressed")}} />

              <StyledButton type="secondary" content={"Existing Inventory"} onPress={()=> {console.warn (data, "Existing inventory was pressed")}} />
      </View>
        


        
      </View>
    )
};

export default CarItem;
