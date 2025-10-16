import IntroSection from "./sections/Intro";
import ResearchSection from "./sections/Research";
import TitleSection from "./sections/Title";

export function App() {
    return (
        <div className="app font-open-sauce-sans">
            <TitleSection />
            <IntroSection />
            <ResearchSection />
        </div>
    );
}

export default App;
