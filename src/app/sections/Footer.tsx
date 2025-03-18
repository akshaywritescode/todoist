import Image from "next/image";
import TodoistBlackLogo from "@/app/assets/safari-pinned-tab.svg"
import Link from "next/link";
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from "lucide-react";
import LanguageSelector from "@/components/LanguageSelector";


const footerLinksData = [{
    heading: "Features",
    links: [{
        linkText: "How it Works",
        link: "#"
    }, {
        linkText: "For Teams",
        link: "#"
    }, {
        linkText: "Pricing",
        link: "#"
    }, {
        linkText: "Templates",
        link: "#"
    }]
},
{
    heading: "Resources",
    links: [{
        linkText: "Download Apps",
        link: "#"
    }, {
        linkText: "Help Center",
        link: "#"
    }, {
        linkText: "Productivity Methods",
        link: "#"
    }, {
        linkText: "Channel Partners",
        link: "#"
    },
    {
        linkText: "Developers API",
        link: "#"
    },
    {
        linkText: "Status",
        link: "#"
    }]
},
{
    heading: "Company",
    links: [{
        linkText: "About Us",
        link: "#"
    }, {
        linkText: "Careers",
        link: "#"
    }, {
        linkText: "Inspiration Hub",
        link: "#"
    }, {
        linkText: "Press",
        link: "#"
    },
    {
        linkText: "Twist",
        link: "#"
    }]
}]

export default function Footer() {
    return <footer className="w-full bg-red-100/40 pt-10 px-4 pb-4 flex flex-col gap-24">
        <div className="flex justify-between">
            <div>
                <picture className="flex items-center gap-2">
                    <Image src={TodoistBlackLogo} alt="todoist black logo" width={33} height={33} unoptimized quality={100} />
                    <figcaption className="text-2xl font-semibold">todoist</figcaption>
                </picture>
                <p className="leading-7 mt-6 font-medium text-base">Join millions of people who organize<br /> work and life with Todoist.</p>
            </div>
            <div className="flex gap-20">
                {
                    footerLinksData.map((linkData, index) => (
                        <div key={index}>
                            <h3 className="font-semibold">{linkData.heading}</h3>
                            <ul className="flex flex-col mt-6 gap-5">
                                {
                                    linkData.links.map((link, index) => (
                                        <li key={index}><Link href={link.link} className="text-sm text-black/60 px-2 py-2 rounded duration-500 hover:bg-black/5" >{link.linkText}</Link></li>
                                    ))
                                }
                            </ul>
                        </div>
                    ))
                }
                <div className="flex flex-col gap-6">
                    <TwitterIcon className="w-6 h-6" />
                    <YoutubeIcon className="w-6 h-6" />
                    <FacebookIcon className="w-6 h-6"/>
                    <InstagramIcon className="w-6 h-6"/>
                </div>
            </div>
        </div>
        <div className="flex justify-between items-center">
            <p className="text-xs text-black/50">Security | Privacy | Terms <span>© Doist Inc.</span></p>

            <LanguageSelector />
        </div>

    </footer>
}