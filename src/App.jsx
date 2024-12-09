import { useState, useEffect } from 'react';
import * as petService from './services/petService';

import PetList from './components/PetList';
import PetDetail from './components/PetDetail';
import PetForm from './components/PetForm';

const App = () => {
  const [petList, setPetList] = useState([]);
  const [selected, setSelected] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const pets = await petService.index();
        // Don't forget the pass the error object to the new Error
        if (pets.error) {
          throw new Error(pets.error);
        }
        setPetList(pets);
      } catch (error) {
        // Log the error object
        console.log(error);
      }
    };
    fetchPets();
  }, []);

  const updateSelected = (pet) => {
    setSelected(pet)
  };

  const handleFormView = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <>
      <PetList
        petList={petList}
        updateSelected={updateSelected}
        handleFormView={handleFormView}
        isFormOpen={isFormOpen}
      />
      {isFormOpen ? (
        <PetForm />
      ) : (
        <PetDetail selected={selected} />
      )}
    </>
  );
};

export default App

