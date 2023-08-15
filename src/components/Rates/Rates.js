import { FeedbackBtn, FeedbackListBtn } from "./Rates.styled";


export function Rates({good, bad, neutral, rates, countFeedback}) {
    return (
      <FeedbackListBtn>
        <FeedbackBtn onClick={() => countFeedback(`good`)}>Good</FeedbackBtn>
        <FeedbackBtn onClick={() => countFeedback(`bad`)}>Bad</FeedbackBtn>
        <FeedbackBtn onClick={() => countFeedback(`neutral`)}>Neutral</FeedbackBtn>
        </FeedbackListBtn>
  );
}
