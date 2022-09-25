import React from "react";
import { SearchBar, ListItem, Avatar, Icon } from 'react-native-elements';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  Button,
  Alert,
  ScrollView,
  Pressable,
  View,
} from "react-native";
import axios from "axios";
import { useEffect, useState } from "react";


const DataPage = ({ navigation }) => {

  const [search, setSearch] = useState('');
  const updateSearch = (search) => {
    setSearch({ search });
  };

  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchUser = async () => {
      const url = "https://vkcbackend.herokuapp.com/api/Data";
      const response = await axios.get(url);
      setData(response.data);
    };
    fetchUser();
  }, []);
  console.log(search);
  return (
    <ScrollView
      style={{ backgroundColor: '#f0f8ff' }}
    >

      <SearchBar
        containerStyle={{
          backgroundColor: "#f0f8ff",
          borderBottomColor: 'transparent',
          borderTopColor: 'transparent'
        }}
        inputContainerStyle={{ backgroundColor: '#fff', border: 'none', }}
        placeholder="Search For Place"
        onChangeText={updateSearch}
        value={search}

      />
      {data.map((d, index) =>

      (

        <>
          <ListItem bottomDivider onPress={() => {
            navigation.navigate("SingleData", {
              Data: d
            })
          }}>
            {/* <Avatar source={{ uri: l.avatar_url }} /> */}
            <ListItem.Content>
              <ListItem.Title>{d.Question1}</ListItem.Title>
              {/* <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle> */}
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
          {/* <Text key={index + 1}>{d.Question1}</Text> */}
        </>

      ))}

    </ScrollView>
  );
};

export default DataPage;
