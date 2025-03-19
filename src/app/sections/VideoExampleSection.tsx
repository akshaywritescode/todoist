"use client"

import { useState } from "react";
import Image from "next/image";
import VideoThumbnail from "@/app/assets/video_thumbnail.png"
import VideoPointingArrow from "@/app/assets/video_arrow.svg"
import { PlayIcon } from "lucide-react";
import { shantell } from "../font"

export default function VideoExampleSection() {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section className="py-24 px-5 relative">
            <div className="top-0 left-[8rem] absolute -rotate-6 flex gap-4">
                <p className={`${shantell.className} text-center font-normal text-lg text-black/60`}>Take a peek!<br />Watch Todoist in action.</p>
                <Image src={VideoPointingArrow} width={100} height={100} alt="arrow" unoptimized quality={100} />
            </div>


            <div className="max-w-[69rem] mx-auto relative border rounded-2xl">
                {isPlaying ? (
                    <iframe
                        className="w-full aspect-video rounded-lg"
                        src="https://www.youtube.com/embed/fI-iTYAwL6c?autoplay=1"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                ) : (
                    <div
                        className="relative cursor-pointer"
                        onClick={() => setIsPlaying(true)}
                    >
                        <Image
                            src={VideoThumbnail}
                            alt="Video Thumbnail"
                            width={1280}
                            height={720}
                            className="w-full aspect-video rounded-lg"
                            unoptimized
                            quality={100}
                        />
                        <div className="absolute inset-0 flex items-center justify-center rounded-lg">
                            <div className="w-30 h-16 flex justify-center items-center bg-black/60 rounded-lg">
                                <PlayIcon fill="#fff" className="text-white" />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
