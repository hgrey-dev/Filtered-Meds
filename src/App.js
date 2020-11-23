import "./App.css";
import Header from "./components/header/header";
import Medicines from "./components/medicines/medicines";
import originalMedicines from "./medicines.json";
import Search from "./components/search/search";
import { useState } from "react";

function App() {
  //on page load, get our hardcoded medicines from a file
  const [medicines] = useState(originalMedicines);
  const [search, setSearch] = useState("");

  const filteredMedicine = medicines.filter((x) => {
    return (
      x.name.toLowerCase().includes(search.toLowerCase()) ||
      x.company.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <>
      <Header>
        <Search setSearch={setSearch} />
      </Header>
      <div className="mild-defaults">
        <Medicines filteredMedicine={filteredMedicine} />
      </div>
    </>
  );
}

export default App;
