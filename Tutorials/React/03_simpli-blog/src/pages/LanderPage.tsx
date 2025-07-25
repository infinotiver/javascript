import Navbar from "../components/Navbar"

function Home() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <Navbar/>
      <h1 className="font-bold text-4xl m-4">Simpli Blog</h1>

      <p>This is a basic homepage for the blog.</p>
    </div>
  );
}
export default Home;
