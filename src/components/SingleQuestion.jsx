import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const SingleQuestion = (props) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const { title, info } = props;
  return (
    <li className="single-question">
      <div className="question-container">
        <div className="question">
          <h2>{title}</h2>
          {showAnswer ? (
            <AiOutlineMinus onClick={() => setShowAnswer(!showAnswer)} />
          ) : (
            <AiOutlinePlus onClick={() => setShowAnswer(!showAnswer)} />
          )}
        </div>
        {showAnswer && <p className="answer">{info}</p>}
      </div>
    </li>
  );
};

export default SingleQuestion;
