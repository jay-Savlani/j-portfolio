import "./home/home.css";

const init_life = `const init_life = (breathing: "programming" | "other") => {
  while (breathing === "programming") {
    console.log("Fulfilled life");
  }
};

init_life("programming");
`;

export const HomeTab = () => {
  return (
    <div className="pt-8">
      <div className="h-auto sm:h-[70vh] py-8 sm:py-0 home-bg md:rounded-lg">
        <div className="flex flex-col justify-center h-full w-full md:w-3/4  lg:w-1/2 p-4">
          <div className="px-0 sm:px-8 text-center md:text-left">
            <h1 className="animation-move-in-left font-bold text-2xl md:text-4xl lg:text-6xl text-white md:text-transparent tracking-widest mb-4 md:bg-gradient-to-r md:from-indigo-600 md:to-indigo-950 md:bg-clip-text">
              JAY SAVLANI
            </h1>
            <h2 className="animation-fade-in font-semibold text-lg lg:text-[22px] tracking-wider mb-6  text-slate-300 md:text-transparent md:bg-gradient-to-r md:from-red-950 md:to-red-600 md:bg-clip-text">
              SOFTWARE DEVELOPER
            </h2>
            <p className="text-base text-slate-400 md:text-slate-800 tracking-wider animation-fade-in">
              Passionate and detail-oriented Front-End Developer with 2+ years
              of experience in building user friendly customer facing and
              internal business applications. Proficient in HTML, CSS,
              Typescript, Javascript, React. Experienced in detailing the code
              with React optimizations, Typescript, JSDoc and writing unit tests
              for code maintainability. Being Linux enthusiast, I am always
              eager to reduce daily redundant tasks with bash scripting with a
              touch of python and increase productivity.
            </p>
          </div>
        </div>
      </div>
      <div className="px-3 sm:px-0 py-6 sm:py-8 lg:py-24 flex  lg:flex-row sm:flex-col gap-8 sm:gap-14 flex-wrap items-center justify-center ">
        <p className="text-[70px] lg:text-[200px] text-transparent bg-gradient-to-r from-indigo-600 to-indigo-950 bg-clip-text animation-spin-slow">
          &lt;/&gt;
        </p>
        <code className="overflow-x-auto py-4 sm:py-0">
          <pre className="text-sm sm:text-base lg:text-2xl text-transparent bg-gradient-to-r from-red-950 to-red-600 bg-clip-text">
            {init_life}
          </pre>
        </code>
      </div>
    </div>
  );
};
