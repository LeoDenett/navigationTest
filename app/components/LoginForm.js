import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

//Form Validation
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {isEmpty} from 'lodash';
import firebase from '../../Firebase';

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required(),
  password: yup.string().min(6, "Password min 6 characteres").max(20, "Password max 20 characteres").required(),
});

//Form Config
const LoginForm = () => {
  const { register, setValue, handleSubmit, control, reset, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
    console.log(data);
    reset();
  };

  const onChange = arg => {
    return {
      value: arg.nativeEvent.text,
    };
  };

  console.log('errors', errors);

  //Return Response
  return (
    <View style={styles.container}>
      
      <Controller
        name="email"
        control={control}
        render={({field: { onChange, email }}) => (
          <View>
            <TextInput
              style={styles.input}
              onChangeText={email => onChange(email)}
              value={email}
              placeholder="Email"
            />
            <Text style={styles.textError}>{errors.email?.message}</Text>
          </View>
        )}
      />

      <Controller
        name="password"
        control={control}
        render={({field: { onChange, password }}) => (
          <View>
            <TextInput
              style={styles.input}
              onChangeText={password => onChange(password)}
              value={password}
              placeholder="Password"
              secureTextEntry={true}
            />
            <Text style={styles.textError}>{errors.password?.message}</Text>
          </View>
        )}
      />

      <TouchableOpacity
        disable={isEmpty(errors) ? false : true}
        onPress={handleSubmit(onSubmit)}
      >
        <Text style={[styles.button, styles.text, {backgroundColor: isEmpty(errors) ? "rgb(146, 43, 33 )" : '#999999'}]}>Sign in</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginForm

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
    backgroundColor: '#fff',
    margin: 16,
  },
  button: {
    padding: 10,
    backgroundColor: "rgb(146, 43, 33 )",
    borderRadius: 4,
    marginTop: 8,
  },
  input: {
    outLine: "none",
    borderBottomWidth: 1,
    padding: 10,
    borderBottomColor: '#999999',
    fontSize: 18,
    fontWeight: "bold",
    color: "rgb(146, 43, 33 )",
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  textError: {
    color: "red",
    marginBottom: 16,
  },
});
