import React, { useState, forwardRef, useImperativeHandle } from "react";
import { Text, View } from "react-native";

function Toast(props, ref) {
  const { isVisible = false, duration = 1500, position = "center" } = props;
  const positionToast =
    position == "top"
      ? "flex-start"
      : position == "bottom"
      ? "flex-end"
      : "center";
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
          style={{
            backgroundColor: "#f00",
            padding: 10,
            borderRadius: "10px"
          }}
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
        justifyContent: positionToast,
        alignItems: "center"
      }}
    >
      {content}
    </View>
  );
}

const toastTest = forwardRef(Toast);
export default toastTest;
