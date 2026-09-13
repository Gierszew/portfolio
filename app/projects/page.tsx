import Project from "../components/Project";
import projects from "../../projects.json";

export default function Projects() {
    const myProjects = projects.projects;

    return (
        <main className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
            <Project 
                title={myProjects[0].title}
                description={myProjects[0].description}
                image={myProjects[0].image}
                imageAlt={myProjects[0].imageAlt}
                tags={myProjects[0].tags}
                liveUrl={myProjects[0].liveUrl}
                repoUrl={myProjects[0].repoUrl}
                year={myProjects[0].year}
                index={myProjects[0].index}
                reverse={myProjects[0].reverse}
            />
        </main>
    )
}