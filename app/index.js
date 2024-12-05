import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
//import { getRequest, getRequestid, postRequest} from './Api';
import { router } from 'expo-router';


export default function Page() {
  const example = [{id:1}, {id: 2}, {id: 3}, {id: 4}]
  
  return(
    <View style={styles.container}>
    <Text> Open up App.js to start working on your app</Text>
    <StatusBar style="auto" />
    {example.map((item, index) =>(
      <Pressable onPress={() => {
        router.push({
          pathname: "books/[id]",
          params: {id: item.id}
        })
      }}>
        <Text>Go to page book {item.id}</Text>
      </Pressable>
    ))}
      </View>
  );

};
  
  
  
  
  
  
  
  
  
  
  
  
  
  
//   const [taskTitle, setTaskTitle] = useState("");
//   const [taskDescription, setTaskDescription] = useState("");
//   const [task, setTask] = useState([]);
//   const [alert1, setAlert1] = useState(false);
//   const [alert2, setAlert2] = useState(false);


//   const onMessage = async () => {
//     setAlert1(false);
//     setAlert2(false);

//     if (taskTitle !== "" && taskDescription.length >= 10) {
//       let newTask = await postRequest(taskTitle, taskDescription);
//       setTask(newTask);

//       setTaskTitle("");
//       setTaskDescription("");

//     } else {

//       if (!taskTitle.trim()) {
//         setAlert1(true)
//         setTimeout(() => {
//           setAlert1(false);
//         }, 4000);
//       }

//       if (taskDescription.length < 10) {
//         setAlert2(true)
//         setTimeout(() => {
//           setAlert2(false)
//         }, 4000);
//       }

//     }

//   }

//   const deleteTask = (index, id) => {
//     const updateTasks = [...task ];
//     updateTasks.splice(index, 1);
//     deleteRequest(id);
//     setTask(updateTasks);
//   }

//   useEffect(() => {
//     const fetchData = async() => {
//       try {
//         const resp = await getRequest();
//         setTask(resp)
        
//       } catch (ex) {
//         console.error(ex)
//       }
//     };

//     fetchData();

//   }, [])

//   return (

//     <View style={styles.container}>

//       <Text style={styles.label}>App de Tarefas</Text>
//       <TextInput
//         style={styles.input}
//         placeholder='Nome da Tarefa'
//         value={taskTitle}
//         onChangeText={setTaskTitle}
//       />

//       {
//         alert1 ? <Text style={styles.errorText}>
//           Necessario informar o titulo
//         </Text>
//           : <></>
//       }

//       <Text style={styles.label}>Descrição da Tarefa:</Text>
//       <TextInput
//         style={[styles.input, styles.textArea]}
//         placeholder='Descrição da tarefa'
//         multiline
//         value={taskDescription}
//         onChangeText={setTaskDescription}
//       />

//       {
//         alert2 ? <Text style={styles.errorText}>
//           Necessario mínimo 10 caractareres
//         </Text>
//           : <></>
//       }



//       <View style={styles.buttonContainer}>
//         <Button
//           title='Salvar'
//           style={styles.buttonblue}
//           color='deepskyblue'
//           onPress={() => onMessage()} />
//       </View>

//       {task.length > 0 ? <View style={styles.separator} /> : <></>}

//       <ScrollView>
//         {
//           task.map((item, index) => (
//             <Taskcard
//             key={item.id}
//               title={item.title}
//               description={item.description}
//               status={"Done"}
//               onClick={() => {
//                 deleteTask(index, item.id);
//               }}
//             />
//           ))
//         }

//       </ScrollView>

//     </View>
//   );

// }

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#fff',
     padding: 16,
   },

  //  label: {
  //    fontSize: 16,
  //    fontWeight: 'bold',
  //    marginBottom: 8
  //  },

  //  input: {
  //    borderWidth: 3,
  //    borderColor: 'fuchsia',
  //    borderRadius: 8,
  //    padding: 12,
  //    fontSize: 16,
  //    backgroundColor: 'lightskyblue',
  //    marginBottom: 16
  //  },

  //  textArea: {
  //    height: 150,
  //    textAlignVertical: 'top'
  //  },

  //  buttonContainer: {
  //    marginTop: 16,
  //    borderColor: 'fuchsia',
  //    borderWidth: 3,
  //    borderRadius: 8
  //  },

  //  buttonblue: {
  //    backgroundColor: 'deepskyblue',
  //    borderRadius: 12
  //  },

  //  separator: {
  //    marginTop: 16,
  //    width: "100%",
  //    heigth: 1,
  //    backgroundColor: "#222"
  //  },

  //  errorText: {
  //    color: "red",
  //    fontSize: 12,
  //    fontStyle: "italic"
  //  },

 });
