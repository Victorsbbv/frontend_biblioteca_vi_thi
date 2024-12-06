import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { getRequestid } from "../../API/Api";

export default function BooksPage() {
    const { id } = useLocalSearchParams();
    const [livro, setlivro] = useState({});
  
  useEffect(() => {
        const fetchData = async() => {
          try {
            const resp = await getRequestid(id);
            setlivro(resp)
            
          } catch (ex) {
            console.error(ex)
          }
        };
    
        fetchData();
    
      }, [])

    return (
        <View style ={style.container}>
            <Text>ID do Livro: {id}</Text>
            <Text> Titulo: {livro.titulo} </Text>
            <Text> Autor: {livro.autor} </Text>
            <Text> Ano de Lançamento: {livro.ano} </Text>
            <Text> Quantidade disponível: {livro.quantidade} </Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    }
})