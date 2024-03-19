import "./App.css";
import data from "./data.json";
import CardList from "./components/CardList";
import Header from "./components/Header";
import Search from "./components/Search";
import Filter from "./components/Filter";

function App() {
  const messageList = data;
  return (
    <div className="bg-stone-100 ">
      <Header></Header>
      <hr className="mt-4"></hr>
      <Search></Search>
      <Filter></Filter>

      <CardList className="align-element" data={messageList}></CardList>
    </div>
  );
}

export default App;
