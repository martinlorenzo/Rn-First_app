import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, SafeAreaView, ScrollView, FlatList} from 'react-native';
import GoalItem from './Components/GoalItem';
import GoalInput from './Components/GoalInput';


const styles = StyleSheet.create({

  screen:{
    padding: 80,
  },

  newGoalButton:{
    borderRadius:100,
    overflow:'hidden'
  }
});
export default function App() {

  const [courseGoals, setCourseGoals] = useState([]); /*Para guardar los goals en un array */
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      {id: Math.random().toString(), value: goalTitle}
    ]); // this refreshes the existing array with old + new
    setIsAddMode(false);
  }

  const removeGoalHandler = goalId => {

    setCourseGoals (currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    });
  };

  const cancelNewGoalHandler = () => {
      setIsAddMode(false);
  };

  
  return (
    <View style={styles.screen}>
      <View style={styles.newGoalButton} >
        <Button title="Add New Goal" onPress={() => setIsAddMode(true)}/>
      </View>
      <GoalInput 
        visible={isAddMode} 
        onAddGoal={addGoalHandler} 
        onCancel={cancelNewGoalHandler}
      />
      <FlatList
        keyExtractor= {(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem 
            title={itemData.item.value}
            id={itemData.item.id}
            onDelete={removeGoalHandler}
          />
        )} 
      />
      <StatusBar style="auto" />
    </View>
    
  );
}