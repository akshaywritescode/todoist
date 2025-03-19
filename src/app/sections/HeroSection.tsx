import { DownloadIcon } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
    return <section className="w-full min-h-[calc(100vh-4rem)] py-24 px-5 flex">
        <div className="h-full inline-flex flex-col w-[40%] border border-black/90">
            <h1 className="text-[3rem] font-extrabold leading-13">Organize your work and life, finally.</h1>
            <p className="text-xl mt-6 text-black/60">Simplify life for both you and your team with the world’s #1 task manager and to-do list app.</p>
            <span className="font-medium text-sm text-black/60 mt-2">374K+ <span className="text-base">★★★★★</span> reviews from</span>
            <Link href={"#"} className="shine-btn w-[9.5rem] text-center"><div className="another-bubble"></div>Start for free</Link>
        </div>
        <div className="h-full w-[60%] flex flex-col items-center">

        </div>
    </section>
}