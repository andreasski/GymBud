import { Toast } from 'native-base';

//Todo: Add more optionals aswell, probably make it generic aswell, taking a type instead
export const successToast = (message: string) => {
  Toast.show({
    text: message,
    buttonText: 'Okay',
    type: 'success',
    duration: 3000,
  });
};
