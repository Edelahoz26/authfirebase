import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";

// Función signInWithEmailAndPassword y auth desde el módulo de Firebase
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

const SignUpScreen = (props) => {
  // Variable de estado para almacenar el correo electrónico, la contraseña y los mensajes de error
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

  //Requerimientos de campos para el formData.password
  const [requierements, setRequierements] = useState({
    mayuscula: false,
    minuscula: false,
    caracterEspecial: false,
    numero: false,
    length: false,
  });

  // Método de actualización para ambas variables de estado
  const handleFormChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const singUpUserWithEmailAndPassword = async () => {
    if (
      !requierements.mayuscula ||
      !requierements.minuscula ||
      !requierements.numero ||
      !requierements.caracterEspecial ||
      !requierements.length
    ) {
      setError("La contraseña no cumple con los requisitos.");
      return;
    }
    try {
      // Intentar iniciar sesión con el correo electrónico y la contraseña proporcionados
      await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      //Campos vacios
      setFormData({
        email: "",
        contraseña: "",
      });
      setError(null);

      //Mensaje exito y navegar a la pantalla de inicio
      Alert.alert("Usuario Creado", "success");
      props.navigation.navigate("Login");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;

      switch (errorCode) {
        case "auth/invalid-email":
          setError(
            "La dirección de correo electrónico proporcionada no es válida."
          );
          break;
        case "auth/email-already-in-use":
          setError("Esta dirección de correo electrónico ya está en uso.");
          break;
        case "auth/missing-password":
          setError(
            "La contraseña es requerida. Por favor, proporciona una contraseña y vuelve a intentarlo."
          );
          break;
        case "auth/weak-password":
          setError("La palabra debe tener al menos 6 caracteres.");
          break;

        default:
          setError(errorMessage);
          break;
      }
    }
  };
  const requierementsText = (text) => {
    handleFormChange("password", text);
    setRequierements({
      mayuscula: /[A-Z]/.test(text),
      minuscula: /[a-z]/.test(text),
      numero: /\d/.test(text),
      caracterEspecial: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(text),
      length: text.length >= 8,
    });
  };
  console.log(requierements);
  return (
    <View style={styles.containerSignUp}>
      <Image
        source={require("../../assets/nativescript.png")}
        style={styles.logoLogin}
      />
      <Text style={styles.titleLogin}>Create Account</Text>
      <TextInput
        placeholder="Email"
        name="email"
        value={formData.email}
        onChangeText={(text) => handleFormChange("email", text)}
        style={styles.inputLogin}
      />
      <TextInput
        placeholder="Contraseña"
        name="password"
        value={formData.password}
        onChangeText={(text) => requierementsText(text)}
        style={styles.inputLogin}
        secureTextEntry
      />
      {error && <Text style={styles.error}>{error}</Text>}
      <TouchableOpacity
        onPress={singUpUserWithEmailAndPassword}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>
      <View style={styles.titleRedirectContainer}>
        <Text style={styles.titleQuestion}>¿Ya tienes una cuenta?</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
          <Text style={styles.titleRedirect}>Iniciar sesión</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.passwordRequirements}>
        {formData.password && (
          <>
            <Text style={styles.passwordRequirement}>
              {requierements.mayuscula
                ? "✅ Incluye mayúscula"
                : "❌ Falta mayúscula"}
            </Text>
            <Text style={styles.passwordRequirement}>
              {requierements.minuscula
                ? "✅ Incluye minúscula"
                : "❌ Falta minúscula"}
            </Text>
            <Text style={styles.passwordRequirement}>
              {requierements.numero ? "✅ Incluye número" : "❌ Falta número"}
            </Text>
            <Text style={styles.passwordRequirement}>
              {requierements.caracterEspecial
                ? "✅ Incluye caracter especial"
                : "❌ Falta caracter especial"}
            </Text>
            <Text style={styles.passwordRequirement}>
              {requierements.length
                ? "✅ Tiene al menos 8 caracteres"
                : "❌ No cumple con la longitud mínima"}
            </Text>
          </>
        )}
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  containerSignUp: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    top: -67,
  },
  logoLogin: {
    width: 200,
    height: 200,
  },
  titleLogin: {
    color: "#000",
    fontSize: 30,
    fontWeight: "700",
    justifyContent: "center",
  },
  inputLogin: {
    width: "80%",
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  button: {
    backgroundColor: "#000",
    width: "60%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 18,
    color: "#000",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },

  titleRedirectContainer: {
    flexDirection: "row",
    gap: 7,
    marginTop: 12,
  },
  titleQuestion: {
    color: "#666",
    fontSize: 16,
  },
  titleRedirect: {
    color: "#000",
    fontSize: 16,
    fontWeight: "700",
  },
  error: {
    color: "red",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 14,
    textAlign: "center",
    marginTop: 10,
    maxWidth: 300,
    marginHorizontal: 20,
  },
  passwordRequirements: {
    width: "80%",
    marginTop: 15,
    marginBottom: 20,
    alignItems: "flex-start",
    top: 30,
  },

  passwordRequirement: {
    fontSize: 14,
    marginBottom: 5,
    color: "#666",
  },
});
