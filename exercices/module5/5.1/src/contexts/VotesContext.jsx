import {createContext, useState} from "react";

const Context = createContext(null);

const ProviderWrapper = (props) => {
    const [goodVotes, setGoodVotes] = useState(0);
    const [okVotes, setOkVotes] = useState(0);
    const [badVotes, setBadVotes] = useState(0);

    const increaseGoodVotes = () => {
        setGoodVotes(goodVotes+1);
    };

    const increaseOkVotes = () => {
        setOkVotes(okVotes+1);
    };

    const increaseBadVotes = () => {
        setBadVotes(badVotes+1);
    };

    const resetVotes = () => {
        setGoodVotes(0);
        setOkVotes(0);
        setBadVotes(0);
    };

    const exposedValue = {
        goodVotes, increaseGoodVotes,
        okVotes, increaseOkVotes,
        badVotes, increaseBadVotes,
        resetVotes
    };

    return <Context.Provider value={exposedValue}>
        {props.children}
    </Context.Provider>
}

export {
    Context,
    ProviderWrapper
}