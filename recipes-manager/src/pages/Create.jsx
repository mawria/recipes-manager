const Create = ({ titleRef, ingredientsRef, instructionsRef, cookingTimeRef, typeRef, onAddRecipe }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddRecipe();
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-beige-50 shadow-lg rounded-lg">
      <h1 className="text-2xl font-medium text-brown-800 mb-6 text-center">
        Create Your Recipe
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-brown-700 font-semibold mb-2">Title:</label>
          <input
            type="text"
            ref={titleRef}
            required
            className="w-full p-2 border border-brown-300 rounded-lg focus:ring focus:ring-beige-300 bg-beige-100"
          />
        </div>
        <div>
          <label className="block text-brown-700 font-semibold mb-2">Ingredients:</label>
          <textarea
            ref={ingredientsRef}
            required
            className="w-full p-2 border border-brown-300 rounded-lg focus:ring focus:ring-beige-300 bg-beige-100"
          />
        </div>
        <div>
          <label className="block text-brown-700 font-semibold mb-2">Instructions:</label>
          <textarea
            ref={instructionsRef}
            required
            className="w-full p-2 border border-brown-300 rounded-lg focus:ring focus:ring-beige-300 bg-beige-100"
          />
        </div>
        <div>
          <label className="block text-brown-700 font-semibold mb-2">
            Cooking Time (minutes):
          </label>
          <input
            type="number"
            ref={cookingTimeRef}
            required
            className="w-full p-2 border border-brown-300 rounded-lg focus:ring focus:ring-beige-300 bg-beige-100"
          />
        </div>
        <div>
          <label className="block text-brown-700 font-semibold mb-2">
            Type (Sweet/Salty):
          </label>
          <select
            ref={typeRef}
            required
            className="w-full p-2 border border-brown-300 rounded-lg focus:ring focus:ring-beige-300 bg-beige-100"
          >
            <option value="">Select</option>
            <option value="sweet">Sweet</option>
            <option value="salty">Salty</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-rose-300 text-white font-semibold rounded-lg hover:bg-rose-400 focus:ring focus:ring-rose-200"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default Create;
