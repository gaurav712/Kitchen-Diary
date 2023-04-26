import {useEffect, useState} from 'react';
import {Keyboard} from 'react-native';

export const useKeyboard = () => {
  const [keyboardIsVisible, setKeyboardIsVisible] = useState(false);

  const hideKeyboard = () => {
    Keyboard.dismiss();
  };

  useEffect(() => {
    const subscriptions = [
      Keyboard.addListener('keyboardDidShow', () => setKeyboardIsVisible(true)),
      Keyboard.addListener('keyboardDidHide', () =>
        setKeyboardIsVisible(false),
      ),
    ];

    return () => {
      subscriptions.forEach(subscription => subscription.remove());
    };
  }, []);

  return {
    keyboardIsVisible,
    hideKeyboard,
  };
};
