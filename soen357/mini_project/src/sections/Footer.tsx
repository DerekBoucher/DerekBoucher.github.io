import tailwindLogo from "@/assets/tailwind_logo.svg";
import githubLogo from "@/assets/github_logo.svg";
import bunLogo from "@/assets/bun_logo.svg";
import reactLogo from "@/assets/react_logo.svg";

export default function Footer() {
    return (
        <div className="bg-blue-600 text-white pt-5 pb-5">
            <div className="text-lg  flex flex-row justify-center items-center">
                <p>Derek Boucher (40015459)</p>
            </div>
            <div className="text-lg mt-5 flex flex-row justify-center items-center">
                <p>Technologies used:</p>
            </div>
            <div className="text-lg mt-5 flex flex-row justify-center items-center">
                <img src={tailwindLogo} className="h-[25px]" />
                <p className="mr-5">Tailwindcss</p>
                <img src={githubLogo} className="h-[25px] mr-1" />
                <p className="mr-5">GitHub</p>
                <img src={reactLogo} className="h-[25px] mr-1" />
                <p className="mr-5">ReactJS</p>
            </div>
            <div className="text-lg mt-5 flex flex-row justify-center items-center">
                <img src={bunLogo} className="h-[25px]" />
                <p className="mr-5">Bun</p>
            </div>
        </div>
    );
}
