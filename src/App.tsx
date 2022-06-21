import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { client } from "./lib/apollo";

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`;
interface Lesson{
  title: string,
  id: string
}

const App = () => {
  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY);
  
  return (
    <div>
      <ul>
        {data?.lessons.map((lesson) => (
          <li key={lesson.id}>{lesson.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
