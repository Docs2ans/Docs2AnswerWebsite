export default function Banner() {
  return (
    <div className="flex flex-col mb-52 gap-28">
      <h1 className="text-center text-8xl mt-64 ">
        All your Docs <br />
        one{" "}
        <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-transparent bg-clip-text font-semibold">
          Solution
        </span>
      </h1>

      <h3 className="text-center text-5xl text-slate-700 leading-[54px]">
        {" "}
        Transform all your docs <br />
        into a  LLM powered chatbot{" "}
      </h3>
    </div>
  );
}
