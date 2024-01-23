import {View, Text, Dimensions} from 'react-native';
import React from 'react';
import {Button as PaperButton} from 'react-native-paper';

const {width} = Dimensions.get('screen');

const ListItem = ({item}) => {
  return (
    <View
      style={{
        flex: 1,
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 10,
        marginHorizontal: 24,
      }}>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginBottom:10
        }}>
        <View style={{maxWidth: '80%'}}>
          <Text style={{textTransform: 'capitalize', fontSize: 16,fontWeight:"600"}}>
            {item.brand}
          </Text>
          <Text style={{fontSize: 12}}>{item.description}</Text>
        </View>
        <Text>{item.rating}</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between',gap:7}}>
        <PaperButton
          style={{flex: 1, padding: 0, backgroundColor: '#393E46'}}
          textColor='#DCF2F1'
          mode="outlined">
          İçerik Al
        </PaperButton>
        <PaperButton
          style={{flex: 1, padding: 0, backgroundColor: '#00ADB5'}}
          textColor='#393E46'
          mode="outlined">
          İşi Bitir
        </PaperButton>
      </View>
    </View>
  );
};

export default ListItem;
