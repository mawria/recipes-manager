import { useState } from "react";

const Recipes = ({ recipes, filter, setFilter, onDeleteButton, onUpdateRecipe }) => {
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingRecipe, setEditingRecipe] = useState(null);

  const startEditing = (index, recipe) => {
    setEditingIndex(index);
    setEditingRecipe({ ...recipe });
  };

  const saveEditing = () => {
    onUpdateRecipe(editingIndex, editingRecipe);
    setEditingIndex(null);
    setEditingRecipe(null);
  };

  const filteredRecipes =
    filter === "all"
      ? recipes
      : recipes.filter((recipe) => recipe.type === filter);

  return (
    <div className="p-6 bg-beige-50">
      <h1 className="text-2xl font-medium text-brown-800 mb-6 text-center">
        Recipes
      </h1>
      <div className="flex justify-center mb-4 space-x-2">
        <button
          onClick={() => setFilter("all")}
          className="px-4 py-2 bg-beige-300 text-brown-800 rounded hover:bg-beige-400"
        >
          All
        </button>
        <button
          onClick={() => setFilter("sweet")}
          className="px-4 py-2 bg-beige-300 text-brown-800 rounded hover:bg-beige-400"
        >
          Sweet
        </button>
        <button
          onClick={() => setFilter("salty")}
          className="px-4 py-2 bg-beige-300 text-brown-800 rounded hover:bg-beige-400"
        >
          Salty
        </button>
      </div>

      {filteredRecipes.length === 0 ? (
        <div className="text-center text-lg text-brown-600 mt-10">
          <p>No recipes yet. Create your first one!</p>
        </div>
      ) : (
        <ul className="space-y-4">
          {filteredRecipes.map((recipe, index) => (
            <li
              key={index}
              className="border border-brown-300 rounded-lg shadow-md p-4 bg-beige-100"
            >
              {editingIndex === index ? (
                <div>
                  <input
                    type="text"
                    value={editingRecipe.title}
                    onChange={(e) =>
                      setEditingRecipe({ ...editingRecipe, title: e.target.value })
                    }
                    className="w-full p-2 border border-brown-300 rounded-lg mb-2"
                  />
                  <textarea
                    value={editingRecipe.ingredients}
                    onChange={(e) =>
                      setEditingRecipe({
                        ...editingRecipe,
                        ingredients: e.target.value,
                      })
                    }
                    className="w-full p-2 border border-brown-300 rounded-lg mb-2"
                  />
                  <textarea
                    value={editingRecipe.instructions}
                    onChange={(e) =>
                      setEditingRecipe({
                        ...editingRecipe,
                        instructions: e.target.value,
                      })
                    }
                    className="w-full p-2 border border-brown-300 rounded-lg mb-2"
                  />
                  <input
                    type="number"
                    value={editingRecipe.cookingTime}
                    onChange={(e) =>
                      setEditingRecipe({
                        ...editingRecipe,
                        cookingTime: e.target.value,
                      })
                    }
                    className="w-full p-2 border border-brown-300 rounded-lg mb-2"
                  />
                  <select
                    value={editingRecipe.type}
                    onChange={(e) =>
                      setEditingRecipe({ ...editingRecipe, type: e.target.value })
                    }
                    className="w-full p-2 border border-brown-300 rounded-lg mb-2"
                  >
                    <option value="sweet">Sweet</option>
                    <option value="salty">Salty</option>
                  </select>
                  <button
                    onClick={saveEditing}
                    className="px-4 py-2 bg-rose-400 text-white rounded hover:bg-rose-500"
                  >
                    Save
                  </button>
                </div>
              ) : (
                <div>
                  <h2 className="text-xl font-medium text-brown-800">
                    {recipe.title}
                  </h2>
                  <p className="text-brown-600">
                    <strong>Ingredients:</strong> {recipe.ingredients}
                  </p>
                  <p className="text-brown-600">
                    <strong>Instructions:</strong> {recipe.instructions}
                  </p>
                  <p className="text-brown-600">
                    <strong>Cooking Time:</strong> {recipe.cookingTime} minutes
                  </p>
                  <p className="text-brown-600">
                    <strong>Type:</strong> {recipe.type}
                  </p>
                  <div className="mt-4">
                    <button
                      onClick={() => startEditing(index, recipe)}
                      className="px-4 py-2 bg-rose-300 text-white rounded hover:bg-rose-400 mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => onDeleteButton(index)}
                      className="px-4 py-2 bg-brown-300 text-brown-800 rounded hover:bg-brown-400"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};


export default Recipes;
