import survey1 from "@/assets/survey_1.png";
import survey2 from "@/assets/survey_2.png";
import survey3 from "@/assets/survey_3.png";
import survey4 from "@/assets/survey_4.png";
import survey6 from "@/assets/survey_6.png";
import survey7 from "@/assets/survey_7.png";
import survey8 from "@/assets/survey_8.png";
import persona1 from "@/assets/persona_1.png";
import ImageCarousel from "../components/Carousel";

export function ResearchSection() {
    return (
        <div className="flex flex-row bg-blue-100">
            <div className="flex-1"></div>
            <div className="flex-3 flex flex-col ml-5 mr-5">
                <h1 className="text-4xl mt-5 underline">Research</h1>
                <p className="text-lg mt-5">
                    First and foremost, it is important to get a sense of what our
                    potential users think is a major blocker when it comes to trust in AI
                    products. What are features that an app can have that would change
                    their mind on AI reliability? What are the common pitfalls they
                    encounter?
                </p>
                <p className="text-lg mt-5">
                    To get some insight into this, a survey was sent out to a group of
                    participants from various backgrounds.
                </p>
                <h2 className="text-2xl mt-5 underline">Survey</h2>
                <div className="mt-5 flex flex-col bg-white p-6 rounded-lg border-[#00000054] border shadow-md">
                    <div className="flex flex-row">
                        <img
                            className="mt-5 mr-5 w-1/2"
                            src={survey1}
                            alt="survey_question_1"
                        />
                        <img className="mt-5 w-1/2" src={survey2} alt="survey_question_2" />
                    </div>
                    <p className="text-lg mt-5">
                        The first set of questions we're geared towards knowing how familiar
                        our sample is with AI tools. This can give us a sense of how
                        conservative or progressive the design should be.
                    </p>
                    <p className="text-lg mt-5">
                        The concensus seemed to be that the majority of them are{" "}
                        <b>
                            familiar with AI and use it in some moderate capacity in a
                            day-to-day basis.
                        </b>
                    </p>
                </div>
                <div className="bg-white p-5 mt-5 rounded-lg border-[#00000054] border shadow-sm">
                    <ImageCarousel Images={[survey3, survey4, survey6]} />
                </div>

                <img className="mt-5" src={survey7} alt="survey_question_7" />
                <img className="mt-5" src={survey8} alt="survey_question_8" />
                <h2 className="text-2xl mt-5 underline">Personas</h2>
                <img className="mt-5" src={persona1} alt="persona_1" />
            </div>
            <div className="flex-1"></div>
        </div>
    );
}

export default ResearchSection;
