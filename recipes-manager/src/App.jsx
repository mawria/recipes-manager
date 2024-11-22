import { useRef, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Recipes from './pages/Recipes';
import Home from './pages/Home';
import Create from './pages/Create';
import Navbar from './pages/Navbar';

function App() {
  const titleRef = useRef();
  const ingredientsRef = useRef();
  const instructionsRef = useRef();
  const cookingTimeRef = useRef();
  const typeRef = useRef(); 

  const [recipes, setRecipes] = useState([]);
  const [filter, setFilter] = useState("all"); 

  useEffect(() => {
    const savedRecipes = localStorage.getItem('recipes');
    if (savedRecipes) {
      setRecipes(JSON.parse(savedRecipes));
    }
  }, []);

  useEffect(() => {
    if (recipes.length > 0) {
      localStorage.setItem('recipes', JSON.stringify(recipes));
    }
  }, [recipes]);

  const addRecipe = () => {
    const newTitle = titleRef.current.value.trim();
    const newIngredients = ingredientsRef.current.value.trim();
    const newDescription = instructionsRef.current.value.trim();
    const newCookingTime = cookingTimeRef.current.value.trim();
    const newType = typeRef.current.value;

    if (newTitle && newIngredients && newDescription && newCookingTime && newType) {
      const newRecipe = {
        title: newTitle,
        ingredients: newIngredients,
        description: newDescription,
        cookingTime: newCookingTime,
        type: newType,
      };

      setRecipes((currentRecipes) => [...currentRecipes, newRecipe]);
      titleRef.current.value = '';
      ingredientsRef.current.value = '';
      instructionsRef.current.value = '';
      cookingTimeRef.current.value = '';
      typeRef.current.value = '';
    } else {
      alert('Please fill in all fields');
    }
  };

  const deleteRecipe = (index) => {
    setRecipes((currentRecipes) => {
      const updatedRecipes = currentRecipes.filter((_, i) => i !== index);
      localStorage.setItem('recipes', JSON.stringify(updatedRecipes));
      return updatedRecipes;
    });
  };

  const updateRecipe = (index, updatedRecipe) => {
    setRecipes((currentRecipes) => {
      const updatedRecipes = [...currentRecipes];
      updatedRecipes[index] = updatedRecipe;
      localStorage.setItem('recipes', JSON.stringify(updatedRecipes));
      return updatedRecipes;
    });
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/recipes" 
          element={
            <Recipes 
              recipes={recipes} 
              filter={filter}
              setFilter={setFilter}
              onDeleteButton={deleteRecipe}
              onUpdateRecipe={updateRecipe}
            />
          } 
        />
        <Route 
          path="/create" 
          element={
            <Create 
              onAddRecipe={addRecipe}
              titleRef={titleRef}
              ingredientsRef={ingredientsRef}
              instructionsRef={instructionsRef}
              cookingTimeRef={cookingTimeRef}
              typeRef={typeRef}
            />
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
