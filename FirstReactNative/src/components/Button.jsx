import { StyleSheet, View, Pressable, Text, TouchableOpacity } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Button({ text, opt, height, width, backgroundColor, onPress }) {
  if (opt) {
    return (
      <View
        style={[styles.buttonContainer, { borderWidth: 4, borderColor: "#ffd33d", borderRadius: 18, height: height, width: width }]}
      >
        <Pressable
          style={[styles.button, { backgroundColor: "#fff" }]}
          onPress={onPress}
        >
          <FontAwesome
            name="picture-o"
            size={18}
            color="#25292e"
            style={styles.buttonIcon}
          />
          <Text style={styles.buttonText}>{text}</Text>
        </Pressable>
      </View>
    );
  }
  return (
    <View style={[styles.buttonContainer, { height: height, width: width }]}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: backgroundColor}]}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    padding: 3,
  },
  button: {
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    height: '100%',
    justifyContent: 'center',
    width: '100%',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonText: {
    fontSize: 16,
  },
});