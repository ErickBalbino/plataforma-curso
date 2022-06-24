import { useParams } from "react-router-dom";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Video from "../components/Video";

const Event = () => {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex flex-1">
        {
          slug ? (
            <Video lessonSlug={slug} />
          ) : (
            <div className="flex flex-1 justify-center items-center">
              <h2 className="text-blue-500 text-2xl">
                Clique em uma das aulas para assistir!
              </h2>
            </div>
          )
        }
        <Sidebar />
      </main>
    </div>
  );
};

export default Event;
