export function TitleSection() {
  return (
    <div className="h-[1000px] bg-blue-100">
      <div className="h-32 bg-blue-600 font-extralight pl-10 flex items-center text-white text-4xl">
        SOEN357: Mini Project - Derek Boucher
      </div>
      <div className="flex flex-row items-center h-[100%] justify-center">
        <div className="bg-blue-600 w-[25px] h-32 mr-3"></div>
        <div className="flex flex-col">
          <div className="text-7xl">Case Study:</div>
          <div className="text-7xl">Designing for AI Transparency & Trust</div>
        </div>
      </div>
    </div>
  );
}

export default TitleSection;
