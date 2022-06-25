import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { client } from "./lib/apollo";

interface Lesson {
  id: string;
  title: string;
}

function App() {
  const GET_LESSONS_QUERY = gql`
    query {
      lessons {
        id
        title
      }
    }
  `;

  /*useEffect(() => {
    client.query({ query: GET_LESSONS_QUERY }).then((response) => {
      console.log(response);
    });
  }, []);*/

  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY);

  return (
    <ul>
      {data?.lessons.map((lesson: Lesson) => {
        return <li key={lesson.id}>{lesson.title}</li>;
      })}
    </ul>
  );
}

export default App;
