import ListProjects from "../components/ListProjects";
import BaseLayout from "../Layouts/BaseLayout"

const Home = () => {
  const staks: Array<string> = ['HTML', 'CSS', 'Javascript', 'Typescript', 'React', 'Craftcms', 'Tailwindcss', 'Git']

  return (
    <BaseLayout title="Homepage" description="Web developer, audiovisual editor and surfer">
      <div className="flex flex-col gap-6 py-4">
        <h1 className="sr-only">
          Homepage
        </h1>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2 border-b border-stone-950 pb-4 dark:border-zinc-50">
            <h2 className="font-semibold text-lg">
              My Projects
            </h2>
            <p>Here are some of my favorite projects that I've worked on.</p>
          </div>

          <ListProjects />
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="font-semibold text-lg border-b border-stone-950 pb-4 dark:border-zinc-50">
            My Stack
          </h2>

          <ul className="flex gap-3 flex-wrap">
            {staks.map((stak) => {
              return (
                <li key={stak.toLowerCase()} className="flex items-center px-3 py-1 border rounded-lg border-stone-800 dark:border-slate-50">
                  <p className="uppercase text-lg">{stak}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Home;