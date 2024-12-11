import { router, useLocalSearchParams } from "expo-router";
import { Button, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { useEffect, useState } from "react";
import { getRequestid, postRequest } from "../../API/Api";

export default function BooksPage() {
  const { id } = useLocalSearchParams();
  const [livro, setlivro] = useState({});
  const [userTitle, setUserTitle] = useState("");
  const [alert1, setAlert1] = useState(false);
  const [userNascimento, setUserNascimento] = useState("");
  const [alert2, setAlert2] = useState(false);
  const [alert3, setAlert3] = useState(false);



  const onMessage = async () => {
    setAlert1(false);
    setAlert2(false);
    setAlert3(false);

    if (userTitle !== "" && userNascimento !== "") {
      let emprestimo = await postRequest(id, userTitle, userNascimento);
      setlivro(emprestimo)
      setUserTitle("");
      setUserNascimento("");
      livro.quantidade - 1;
      setAlert3(true)
      setTimeout(() => {
        setAlert3(false);
      }, 4000);

    } else {

      if (userTitle == "") {
        setAlert1(true)
        setTimeout(() => {
          setAlert1(false);
        }, 4000);
      }

      if (userNascimento == "") {
        setAlert2(true)
        setTimeout(() => {
          setAlert2(false)
        }, 4000);
      }

    }

  }







  useEffect(() => {
    const fetchData = async () => {
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
    <ScrollView>
    <View>
      <View style={style.viewBack}>
        <Pressable style={style.buttonvoltar} onPress={() => {
          router.push({
            pathname: "/"
          })
        }}>
          <Text style={{color: "white"}}>VOLTAR</Text>
        </Pressable>

      </View>

      <View style={style.container}>
        <Text style={style.containerlivros}>ID do Livro: {id} {"\n"} 
         Titulo: {livro.titulo} {"\n"} 
         Autor: {livro.autor} {"\n"} 
         Ano de Lançamento: {livro.ano} {"\n"} 
         Quantidade disponível: {livro.quantidade} {"\n"} 
         Faça o cadastro para alugar o livro</Text>


        <TextInput
          style={style.input}
          placeholder='Nome do Usuário'
          value={userTitle}
          onChangeText={setUserTitle}
        />

        {
          alert1 ? <Text style={style.errorText}>
            Necessario informar o nome!
          </Text>
            : <></>
        }



        <TextInput
          style={style.input}
          placeholder='Ano de Nascimento'
          value={userNascimento}
          onChangeText={setUserNascimento}
        />

        {
          alert2 ? <Text style={style.errorText}>
            Necessario informar o ano de nascimento!
          </Text>
            : <></>
        }

{
        alert3 ? <Text style={style.alugaText}>
          Livro Alugado!!!
        </Text>
          : <></>
      }





        <View style={style.buttonblue}>
          <Button
            title='Salvar'
            color='deepskyblue'
            onPress={() => onMessage()} />
        </View>
      </View>
    </View>


    </ScrollView>
  )
}




const style = StyleSheet.create({
  container: {
    flex: 1,
    backroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },

  containerlivros: {
    borderWidth: 3,
    borderColor: 'fuchsia',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: 'lightskyblue',
    marginBottom: 16
  },

  input: {
    borderWidth: 3,
    borderColor: 'fuchsia',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: 'lightskyblue',
    marginBottom: 16
  },

  textArea: {
    height: 150,
    textAlignVertical: 'top'
  },

  buttonContainer: {
    marginTop: 16,
    borderColor: 'fuchsia',
    borderWidth: 3,
    borderRadius: 8,
    height: "2rem",
    width: "5rem"
  },

  buttonblue: {
    backgroundColor: 'deepskyblue',
    borderRadius: 12,
    borderColor: 'fuchsia',
    borderWidth: 3,
    padding: 5
  },

  errorText: {
    color: "red",
    fontSize: 12,
    fontStyle: "italic"
  },


  alugaText: {
    color: "deepskyblue",
    fontSize: 12,
    fontStyle: "italic"
  },

  viewBack:{
    height: "2rem",
    width: "5rem"
  },
  buttonvoltar: {
    borderWidth: 3,
    borderColor: 'fuchsia',
    borderRadius: 8,
    padding: 12,
    backgroundColor: 'deepskyblue',
    marginBottom: 16,
    color: "white"
  },

});