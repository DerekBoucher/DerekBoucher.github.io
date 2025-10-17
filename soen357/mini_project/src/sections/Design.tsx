import FadeSection from "../components/FadeSection";
import design1 from "@/assets/design_1.png";
import design2 from "@/assets/design_2.png";
import design3 from "@/assets/design_3.png";
import design4 from "@/assets/design_4.png";
import design5 from "@/assets/design_5.png";
import design6 from "@/assets/design_6.png";
import design7 from "@/assets/design_7.png";

export default function Design() {
    return (
        <div className="flex flex-row bg-blue-100">
            <div className="flex-1"></div>
            <div className="flex-3 flex flex-col ml-5 mr-5 mb-5 mt-10">
                <FadeSection>
                    <h1 className="text-4xl mt-5 underline">Design</h1>
                    <p className="text-lg mt-5">
                        Below is the final high fidelity mockups that guide the user through
                        the AI assitant flow.{" "}
                        <b>
                            One important aspect of the design is the user feedback system
                            (thumbs up count) below the AI's responses, indicating how many
                            users corroborated this information and certified it.
                        </b>
                        This feature will give more certainty to the user if it should trust
                        the output, or perhaps be more skeptical and provide feedback to the
                        government.
                    </p>

                    <div className="flex flex-row justify-center mt-5 h-[600px]">
                        <img
                            src={design1}
                            className="mr-20 flex flex-col bg-white p-5 rounded-lg border-[#00000054] border shadow-md"
                            alt="design"
                        />
                        <img
                            src={design2}
                            className="flex flex-col bg-white p-5 rounded-lg border-[#00000054] border shadow-md"
                            alt="design"
                        />
                    </div>
                    <div className="flex flex-row justify-center mt-5 h-[600px]">
                        <img
                            src={design3}
                            className="mr-20 flex flex-col bg-white p-5 rounded-lg border-[#00000054] border shadow-md"
                            alt="design"
                        />
                        <img
                            src={design4}
                            className="flex flex-col bg-white p-5 rounded-lg border-[#00000054] border shadow-md"
                            alt="design"
                        />
                    </div>
                    <div className="flex flex-row justify-center mt-5 h-[600px]">
                        <img
                            src={design5}
                            className="mr-20 flex flex-col bg-white p-5 rounded-lg border-[#00000054] border shadow-md"
                            alt="design"
                        />
                        <img
                            src={design6}
                            className="flex flex-col bg-white p-5 rounded-lg border-[#00000054] border shadow-md"
                            alt="design"
                        />
                    </div>
                </FadeSection>
            </div>
            <div className="flex-1"></div>
        </div>
    );
}
