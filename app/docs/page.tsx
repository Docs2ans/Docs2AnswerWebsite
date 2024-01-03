import styles from "./page.module.css";
export default function Docs() {
  return (
    <div className="flex flex-col gap-5 p-4">
      <div className={styles.introduction}>
        <h1 className=" font-semibold text-5xl">Introduction</h1>
        <h1 style={{ fontSize: "48px" }}>
          What is Docs2
          <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-transparent bg-clip-text">
            Answer
          </span>{" "}
          ?
        </h1>
        <p style={{ fontSize: "24px" }}>
          docs2Answer is an simple library for you to create your own
          personalised chatbot
        </p>
        <p style={{ fontSize: "24px" }}>Can be established with 2 components</p>
        <ul style={{ fontSize: "24px" }}>
          <li>Docs2Answer server trained on your docs</li>
          <li>Docs2Answer chatbot package to embedded it in your react app</li>
        </ul>
      </div>
      <div className={styles.installation}>
        <h1 className="font-semibold text-5xl" style={{ fontSize: "48px" }}>Installation</h1>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <h2 style={{ fontSize: "32px" }}>Client</h2>
          <p style={{ fontSize: "24px" }}>
            {" "}
            Embedding chatbot in your react project is simple through our
            docs2Answer Chatbot package.
          </p>

          <div className={styles.codeDiv}>
            <code style={{ fontSize: "24px" }}>
              npm i docs2anschatbot
              <br></br>
            </code>
          </div>
          <h2>Importing component</h2>
          <div className={styles.codeDiv}>
            <code style={{ fontSize: "24px" }}>
              {`import {Chatbot} from 'docs2anschatbot'`}
              <br></br>
            </code>
          </div>
          <h2>Using</h2>
          <div className={styles.codeDiv}>
            <code style={{ fontSize: "24px" }}>
              {`<Chatbot url="server.url.com"/>`}

              <br></br>
            </code>
          </div>
        </div>
        <div className={styles.server}>
          {" "}
          <h2 style={{ fontSize: "32px" }}>Server</h2>
          <div className={styles.note}>
            <h2>Note !!</h2>
            <p> You need python version 10 in your environment </p>
          </div>
          <div className={styles.codeDiv}>
            <code style={{ fontSize: "24px" }}>
              git clone https://github.com/Docs2ans/RAG-langchain
              <br></br>
              cd ./RAG-langchain
              <br></br>
              pip install requirements.txt
            </code>
          </div>
        </div>
      </div>
    </div>
  );
}
