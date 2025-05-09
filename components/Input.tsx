import { StyleSheet, Text, TextInput, View } from "react-native"

type Props = {
  title: string
  isPassword?: boolean
  placeholder?: string
}

const Input = ({ title, placeholder, isPassword = false }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          secureTextEntry={isPassword}
          placeholder={placeholder}
        />
      </View>
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginVertical: 10,
  },
  title: {
    marginBottom: 5,
    fontWeight: "500",
    fontSize: 16,
  },
  inputWrapper: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 999,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
  },
  input: {
    fontSize: 16,
  }
})
