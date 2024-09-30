const Total = ({parts}) => {
    const calculateSum = () => {
        let sum = 0;
        for (const part of parts) {
            sum += part.exercises;
        }
        return sum;
    }
    return (
        <p>
            Number of exercises {calculateSum()}
        </p>
    );
}

export default Total;