import {createContext, useState} from "react";
import {v4 as uuidv4} from "uuid";

const Context = createContext(null);

const ContextProvider = (props) => {

    const [sortedOpinions, setSortedOpinions] = useState([
        {
            id : "bc5e6fc1-bc63-4f8d-b3dc-4d1bb2747e64",
            opinion : "Opinion B",
            votes : 1
        },
        {
            id : "0a41f107-05dc-4dc4-93cb-dab07f4d80fd",
            opinion : "Opinion A",
            votes : 1
        },
        {
            id : "8be8aa94-0b03-4151-ba76-6bb3c2e99b71",
            opinion : "Opinion C",
            votes : 1
        },
    ]);

    const sortOpinions = (unsortedOpinions) => {
        const sortedOpinions = unsortedOpinions.sort((a, b) => b.votes - a.votes);
        setSortedOpinions(sortedOpinions);
    }

    const addOpinion = (opinionText) => {
        const newOpinion = {
            id : uuidv4(),
            opinion : opinionText,
            votes : 1
        };
        sortOpinions([...sortedOpinions, newOpinion]);
    }

    const voteOpinion = (id) => {
        const newOpinions = sortedOpinions.map(o=>
            o.id === id ? { ...o, votes : o.votes+1} : o
        );
        sortOpinions(newOpinions);
    }

    const exposedValue = {
        sortedOpinions,
        addOpinion,
        voteOpinion
    }

    return <Context.Provider value={exposedValue}>
        {props.children}
    </Context.Provider>;
}

export {
    Context,
    ContextProvider
}