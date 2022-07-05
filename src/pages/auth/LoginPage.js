import React, {memo, useState, useCallback, useEffect} from 'react';
import {View, Image, Modal, StyleSheet} from 'react-native';
import Button from '../../components/Button/Button';
import useAuth from '../../hooks/useAuth';
import {useStateValue} from '../../provider';
import LoginModal from '../../components/LoginModal/LoginModal';
import {COLORS} from '../../utils/colors';

const LOGO_SOURCE = '../../asset/logo.png';
const LoginPage = memo(() => {
  const [isVisibleLogin, setIsVisibleLogin] = useState(false);
  const {getLogin} = useAuth();
  const {
    auth: {accessToken, loginError},
  } = useStateValue();
  const onSubmit = useCallback(
    ({username, password}) => {
      getLogin({
        username: username,
        password: password,
      });
    },
    [getLogin],
  );
  useEffect(() => {
    if (accessToken) {
      setIsVisibleLogin(false);
    }
  }, [accessToken]);
  const onCloseModal = useCallback(() => {
    setIsVisibleLogin(false);
  }, []);
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require(LOGO_SOURCE)} />
      <Button
        onPress={() => {
          setIsVisibleLogin(true);
        }}
        title="Login"
      />
      <Modal animationType="fade" transparent={true} visible={isVisibleLogin}>
        <LoginModal
          onClose={onCloseModal}
          onSubmit={onSubmit}
          error={loginError}
        />
      </Modal>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: COLORS.white,
  },
  logo: {
    width: 210,
    height: 100,
    resizeMode: 'center',
  },
});
export default LoginPage;
