import survey1 from "@/assets/survey_1.png";
import survey2 from "@/assets/survey_2.png";
import survey3 from "@/assets/survey_3.png";
import survey4 from "@/assets/survey_4.png";
import survey6 from "@/assets/survey_6.png";
import survey7 from "@/assets/survey_7.png";
import survey8 from "@/assets/survey_8.png";
import persona1 from "@/assets/persona_1.png";
import persona2 from "@/assets/persona_2.png";
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
                <div className="mt-5 flex flex-col bg-white p-5 rounded-lg border-[#00000054] border shadow-md">
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
                        our survey sample is with AI tools. This can give us a sense of how
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
                    <ImageCarousel
                        Images={[survey3, survey4, survey6, survey7, survey8]}
                    />
                    <p className="text-lg mt-5">
                        Next up, we gather information on the perception of users when they
                        interact with AI tools.{" "}
                        <b>
                            Unsurprisingly, every participant reported having had at least one
                            negative experience using AI.
                        </b>{" "}
                        Despite this, the majority still have some willingness to use the
                        technology. When it came to questions around features that would
                        increase their trust towards these tools,{" "}
                        <b>
                            the entirety of the sample set mentioned that having some sort of
                            user feedback on AI responses would increase their trust in the
                            application.{" "}
                        </b>
                    </p>
                    <p className="text-lg mt-5">
                        {" "}
                        Despite this, the majority still have some willingness to use the
                        technology. When it came to questions around features that would
                        increase their trust towards these tools,{" "}
                        <b>
                            the entirety of the sample set mentioned that having some sort of
                            user feedback on AI responses would increase their trust in the
                            application.{" "}
                        </b>
                    </p>
                </div>

                <h2 className="text-2xl mt-5 underline">Personas</h2>
                <p className="text-lg mt-5">
                    Demographically, our survey participants ranged from elderly with
                    accessibility needs, to young students who are acustomed to tech and
                    AI.{" "}
                    <b>
                        We therefore derived the following two personas that aim to capture
                        these two ends of the spectrum.
                    </b>
                </p>
                <div className="mt-5 rounded-lg border-[#00000054] bg-white border shadow-md p-5 flex flex-col">
                    <img src={persona1} alt="persona_1" />
                    <p className="text-lg mt-5">
                        Introducing <b>Rejean Bouchard</b>. This archetype persona reflects
                        an elderly user that typically is weary of emerging technologies.
                        They often rely on phone calls to get things done. They do possess a
                        personal computer and a mobile device, but always have issues
                        interacting with them due to accessibility short-comings.
                    </p>
                    <p className="mt-5 text-lg">
                        The idea of getting governmental services via an application let
                        alone one that makes use of AI, is hard to stomach for this persona.
                        The design of the application would need to address their{" "}
                        <b>accessibility needs</b>, which in this case, would be some sort
                        of hearing aid. The aid would also need to apply to some sort of
                        feature that emphasizes feedback from users on what the AI
                        application presents them.
                    </p>
                </div>
                <div className="mt-5 rounded-lg border-[#00000054] bg-white border shadow-md p-5">
                    <img src={persona2} alt="persona_2" />
                    <p className="text-lg mt-5">
                        Introducing <b>Valeria Hernandez</b>. This archetype persona
                        reflects a yound student who has recently arrived in Quebec. Being
                        from a younger generation, they are typically well-versed in tech,
                        which includes AI tools.
                    </p>
                    <p className="text-lg mt-5">
                        That being said, they are also fully aware of the limitations of AI
                        tools, and the fact that they do hallucinate and produce
                        misinformation. There is therefore some built-in <b>skepticism</b>{" "}
                        when interacting with such applications.
                    </p>
                    <p className="text-lg mt-5">
                        For this archetype to fully embrace an AI assisted governmental
                        service app, the design would need to emphasize the exactitude of
                        the responses that the AI assistant is presenting.
                    </p>
                </div>

                <div className="mt-5"></div>
            </div>
            <div className="flex-1"></div>
        </div>
    );
}

export default ResearchSection;
