import React from 'react';

import { Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';

import { AbstractScreenProps } from '../../abstract/ScreenProps';
import { RootReducer } from '../../store/rootReducer';
import { updateExercise, addExercise } from '../../store/Exercise/actions';
import { ToggleFlatList } from '../../components/FlatList';
import { generateUUID } from '../../helpers/UUID';
import { ChipListCard, TextAreaCard, TextInputCard } from '../../components/Card';
import { StackScreenProps } from '@react-navigation/stack';
import { HomeStackParamList } from '../../navigation/StackMenu/Home';
import { HomeStackScreens } from '../types';
import { Snackbar } from '../../components/Snackbar';

export interface ExerciseEditProps
  extends StackScreenProps<HomeStackParamList, HomeStackScreens.EXERCISE_EDIT>,
    AbstractScreenProps {}

export const ExerciseEdit = ({ labels }: ExerciseEditProps): JSX.Element => {
  const dispatch = useDispatch();

  const selectedExercise = useSelector((state: RootReducer) => state.exercise.selected);
  const muscleGroup = useSelector((state: RootReducer) => state.muscleGroup.list);

  const [flatListOpen, setFlatListOpen] = React.useState(false);
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [name, setName] = React.useState(selectedExercise?.name);
  const [description, setDescription] = React.useState(selectedExercise?.description);
  const [selectedMuscleGroup, setSelectedMuscleGroup] = React.useState(
    selectedExercise?.muscleGroup || [],
  );

  const handlePressMuscleGroup = (target: string) => {
    if (selectedMuscleGroup.includes(target)) {
      setSelectedMuscleGroup(selectedMuscleGroup.filter((item) => item !== target));
    } else {
      setSelectedMuscleGroup([...selectedMuscleGroup, target]);
    }
  };

  const handleCloseFlatList = () => {
    setFlatListOpen(false);
  };

  const handlePressEdit = () => {
    setFlatListOpen(true);
  };

  const handleSave = () => {
    if (selectedExercise) {
      dispatch(
        updateExercise({
          id: selectedExercise.id,
          name: name,
          description,
          muscleGroup: selectedMuscleGroup,
        }),
      );
    } else {
      dispatch(
        addExercise({
          id: generateUUID(),
          name: name,
          description,
          muscleGroup: selectedMuscleGroup,
        }),
      );

      setName('');
      setDescription('');
      setSelectedMuscleGroup([]);
      setSnackbarOpen(true);
    }
  };

  const handlePressChip = (id: string) => {
    setSelectedMuscleGroup(selectedMuscleGroup.filter((item) => item !== id));
  };

  return (
    <>
      {!flatListOpen ? (
        <>
          <ScrollView>
            <TextInputCard
              label={labels.NAME_HEADING}
              value={name}
              onChange={(value) => setName(value)}
            />

            <ChipListCard
              label={labels.MUSCLE_GROUPS_HEADING}
              items={selectedMuscleGroup.map((id) => muscleGroup[id])}
              listPlaceholder={labels.NO_MUSCLE_GROUPS_PLACEHOLDER}
              onPressEdit={handlePressEdit}
              onPressChip={handlePressChip}
            />

            <TextAreaCard
              label={labels.DESCRIPTION_HEADING}
              value={description}
              onChange={(input) => {
                setDescription(input);
              }}
            />
          </ScrollView>

          <Button disabled={!name} onPress={() => handleSave()} mode="contained">
            {labels.SAVE}
          </Button>

          <Snackbar
            message={selectedExercise ? labels.UPDATE_SUCCESS : labels.ADD_SUCCESS}
            visible={snackbarOpen}
            setVisible={setSnackbarOpen}
          />
        </>
      ) : (
        <ToggleFlatList
          label={'Muscle groups'}
          addedItems={selectedMuscleGroup}
          items={Object.keys(muscleGroup).map((id) => muscleGroup[id])}
          onPressItem={handlePressMuscleGroup}
          onClose={handleCloseFlatList}
        />
      )}
    </>
  );
};

ExerciseEdit.defaultProps = {
  labels: {
    NAME_HEADING: 'Exercise name',
    MUSCLE_GROUPS_HEADING: 'Muscle groups',
    DESCRIPTION_HEADING: 'Description',
    MUSCLE_GROUPS_BUTTON: 'Add',
    EXERCISE_NAME_PLACEHOLDER: '...',
    NO_MUSCLE_GROUPS_PLACEHOLDER: 'No muscle groups added ...',
    SAVE: 'Save',
    MANAGE_MUSCLE_GROUPS: 'Manage exercise muscle groups',
    ADD_SUCCESS: 'Successfully added a new exercise',
    UPDATE_SUCCESS: 'Successfully updated the exercise',
  },
};
