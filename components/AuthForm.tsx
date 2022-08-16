import React from 'react';
import { Scaffold, TextInput } from 'lumine';

const AuthForm = (props: any) => {
    return <Scaffold.View>
        <TextInput value={props.email} onChangeText={props.setEmail} placeholder='Email' keyboardType='email-address' autoCapitalize='none' autoCorrect={false} />
        <TextInput value={props.password} onChangeText={props.setPassword} placeholder='Password' secureTextEntry />
    </Scaffold.View>
}

export default AuthForm