import React, { forwardRef, useState, useImperativeHandle } from "react";
import { StyleSheet, Text, View } from "react-native";

function Toast(props, ref) {
  const { isVisible, time } = props;
  const [isToastVisible, setIsToastVisible] = useState(isVisible ? 1 : 0);
  const [isToastDisplay, setIsToastDisplay] = useState("none");

  console.log(props.children);

  useImperativeHandle(ref, () => ({
    show: () => {
      setIsToastVisible(1);
      setIsToastDisplay("flex");

      setTimeout(() => {
        setIsToastVisible(0);
        setIsToastDisplay("none");
      }, time);
    }
  }));

  return (
    <View
      style={{
        opacity: isToastVisible,
        display: isToastDisplay,
        position: "absolute"
      }}
    >
      {props.children}
    </View>
  );
}

const toastTest = forwardRef(Toast);
export default toastTest;

const styles = StyleSheet.create({
  toastContainer: {
    position: "absolute"
  }
});
