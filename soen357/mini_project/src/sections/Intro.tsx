export function IntroSection() {
  return (
    <div className="flex flex-row h-[1000px]">
      <div className="flex-1"></div>
      <div className="flex-3 flex flex-col ml-5 mr-5 mt-10">
        <h1 className="text-4xl mt-5">Introduction</h1>
        <p className="text-lg mt-5">
          Aritificial intelligence is everywhere these days. Contrary to initial
          beliefs, it impacts individuals of various backgrounds, not only
          tech-literate individuals. From coding to recipe brainstorming, this
          technology has proven to be an indispensible tool in many
          applications. So much so, that governmental bodies around the world
          have already integrated AI in some shape or form for its services.
          However, the technology is not perfect. There are many reports of so
          called <b>"hallucinations"</b>, which is a phenomena where the AI
          models constructs falsehoods, but presents the information in a
          confident manner. Thus, there is a natural reluctance from the public
          to fully trust the output these models produce.
        </p>
        <h1 className="text-4xl mt-5">Problem Statement</h1>
        <p className="mt-5 text-lg">
          This raises an interesting question: how do entities wanting to
          leverage this technology ensure that their application is{" "}
          <b>trust-worthy</b>? This brings us to evaluate a use case for the{" "}
          <b>Quebec government's</b> idea to incorporate said technology to
          enhance services for its citizens. What can be done about ensuring
          public trust, especially amongst less tech-savy individuals?
        </p>
      </div>
      <div className="flex-1"></div>
    </div>
  );
}

export default IntroSection;
