import React, {useState, useEffect} from 'react';
import {
  KeyboardAvoidingView,
  TextInput,
  Text,
  TouchableWithoutFeedback,
  Platform,
  View,
  StyleSheet,
} from 'react-native';
import {COLORS} from '../../utils/colors';
import Button from '../Button/Button';
const LoginModal = ({onClose, onSubmit, error = ''}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  useEffect(() => {
    if (password && username) {
      setIsDisabled(false);
    }
  }, [password, username]);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.keyboardContainer}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.normalText}>Username</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your username"
              onChangeText={text => {
                setUsername(text);
              }}
              value={username}
              placeholderTextColor={COLORS.silver}
            />
            <Text style={styles.normalText}>Password</Text>
            <TextInput
              style={styles.input}
              onChangeText={text => {
                setPassword(text);
              }}
              placeholder="Enter your password"
              value={password}
              placeholderTextColor={COLORS.silver}
            />
            <View style={styles.buttonsContainer}>
              <Text style={[styles.normalText, {color: COLORS.lightPink}]}>
                {error}
              </Text>
              <Button
                disabled={isDisabled}
                onPress={() => {
                  onSubmit({username: username, password: password});
                }}
                title="Login"
                style={{
                  backgroundColor: isDisabled
                    ? COLORS.gray
                    : COLORS.grayAsparagus,
                }}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  keyboardContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.transparent,
  },
  content: {
    width: '80%',
    backgroundColor: COLORS.white,
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 24,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: COLORS.silver,
    padding: 12,
  },
  normalText: {
    fontWeight: '500',
    marginVertical: 8,
    color: COLORS.darkCharcoal,
  },
  buttonsContainer: {
    marginTop: 12,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
export default LoginModal;
