import survey1 from "@/assets/survey_1.png";
import survey2 from "@/assets/survey_2.png";
import survey3 from "@/assets/survey_3.png";
import survey4 from "@/assets/survey_4.png";
import survey5 from "@/assets/survey_5.png";
import survey6 from "@/assets/survey_6.png";
import survey7 from "@/assets/survey_7.png";
import survey8 from "@/assets/survey_8.png";

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
                    their mind on AI reliability? The common pitfalls they encounter?
                </p>
                <p className="text-lg mt-5">
                    To get some introspection into this, a survey was sent out to a group
                    of participants from various backgrounds.
                </p>
                <h2 className="text-2xl mt-5 underline">Survey</h2>
                <img className="mt-5" src={survey1} alt="survey_question_1" />
                <img className="mt-5" src={survey2} alt="survey_question_2" />
                <img className="mt-5" src={survey3} alt="survey_question_3" />
                <img className="mt-5" src={survey4} alt="survey_question_4" />
                <img className="mt-5" src={survey5} alt="survey_question_5" />
                <img className="mt-5" src={survey6} alt="survey_question_6" />
                <img className="mt-5" src={survey7} alt="survey_question_7" />
                <img className="mt-5" src={survey8} alt="survey_question_8" />
            </div>
            <div className="flex-1"></div>
        </div>
    );
}

export default ResearchSection;
