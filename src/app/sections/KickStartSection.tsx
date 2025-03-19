import { Button } from "@/components/ui/button";
import AccountingTemplateImage from "@/app/assets/accounting-tasks.png"
import BussinessTemplateImage from "@/app/assets/business-travel-packing.png"
import ClientTemplateImage from "@/app/assets/client-management-light.png"
import DeepWorkTemplateImage from "@/app/assets/deep-work.png"
import MeetingTemplateImage from "@/app/assets/meeting-agenda.png"
import Image from "next/image";
import { NotebookText } from "lucide-react";


const TemplatesData = [
    {
        templateImage: AccountingTemplateImage,
        templateHeading: "Accounting Tasks",
        templateDescription: "Create a system to keeps your books, receipts, and invoices organized."
    },
    {
        templateImage: BussinessTemplateImage,
        templateHeading: "Bussiness Travel Packing",
        templateDescription: "Never forget your laptop charger, lucky shoes, or passport again."
    },
    {
        templateImage: ClientTemplateImage,
        templateHeading: "Client Management",
        templateDescription: "Organize your work with clients from the smallest to largest details."
    },
    {
        templateImage: DeepWorkTemplateImage,
        templateHeading: "Deep Work",
        templateDescription: "Practice prioritizing focus and eliminating distraction with this template."
    },
    {
        templateImage: MeetingTemplateImage,
        templateHeading: "Meeting Agenda",
        templateDescription: "Waste less time in meetings, ensuring they're efficient and action-oriented."
    }
]

export default function KickStartSection() {
    return <section className="w-full h-600px bg-white flex flex-col items-center py-24">
        <div className="flex flex-col items-center">
            <h3 className="text-4xl font-bold">Kickstart your next project with Todoist Templates</h3>
            <p className="text-center mt-12 text-xl text-black/60 font-medium leading-8">No need to create projects or setups from scratch when we have<br /> 50+ templates made for you.</p>
            <div className="mt-11 flex gap-2">
                <Button className="px-6 py-7 font-medium bg-green-100 text-black tracking-wide hover:bg-green-100 hover:cursor-pointer">Work</Button>
                <Button className="px-6 py-7 font-medium bg-black/3 text-black tracking-wide hover:bg-black/3 hover:cursor-pointer">Personal</Button>
                <Button className="px-6 py-7 font-medium bg-black/3 text-black tracking-wide hover:bg-black/3 hover:cursor-pointer">Education</Button>
                <Button className="px-6 py-7 font-medium bg-black/3 text-black tracking-wide hover:bg-black/3 hover:cursor-pointer">Management</Button>
                <Button className="px-6 py-7 font-medium bg-black/3 text-black tracking-wide hover:bg-black/3 hover:cursor-pointer">Marketing & Sales</Button>
                <Button className="px-6 py-7 font-medium bg-black/3 text-black tracking-wide hover:bg-black/3 hover:cursor-pointer">Customer Support</Button>
            </div>
            <div className="mt-10 flex gap-5">
                {
                    TemplatesData.map((templateData, index) => (
                        <div className="w-[240px] h-[280px] border rounded-lg" key={index}>
                            <div className="w-full h-[40%] bg-green-100/60 flex items-center justify-center border-b">
                                <Image src={templateData.templateImage} alt={templateData.templateHeading} height={100} width={100} />
                            </div>
                            <div className="h-[60%] p-4 flex flex-col justify-between">
                                <h4 className="text-sm font-semibold">{templateData.templateHeading}</h4>
                                <p className="text-sm text-black/50 font-medium">{templateData.templateDescription}</p>

                                <div className="flex gap-1 items-center">
                                    <NotebookText className="w-4 h-4 text-black/40" />
                                    <span className="text-sm text-black/60">List</span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
}