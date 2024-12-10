import { useLocalSearchParams } from "expo-router";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
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
      let newTask = await postRequest(id, userTitle, userNascimento);
      setTask(newTask);

      setUserTitle("");
      setUserNascimento("");

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
        const resp = await postRequest(locacao);
        setuser(resp)

      } catch (ex) {
        console.error(ex)
      }
    };

    fetchData();

  }, [])








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
    <View style={style.container}>
      <Text>ID do Livro: {id}</Text>
      <Text> Titulo: {livro.titulo} </Text>
      <Text> Autor: {livro.autor} </Text>
      <Text> Ano de Lançamento: {livro.ano} </Text>
      <Text> Quantidade disponível: {livro.quantidade} </Text>
      <Text>Faça o cadastro para alugar o livro</Text>


      <TextInput
        style={styles.input}
        placeholder='Nome do Usuário'
        value={userTitle}
        onChangeText={setUserTitle}
      />

      {
        alert1 ? <Text style={styles.errorText}>
          Necessario informar o nome!
        </Text>
          : <></>
      }



      <TextInput
        style={styles.input}
        placeholder='Ano de Nascimento'
        value={userNascimento}
        onChangeText={setUserNascimento}
      />

      {
        alert2 ? <Text style={styles.errorText}>
          Necessario informar o ano de nascimento!
        </Text>
          : <></>
      }





      <View style={styles.buttonContainer}>
        <Button
          title='Salvar'
          style={styles.buttonblue}
          color='deepskyblue'
          onPress={() => onMessage()} />
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
  }
})



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
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

});