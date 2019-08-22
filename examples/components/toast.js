import React, { forwardRef, useState, useImperativeHandle } from "react";
import { StyleSheet, Text, View } from "react-native";

function Toast(props, ref) {
  const { isVisible = false, duration = 1500 } = props;
  const [isToastVisible, setIsToastVisible] = useState(isVisible ? 1 : 0);
  const [isToastDisplay, setIsToastDisplay] = useState("none");
  const [content, setContent] = useState(null);

  useImperativeHandle(ref, () => ({
    show: content => {
      setContent(content);
      setIsToastVisible(1);
      setIsToastDisplay("flex");

      setTimeout(() => {
        setIsToastVisible(0);
        setIsToastDisplay("none");
        setContent(null);
      }, duration);
    },
    showError: text => {
      setContent(
        <View
          style={{ backgroundColor: "#f00", padding: 10, borderRadius: "10px" }}
        >
          <Text style={{ color: "#fff", fontSize: 20 }}>{text}</Text>
        </View>
      );
      setIsToastVisible(1);
      setIsToastDisplay("flex");

      setTimeout(() => {
        setIsToastVisible(0);
        setIsToastDisplay("none");
        setContent(null);
      }, duration);
    }
  }));

  return (
    <View
      style={{
        opacity: isToastVisible,
        display: isToastDisplay,
        position: "absolute",
        height: "100%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      {content}
    </View>
  );
}

const toastTest = forwardRef(Toast);
export default toastTest;
