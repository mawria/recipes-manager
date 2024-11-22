function Home() {
  return (
    <div className="h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1522791465802-47616431a4cf?q=80&w=2902&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
      <div className="flex items-center justify-center h-full bg-black bg-opacity-40">
        <div className="text-center text-white px-6 md:px-12">
          <h1 className="text-4xl font-bold mb-4">Welcome to the Recipe Manager</h1>
          <p className="text-lg">
            Use this app to create, view, and manage your favorite recipes!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;