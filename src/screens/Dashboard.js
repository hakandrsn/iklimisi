import React, {useEffect, useState} from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import {FlatList, View} from 'react-native';
import axios from 'axios';
import ListItem from '../components/ListItem';
import {useDispatch} from 'react-redux';
import {setToken} from '../redux/auth/userSlice';

export default function Dashboard({navigation}) {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const fetchData = async () => {
    const res = await axios.get('https://dummyjson.com/products');
    setData(res?.data?.products);
    console.log(res.data.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View>
      <Header>İklim ısı</Header>
      <Button mode="outlined" onPress={() => dispatch(setToken(''))}>
        Logout
      </Button>
      <FlatList
        contentContainerStyle={{paddingBottom: 100}}
        data={data}
        renderItem={({item}) => <ListItem item={item} />}
        ItemSeparatorComponent={() => <View style={{marginBottom: 5}}></View>}
      />
    </View>
  );
}
