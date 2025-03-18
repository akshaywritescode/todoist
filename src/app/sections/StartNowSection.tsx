import { DownloadIcon } from "lucide-react";
import Link from "next/link";

export default function StartNowSection(){
    return <section className="w-full bg-red-100/40 py-28 px-3">
        <div className="flex flex-col items-center">
            <h1 className="text-center text-[2.8rem] font-bold leading-13">Gain calmness and clarity with the<br /> world’s most beloved productivity app</h1>
            <p className="text-xl mt-6 text-black/60">374000+ ★★★★★ reviews on Google Play and App Store</p>
            <Link href={"#"} className="shine-btn"><div className="another-bubble"></div>Start for free</Link>
            <Link href={"#"} className="flex items-center gap-1 text-sm font-semibold text-black/40 p-2 rounded mt-3 duration-500 hover:bg-black/10"><DownloadIcon className="w-4 h-4" /> Download apps</Link>
        </div>
    </section>
}