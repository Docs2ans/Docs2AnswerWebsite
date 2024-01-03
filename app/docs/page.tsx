"use client";
import { Separator } from "@/components/ui/separator";
import styles from "./page.module.css";
export default function Docs() {
  return (
    <div className="flex flex-col gap-5 p-4 ">
      <div className="flex flex-col gap-6 ">
        <h1 className=" font-semibold text-5xl">Introduction</h1>
        <Separator />
        <h1 className=" text-[42px] font-bold">
          What is Docs2
          {/* <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-transparent bg-clip-text"> */}
          Answer
          {/* </span>{" "} */}?
        </h1>
        <div className="flex-col gap-3">
          <p className=" text-2xl text-balance text-gray-700">
            Docs2Answer is an simple library for you to create your own
            personalised chatbot trained on your personalised documents .
          </p>

        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h1 className="font-semibold text-5xl">Installation</h1>
        <Separator className=" w-3/5" />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            paddingLeft: "24px",
          }}
        >
          <h2 className=" text-4xl font-semibold pl-">Client</h2>
          <p
            style={{ fontSize: "24px" }}
            className="text-balance text-gray-700 pl-6"
          >
            {" "}
            Embedding chatbot in your react / Next project is simple through our
            docs2Answer Chatbot package .
          </p>

          <div className={styles.codeDiv}>
            <code className="text-gray-700" style={{ fontSize: "24px" }}>
              npm i docs2anschatbot
              <br></br>
            </code>
          </div>
          <h2 className="text-3xl font-semibold">Importing component</h2>
          <div className={styles.codeDiv}>
            <code className="text-gray-700 pl-6" style={{ fontSize: "24px" }}>
              {`import {Chatbot} from 'docs2anschatbot'`}
              <br></br>
            </code>
          </div>
          <h2 className="text-3xl font-semibold">Usage</h2>
          <div className={styles.codeDiv}>
            <code className="text-gray-700" style={{ fontSize: "24px" }}>
              {`<Chatbot url="server.url.com"/>`}

              <br></br>
            </code>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="text-4xl font-semibold"> Server</h2>
          <div className=" pl-6 flex flex-col gap-4">
            <h2 className=" text-3xl font-semibold">Prequsites</h2>
            <p className=" text-2xl pl-5">
              {" "}
              You need python version 3.10.0 to run this
            </p>
            <div className=" flex flex-col gap-3">
              <h2 className=" text-3xl font-semibold">Cloning</h2>
              <p className=" text-2xl pl-5">
                {" "}
                We had seprate Repository for Pdf files and Markdown files
              </p>
              <ul className="text-2xl pl-6 flex flex-col gap-4">
                <li>
                  <p className="text-2xl">
                    <span className="text-2xl font-bold">
                      <a href="https://github.com/Docs2ans/Markdown-Bot">
                       <u> Markdown-Bot</u>
                      </a>
                    </span>{" "}
                    for markdown files
                  </p>
                </li>
                <li>
                  <p className="text-2xl">
                    <span className="text-2xl font-bold">
                      <a href="https://github.com/Docs2ans/PDF-Bot"><u>PDF-bot</u></a>
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
              <p className=" text-2xl pl-5">
                {" "}
                <a href="https://huggingface.co/MBZUAI/LaMini-Flan-T5-783M/blob/main/pytorch_model.bin">
                  <u>Link</u>
                </a>
                <br />
                Download file from above link and paste to /LaMini-T5-738M/
              </p>
            </div>
            <div>
              <h2 className=" text-3xl font-semibold"> Creating docs and db folder</h2>
              <p className=" text-2xl pl-5">
                Create empty folder docs and db in the bot and add docs into
                docs folder
              </p>
            </div>
            <div>
              <h2 className=" text-3xl font-semibold">
                Create vector Embeddings
              </h2>
              <p className=" text-2xl pl-5">
                To create vector embeddings by running injest.py
              </p>
              <div className={`${styles.codeDiv}  pl-7`}>
                <code className="text-2xl pl-6">python ingest.py</code>
              </div>
            </div>
            <div>
              <h2 className=" text-3xl font-semibold">Start the Server</h2>
              <p className=" text-2xl pl-5">To start uvicorn server</p>
              <div className={`${styles.codeDiv}  pl-7`}>
                <code className="text-2xl pl-6">
                  uvicorn server:app --reload
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
