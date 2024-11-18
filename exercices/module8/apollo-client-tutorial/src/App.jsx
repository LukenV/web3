import { useState } from "react";
import { useQuery } from "@apollo/client";
import { ALL_PERSONS } from "../utils/queries";
import Persons from "./Persons";
import Notify from "./Notify";
import PersonForm from "./PersonForm";
import PhoneForm from "./PhoneForm";

function App() {
  const [errorMessage, setErrorMessage] = useState(null);
  const result = useQuery(ALL_PERSONS, {
    pollInterval: 2000,
  });

  if (result.loading) {
    return <div>Loading....</div>;
  }

  const notify = (message) => {
    setErrorMessage(message);
    setTimeout(() => {
      setErrorMessage(null);
    }, 10000);
  };

  return (
    <div>
      <Notify errorMessage={errorMessage} />
      <Persons persons={result.data.allPersons} />
      <PersonForm setError={notify} />
      <PhoneForm setError={notify}/>
    </div>
  );
}

export default App;
