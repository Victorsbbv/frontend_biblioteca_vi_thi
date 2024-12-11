import { router, useLocalSearchParams } from "expo-router";
import { Button, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useEffect, useState } from "react";
import { getRequestid, postRequest } from "../../API/Api";

export default function BooksPage() {
  const { id } = useLocalSearchParams();
  const [livro, setlivro] = useState({});
  const [locacao, setuser] = useState({});
  const [userTitle, setUserTitle] = useState("");
  const [alert1, setAlert1] = useState(false);
  const [userNascimento, setUserNascimento] = useState("");
  const [alert2, setAlert2] = useState(false);
  const [task, setTask] = useState([]);




  const onMessage = async () => {
    setAlert1(false);
    setAlert2(false);

    if (userTitle !== "" && userNascimento !== "") {
      let emprestimo = await postRequest(id, userTitle, userNascimento);
      setlivro(emprestimo)
      setUserTitle("");
      setUserNascimento("");
      livro.quantidade - 1;

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
    <View>
      <View style={style.viewBack}>
        <Pressable style={style.buttonvoltar} onPress={() => {
          router.push({
            pathname: "/"
          })
        }}>
          <Text >VOLTAR</Text>
        </Pressable>

      </View>

      <View style={style.container}>
        <Text>ID do Livro: {id}</Text>
        <Text> Titulo: {livro.titulo} </Text>
        <Text> Autor: {livro.autor} </Text>
        <Text> Ano de Lançamento: {livro.ano} </Text>
        <Text> Quantidade disponível: {livro.quantidade} </Text>
        <Text>Faça o cadastro para alugar o livro</Text>


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





        <View style={style.buttonContainer}>
          <Button
            title='Salvar'
            style={style.buttonblue}
            color='deepskyblue'
            onPress={() => onMessage()} />
        </View>
      </View>
    </View>



  )
}




const style = StyleSheet.create({
  container: {
    flex: 1,
    backroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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
    borderRadius: 8
  },

  buttonblue: {
    backgroundColor: 'deepskyblue',
    borderRadius: 12
  },

  errorText: {
    color: "red",
    fontSize: 12,
    fontStyle: "italic"
  },
  viewBack:{
    height: "2rem",
    width: "4rem"
  },
  buttonvoltar: {
    borderWidth: 3,
    borderColor: 'fuchsia',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: 'deepskyblue',
    marginBottom: 16,
    fontStyle: "italic",
    color: "white"
  },

});