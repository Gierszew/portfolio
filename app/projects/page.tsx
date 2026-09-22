import Project from "../components/Project";
import projects from "../../projects.json";
import Footer from "../components/Footer";

export default function Projects() {
    const myProjects = projects.projects;

    return (
        <main className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans pt-32 pb-24 px-6">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-64">
                {myProjects.map((project) => (
                    <Project
                        key={project.index}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        imageAlt={project.imageAlt}
                        tags={project.tags}
                        liveUrl={project.liveUrl}
                        repoUrl={project.repoUrl}
                        year={project.year}
                        index={project.index}
                        reverse={project.reverse}
                    />
                ))}
            </div>
        </main>
    )
}