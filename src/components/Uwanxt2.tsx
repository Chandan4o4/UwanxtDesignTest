import {StyleSheet, Text, View} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import CustomButton from '../subComponent/CustomButton';

export function Uwanxt2() {
  return (
    <>
      <View style={styles.container}>
        <SimpleLineIcons name="check" size={75} color="#FFB514" />
        <Text style={styles.mediumText}>Configuration Done!</Text>
        <Text style={styles.baseText}>Tap on Done</Text>
      </View>
      <CustomButton
        title="Done"
        onPress={() => {
          console.log('Button Pressed');
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222222',
  },
  mediumText: {
    fontSize: 22,
    color: '#FFB514',
    marginTop: 20,
  },
  baseText: {
    fontSize: 18,
    color: 'white',
    marginTop: 10,
  },
});
