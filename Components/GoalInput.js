import React , {useState}from 'react';
import {View, Button, TextInput, StyleSheet, Modal} from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState(''); /*Para poder usar los goals como quiera*/

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                
                    <TextInput 
                        style={styles.input} 
                        placeholder="Add new Goal"
                        onChangeText = {goalInputHandler}
                        value = {enteredGoal}
                    />

                <View style={styles.buttonContainer}>
                    <View style={styles.inputButton}>
                        <Button title="Add" onPress={addGoalHandler} />
                    </View>
                    <View style={styles.inputButton}>
                        <Button title="Cancel" color="red" onPress={props.onCancel}/>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        },
    input:{
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10
        },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width:'60%'
    },
    inputButton:{
        width:' 40%',
        borderRadius: 100,
        overflow:'hidden'
    },
    newGoalInput:{
        borderRadius: 100,
        overflow:'hidden' 
    }

});

export default GoalInput;