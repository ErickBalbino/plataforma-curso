import { gql, useQuery } from "@apollo/client";

import Lesson from "./Lesson";

const GET_QUERY_LESSONS = gql`
  query {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      lessonType
      availableAt
      slug
      title
    }
  }
`;

interface GetLessonsQueryResponse {
  lessons: {
    id: string,
    title: string,
    slug: string,
    availableAt: string,
    lessonType: 'live' | 'class'
  }[]
}

const Sidebar = () => {
  const { data } = useQuery<GetLessonsQueryResponse>(GET_QUERY_LESSONS);

  return (
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de aulas
      </span>

      {
        data ? (
          <div className="flex flex-col gap-8">
            {
              data?.lessons.map((lesson) => (
                <Lesson
                  key={lesson.id}
                  title={lesson.title}
                  slug={lesson.slug}
                  availableAt={new Date(lesson.availableAt)}
                  type={lesson.lessonType}
                />
              ))
            }
          </div>
        ) : (
          <p>Carregando aulas...</p>
        )
      }
    </aside>
  );
};

export default Sidebar;
