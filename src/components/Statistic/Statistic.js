import { CountRates, Text } from "./Statistic.styled";


export function Statistic({ 
    text, good, bad, neutral, total, positive
 }) {
    return (
        <div>
            <Text>{text}</Text>    
            <CountRates>Good: {good}</CountRates>
            <CountRates>Bad: {bad}</CountRates>
            <CountRates>Neutral: {neutral}</CountRates>
            <CountRates>Total: {total}</CountRates>
            <CountRates>Positive feedback: {positive}</CountRates>
      </div>
  );
}
