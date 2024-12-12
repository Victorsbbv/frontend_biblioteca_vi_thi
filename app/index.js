import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import { getRequest } from '../API/Api';
import { router } from 'expo-router';



export default function Page() {
  const [livro, setLivro] = useState([]);
  
  useEffect(() => {
        const fetchData = async() => {
          try {
            const resp = await getRequest();
            setLivro(resp)
            
          } catch (ex) {
            console.error(ex)
          }
        };
    
        fetchData();
    
      }, [])


  return(
    <ScrollView>
    <View style={styles.container}>
    <Text style={styles.tituloNeon}> BIBLIOTECA NEON </Text>
    <StatusBar style="auto" />
    {livro.map((item, index) =>(
      <Pressable style={styles.tituloNeon} onPress={() => {
        router.push({
          pathname: "books/[id]",
          params: {id: item.id}
        })
      }}>
        <Text>{item.titulo}</Text>
      </Pressable>
    ))}

      </View>
      </ScrollView>
  );

};

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: 'darkblue',
     alignItems: "center",
    justifyContent: "center",
     padding: 16,
   },

   tituloNeon: {
    borderWidth: 3,
    borderColor: 'fuchsia',
    borderRadius: 8,
    padding: 12,
    backgroundColor: 'deepskyblue',
    marginBottom: 16,
    color: "white",
    fontSize: 25,
    fontStyle: "bold"
  },

  tituloslivros: {
    borderWidth: 3,
    borderColor: 'fuchsia',
    borderRadius: 8,
    padding: 12,
    backgroundColor: 'deepskyblue',
    marginBottom: 16,
    color: "white"
  },


 });
