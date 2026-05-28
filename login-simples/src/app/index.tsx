import {
  View,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";

import { useState } from "react";

export default function Home() {

  const [email, setEmail] = useState("");

  const [senha, setSenha] = useState("");

  const [mensagem, setMensagem] = useState("");

  function entrar() {

    if(email === "" || senha === "") {

      setMensagem("Preencha todos os campos");

      return;

    }

    if(senha.length < 6) {

      setMensagem("Senha muito curta");

      return;

    }

    setMensagem("Login realizado");

  }

  return (

    <View
      style={{
        flex:1,
        justifyContent:"center",
        padding:20,
        backgroundColor:"black"
      }}
    >

      <TextInput

        placeholder="Digite seu email"

        placeholderTextColor="gray"

        value={email}

        onChangeText={setEmail}

        style={{
          borderWidth:1,
          borderColor:"white",
          color:"white",
          padding:15,
          borderRadius:10,
          marginBottom:15
        }}

      />

      <TextInput

        placeholder="Digite sua senha"

        placeholderTextColor="gray"

        secureTextEntry={true}

        value={senha}

        onChangeText={setSenha}

        style={{
          borderWidth:1,
          borderColor:"white",
          color:"white",
          padding:15,
          borderRadius:10,
          marginBottom:20
        }}

      />

      <TouchableOpacity

        onPress={entrar}

        style={{
          backgroundColor:"blue",
          padding:15,
          borderRadius:10,
          alignItems:"center"
        }}

      >

        <Text
          style={{
            color:"white",
            fontSize:18
          }}
        >
          Entrar
        </Text>

      </TouchableOpacity>

      <Text
        style={{
          color:"white",
          fontSize:18,
          marginTop:20,
          textAlign:"center"
        }}
      >
        {mensagem}
      </Text>

    </View>

  );
}