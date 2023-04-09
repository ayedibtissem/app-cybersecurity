import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Quiz = ({ match }) => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const getQuizzes = async () => {
      try {
        let response;
        if (match?.params?.category) {
          response = await axios.get(`http://localhost:3005/quiz/quiz/${match.params.category}`);
        } else {
          response = await axios.get(`http://localhost:3005/quiz/quiz/phishing`);
        }
        setQuizzes(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getQuizzes();
  }, [match]);

  return (
    <div>
      {match?.params?.category? (
        <h1>Quizzes for {match.params.category}</h1>
      ) : (
        <h1>All Quizzes</h1>
      )}
      <table>
        <thead>
          <tr>
            <th>Question</th>
            <th>Answer</th>
          </tr>
        </thead>
        <tbody>
          {quizzes.map((quiz) => (
            <tr key={quiz._id}>
              <td>{quiz.question}</td>
              <td>{quiz.answer}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Quiz;

