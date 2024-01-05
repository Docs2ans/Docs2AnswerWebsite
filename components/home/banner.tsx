export default function Banner() {
  return (
    <div className="flex flex-col  lg:gap-28 sm:gap-20">
      <h1 className="text-center text-[56px] lg:text-9xl    p-3 ">
        All your Docs <br />
        one{" "}
        <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-transparent bg-clip-text font-semibold ">
          Solution
        </span>
      </h1>

      <h3 className="text-center text-[28px] lg:text-5xl  text-slate-700 lg:leading-[54px]">
        Transform all your docs <br />
        into a LLM powered Chatbot
      </h3>
    </div>
  );
}
