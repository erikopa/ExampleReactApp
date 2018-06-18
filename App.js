import React from 'react';
import { FlatList, Dimensions, Text, View, Image } from 'react-native';


const width = Dimensions.get('screen').width;

export default class App extends React.Component {
    render() {
        const fotos = [
            {id: 1, usuario: 'eriko'},
            {id: 2, usuario: 'marcelo'},
            {id: 3, usuario: 'victor'}
        ];
        return (
            <FlatList style={{marginTop: 20}}
                      keyExtractor={(item, id) => id.toString()}
                      data={fotos}
                      renderItem={
                          ({item}) =>
                              <View>
                                  <Text>{item.usuario}</Text>
                                  <Image source={require('./resources/img/heic1622a.jpg')}
                                         style={{width: width, height: width}}/>
                              </View>
                      }

            />
        );
    }
}
