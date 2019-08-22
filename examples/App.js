import React, { useRef } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Toast from "./components/toast";

export default function App() {
  const toastRef = useRef();

  const toastComponente = () => {
    toastRef.current.showError("QR Invalido");
  };

  return (
    <View style={styles.container}>
      <Text>React Native Toast Pro</Text>
      <Button title="Test Toast Componente" onPress={() => toastComponente()} />
      <Toast
        ref={toastRef}
        isVisible={true}
        duration={3500}
        position="center"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
