import React from "react";
import questions from "../data";
import SingleQuestion from "./SingleQuestion";

const QuestionsList = () => {
  return (
    <div className="questions-project">
      <div className="container">
        <div className="questions-card">
          <h2 className="title">questions</h2>
          <ul className="all-questions">
            {questions.map((question) => {
              return <SingleQuestion key={question.id} {...question} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QuestionsList;
