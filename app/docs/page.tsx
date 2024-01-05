
import { Separator } from "@/components/ui/separator";
import styles from "./page.module.css";
export default function Docs() {

  return (
    <div className="flex flex-col gap-5 p-4 ">
      {/* <div className="flex flex-col gap-2 ">
        <h1 className=" text-6xl font-bold">What is Docs2 Answer</h1>
        <div className="flex-col gap-3">
          <p className=" text-2xl pl-6 text-balance ">
            Docs2Answer is an advanced natural language processing (NLP) project
            designed to revolutionize the way users interact with documentation.
            Leveraging cutting-edge language models, specifically Large Language
            Models (LLM), Docs2Answer transforms static documentation into a
            dynamic and interactive conversational experience. Now, users can
            effortlessly obtain information and answers to their queries by
            engaging in a conversation with their personal Docs bot.
          </p>
        </div>
      </div> */}
      <div className="flex flex-col gap-5">
        {/* <h1 className="font-semibold text-5xl">Installation</h1>
        <Separator className=" w-3/5" /> */}

        <div className="flex flex-col gap-3 pl-6">
          <h2 className=" text-5xl font-semibold ">Client</h2>
          <p className="text-balance text-2xl pl-6">
            {" "}
            Embedding chatbot in your react / Next project is simple through our
            docs2Answer Chatbot package .
          </p>

          <code
            className="bg-[#1d1f21] text-2xl max-w-max ml-6"
            style={{ fontSize: "24px" }}
          >
            <span className="text-[#f0c674]">npm</span>
            <span className="text-gray-50"> install docs2anschatbot</span>
            <br></br>
          </code>

          <h2 className="text-3xl font-semibold">Importing component</h2>
          {/* <div className="max-w-max"> */}
          <code className="bg-[#1d1f21] text-2xl max-w-max ml-6 ">
            {/* {`import {Chatbot} from 'docs2anschatbot'`} */}
            <span className="text-[#b294bb]">import</span>{" "}
            <span className="text-[#cc6666]">{"{chatbot}"}</span>
            <span className="text-[#b294bb]">from</span>{" "}
            <span className="text-[#f0c674]">&apos;docs2answer&apos;</span>
            <br></br>
          </code>
          {/* </div> */}
          <h2 className="text-3xl font-semibold">Usage</h2>

          <code
            className="bg-[#1d1f21] min-h-max text-[#cc6666] text-2xl max-w-max ml-6"
            style={{ fontSize: "24px" }}
          >
            {'<Chatbot url="server.url.com"/>'}

            <br></br>
          </code>
        </div>
        <div className="flex flex-col gap-4 pl-6">
          <h2 className="text-5xl font-semibold"> Server</h2>
          <ul className="text-2xl flex flex-col gap-3 pl-6">
            <li>
              1.DocBot utilizes state-of-the-art Large Language Models to
              comprehend and respond to user queries with high accuracy,
              providing a more natural and intuitive interaction.
            </li>
            <li>
              2.The system processes and comprehends extensive documentation,
              allowing users to extract relevant information through
              context-aware conversations.
            </li>
            <li>
              3.DocBot generates dynamic responses, adapting to the user&apos;s
              questions and providing detailed explanations, examples, or
              references within the documentation.
            </li>
          </ul>
          <div className=" pl-6 flex flex-col gap-4">
            <h2 className=" text-[32px] font-semibold">Prequsites</h2>
            <p className=" text-2xl pl-5">
              {" "}
              Python version <u>3.10.0</u> needed to run this
            </p>
            <div className=" flex flex-col gap-3">
              <h2 className=" text-3xl font-semibold">Cloning Repository</h2>
              <p className=" text-xl pl-5">
                {" "}
                We have seprate Repository for traning Pdf files and Markdown
                files
              </p>
              <ul className="text-2xl pl-6 flex flex-col gap-4">
                <li>
                  <p className="text-xl">
                    <span className="text-2xl font-bold">
                      <a
                        href="https://github.com/Docs2ans/Markdown-Bot"
                        target=" blank"
                      >
                        <u> Markdown-Bot</u>
                      </a>
                    </span>{" "}
                    for markdown files
                  </p>
                </li>
                <li>
                  <p className="text-xl">
                    <span className="text-2xl font-bold">
                      <a
                        href="https://github.com/Docs2ans/PDF-Bot"
                        target="blank"
                      >
                        <u>PDF-bot</u>
                      </a>
                    </span>{" "}
                    for PDF files
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <h2 className=" text-3xl font-semibold">
                Installing pytorch.bin
              </h2>
              <p className=" text-xl pl-5">
                {" "}
                <a
                  href="https://huggingface.co/MBZUAI/LaMini-Flan-T5-783M/blob/main/pytorch_model.bin"
                  target=" blank"
                >
                  <u>Link</u>
                </a>
                <br />
                Download file from above link in /LaMini-T5-738M/
              </p>
            </div>
            <div>
              <h2 className=" text-3xl font-semibold"> Directory Creation</h2>

              <ul className="flex flex-col gap-2  text-xl pl-5">
                <li>Creating db folder</li>
                <li>Creating docs folder</li>
                <li>Place your documents within the docs folder</li>
              </ul>
            </div>
            <div>
              <h2 className=" text-3xl font-semibold">
                Create vector Embeddings
              </h2>
              <p className=" text-xl pl-5">
                To create vector embeddings by running injest.py
              </p>

              <code className="bg-[#1d1f21] text-2xl text-gray-50 max-w-max ml-6 ">
                <span className="text-[#f0c674]">python</span>{" "}
                <span className="text-gray-50"></span>injest.py
              </code>
            </div>
            <div>
              <h2 className=" text-3xl font-semibold">Start the Server</h2>
              <p className=" text-xl pl-5">To start uvicorn server</p>

              <code className="bg-[#1d1f21] text-2xl max-w-max ml-6 text-gray-50">
                <span className="text-[#f0c674]">uvicorn</span> server:app
                --reload
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
