import React, {Component} from 'react';
import { StyleSheet, Text, Image, View} from 'react-native';
import PropTypes from 'prop-types'
import { priceDisplay } from '../Util'


export default class DealDetails extends Component {
  static propTypes = {
    imagedata : PropTypes.object.isRequired, 
  }
    render() {
      return (
        <View style={styles.mainview}> 
            <Image source={{ uri: this.props.imagedata.media[0]}} style={styles.image} />
            <View style={styles.backview}>
               <Text style={styles.title}>{this.props.imagedata.title}</Text>
               <Text style={styles.price}>{priceDisplay(this.props.imagedata.price)}</Text>
               <Text>{this.props.imagedata.cause.name}</Text>
            </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
    list: {
      backgroundColor: '#eee',
      flex: 1,
      width: '100%',
      paddingTop: 50,
    },
    image: {
        width: '85%',
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backview: {
        width: '85%',
        height: 90,
        borderLeftWidth: 1.5,
        borderRightWidth: 1.5,
        borderBottomWidth: 1.5,
        borderLeftColor: 'gray',
        borderBottomColor: 'black',
        borderRightColor: 'gray',
        backgroundColor: 'white',
        paddingTop: 15,
        paddingLeft: 10
    },
    title: {
      fontWeight: 'bold',
    },
    price: {
      paddingLeft: 260
    },
    mainview: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 50,
    }
  });