"use client";
import { useToast } from "@/components/ui/use-toast";
import db from "@/firebase/firebaseconfig";
import { Timestamp, doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface formData {
  email: string;
  docsLink: string;
  firstName: string;
  lastName: string;
  company: string;
  mobile: string;
}
export default function Demo() {
 
  const { toast } = useToast();

  const sucessToast = () => {
    console.log("toast");
    return toast({
      variant: "default",
      title: "Submitted",
      description: "Your model has started developing ",
      forceMount: true,
    });
  };
  const [formData, setFormData] = useState<formData>({
    email: "",
    docsLink: "",
    firstName: "",
    lastName: "",
    mobile: "",
    company: "",
  });
  const submitHandler = async () => {
    try {
      const demoDoc = await setDoc(doc(db, "client", uuidv4()), {
        ...formData,
        timestamp: Timestamp.now(),
      });
      console.log(demoDoc, "hello");
      sucessToast();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Some error ",
        description: "retry please",
      });
    }
  };
  return (
    <div className="m-5 self-center">
      <h1 className=" lg:text-5xl sm:text-4xl font-semibold">
        {" "}
        To book a Demo call for your docs{" "}
      </h1>
      <br />
      <form
        className="max-w-lg mx-auto flex flex-col lg:gap-6 sm:gap-5 lg:m-20"
        onSubmit={(e) => {
          e.preventDefault();
          submitHandler();
        }}
      >
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            value={formData.email}
            onChange={(e) => {
              e.preventDefault();
              setFormData({ ...formData, email: e.target.value });
            }}
            className="block py-2.5 px-0 w-full   text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            // for="floating_email"
            className="peer-focus:font-medium absolute lg:text-xl sm:text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
          >
            Email address
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="url"
            name="url"
            id="docsUrl"
            value={formData.docsLink}
            onChange={(e) => {
              e.preventDefault();
              setFormData({ ...formData, docsLink: e.target.value });
            }}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            // for="floating_password"
            className="peer-focus:font-medium absolute lg:text-2xl sm:text-xl  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
          >
            Link for Docs
          </label>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              value={formData.firstName}
              onChange={(e) => {
                e.preventDefault();
                setFormData({ ...formData, firstName: e.target.value });
              }}
              className="block py-2.5 px-0 w-full lg:text-2xl sm:text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              // for="floating_first_name"
              className="peer-focus:font-medium absolute lg:text-2xl sm:text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              First name
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_last_name"
              id="floating_last_name"
              value={formData.lastName}
              onChange={(e) => {
                e.preventDefault();
                setFormData({ ...formData, lastName: e.target.value });
              }}
              className="block py-2.5 px-0 w-full lg:text-2xl sm:text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              // for="floating_last_name"
              className="peer-focus:font-medium absolute lg:text-2xl sm:text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              Last name
            </label>
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full lg:mb-5 sm:mb-3 group">
            <input
              type="tel"
              // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              name="floating_phone"
              id="floating_phone"
              value={formData.mobile}
              onChange={(e) => {
                e.preventDefault();
                setFormData({ ...formData, mobile: e.target.value });
              }}
              className="block py-2.5 px-0 w-full lg:text-2xl sm:text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              // for="floating_phone"
              className="peer-focus:font-medium absolute lg:text-2xl sm:text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              Phone number
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_company"
              id="floating_company"
              value={formData.company}
              onChange={(e) => {
                e.preventDefault();
                setFormData({ ...formData, company: e.target.value });
              }}
              className="block py-2.5 px-0 w-full lg:text-2xl sm:text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              // for="floating_company"
              className="peer-focus:font-medium absolute lg:text-2xl sm:text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              Company
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
