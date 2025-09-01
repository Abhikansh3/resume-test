import ResumeCard from "~/components/ResumeCard";
import { resumes } from "../../constants";
import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart feedback for your dream" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar/>
    
    <section className="main-section">
      <div className="page-heading"></div>
        <h1>Track your Application & Resume Rating</h1>
        <h2>Review your Submission and check AI-powered feedback</h2>


          {resumes.length > 0 && (
      <div className="resumes-section">
         {resumes.map((resume) => (
      <ResumeCard key={resume.id} resume={resume}></ResumeCard>
    ))}
      </div>
    )}
    </section>

  
   
  </main>;
}
