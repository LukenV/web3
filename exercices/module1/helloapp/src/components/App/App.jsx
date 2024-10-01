import Hello from "components/Hello/Hello.jsx";
import Footer from "components/Footer/Footer.jsx";

const App = () => {
    const friends = [
        { name: 'Simon', age: 20 },
        { name: 'Nicolas', age: 21 },
    ];
    return (
        <>
        <h1>Greetings</h1>
        <Hello name="Maya" age={26 + 10}/>
        {friends.map((e, i) => {
            return <p key={i}>{e.name} {e.age}</p>;
        })}
        <Footer/>
        </>
    )
}

export default App
