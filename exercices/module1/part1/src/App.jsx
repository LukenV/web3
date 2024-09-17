const Hello = (props) => {
    return (
        <>
            <p>
            Hello {props.name}, you are {props.age} years old
            </p>
        </>
    )
}

const Footer = () => {
    return (
        <div>
            greeting app created by <a href="https://github.com/LukenV">LukenV</a>
        </div>
    )
}

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
