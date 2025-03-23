import Header from "./Header";
import Card from "./Card";
import Todo from "./Actodoform";
function App() {
  return (
    <div className="bg-black p-10">
      <div className="bg-[#EFEFEF] p-16 border rounded-md ">
       <Header/>
       <Card></Card>
       <Todo/>
      </div>
    </div>
  );
}

export default App;
