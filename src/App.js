import { useState } from "react";
import Card from "./components/card";
import { Modal } from "@mui/material";
function App() {
  const [sources, setSources] = useState([
    {
      candidate_name: "John Doe",
      photo:
        "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80",
      location: "US",
      date_Applied: "19-03-2023",
    },
    {
      candidate_name: "Jane Doe",
      photo:
        "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80",
      location: "US",
      date_Applied: "19-03-2023",
    },
    {
      candidate_name: "Richard Doe",
      photo:
        "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80",
      location: "US",
      date_Applied: "19-03-2023",
    },
    {
      candidate_name: "Nicole Doe",
      photo:
        "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80",
      location: "US",
      date_Applied: "19-03-2023",
    },
  ]);
  const [applied, setApplied] = useState([
    {
      candidate_name: "John Doe",
      photo:
        "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80",
      location: "US",
      date_Applied: "19-03-2023",
    },
    {
      candidate_name: "Jane Doe",
      photo:
        "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80",
      location: "US",
      date_Applied: "19-03-2023",
    },
    {
      candidate_name: "Richard Doe",
      photo:
        "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80",
      location: "US",
      date_Applied: "19-03-2023",
    },
    {
      candidate_name: "Nicole Doe",
      photo:
        "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80",
      location: "US",
      date_Applied: "19-03-2023",
    },
  ]);
  const [interview, setInterview] = useState([
    {
      candidate_name: "John Doe",
      photo:
        "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80",
      location: "US",
      date_Applied: "19-03-2023",
    },
    {
      candidate_name: "Jane Doe",
      photo:
        "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80",
      location: "US",
      date_Applied: "19-03-2023",
    },
    {
      candidate_name: "Richard Doe",
      photo:
        "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80",
      location: "US",
      date_Applied: "19-03-2023",
    },
    {
      candidate_name: "Nicole Doe",
      photo:
        "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80",
      location: "US",
      date_Applied: "19-03-2023",
    },
  ]);
  const [inTouch, setInTouch] = useState([
    {
      candidate_name: "John Doe",
      photo:
        "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80",
      location: "US",
      date_Applied: "19-03-2023",
    },
    {
      candidate_name: "Jane Doe",
      photo:
        "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80",
      location: "US",
      date_Applied: "19-03-2023",
    },
    {
      candidate_name: "Richard Doe",
      photo:
        "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80",
      location: "US",
      date_Applied: "19-03-2023",
    },
    {
      candidate_name: "Nicole Doe",
      photo:
        "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80",
      location: "US",
      date_Applied: "19-03-2023",
    },
  ]);
  const [hired, setHired] = useState([
    {
      candidate_name: "John Doe",
      photo:
        "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80",
      location: "US",
      date_Applied: "19-03-2023",
    },
    {
      candidate_name: "Jane Doe",
      photo:
        "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80",
      location: "US",
      date_Applied: "19-03-2023",
    },
    {
      candidate_name: "Richard Doe",
      photo:
        "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80",
      location: "US",
      date_Applied: "19-03-2023",
    },
    {
      candidate_name: "Nicole Doe",
      photo:
        "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80",
      location: "US",
      date_Applied: "19-03-2023",
    },
  ]);
  const [rejected, setRejected] = useState([
    {
      candidate_name: "John Doe",
      photo:
        "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80",
      location: "US",
      date_Applied: "19-03-2023",
    },
    {
      candidate_name: "Jane Doe",
      photo:
        "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80",
      location: "US",
      date_Applied: "19-03-2023",
    },
    {
      candidate_name: "Richard Doe",
      photo:
        "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80",
      location: "US",
      date_Applied: "19-03-2023",
    },
    {
      candidate_name: "Nicole Doe",
      photo:
        "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80",
      location: "US",
      date_Applied: "19-03-2023",
    },
  ]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <div className="bg-blue-100 px-4 min-h-screen">
        <Modal open={open} onClose={handleClose}>
          <div className="flex h-full justify-center items-center">
            <div className="bg-white rounded-lg px-4 py-2 "></div>
          </div>
        </Modal>
        <div className="pb-4 font-bold text-2xl">Stages</div>
        <div className="grid grid-cols-6 bg-white border-t-2 border-t-blue-500 divide-x-2 text-blue-500 font-semibold text-lg py-1 ">
          <div className="flex justify-center">Sources</div>
          <div className="flex justify-center">Applied</div>
          <div className="flex justify-center">In-touch</div>
          <div className="flex justify-center">Interview</div>
          <div className="flex justify-center">Hired</div>
          <div className="flex justify-center">Rejected</div>
        </div>
        <div className="grid grid-cols-6 pt-4 gap-8 px-4">
          <div className="flex flex-col space-y-2 ">
            {sources &&
              sources.map((item, index) => (
                <div key={index}>
                  <Card
                    name={item.candidate_name}
                    location={item.location}
                    date={item.date_Applied}
                  />
                </div>
              ))}
            <div className="flex py-4 justify-center text-blue-600">
              <div
                onClick={handleOpen}
                className="hover:scale-125 transform transition duration-150"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2.5"
                  stroke="currentColor"
                  class="w-8 h-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-2 ">
            {applied &&
              applied.map((item, index) => (
                <div key={index}>
                  <Card
                    name={item.candidate_name}
                    location={item.location}
                    date={item.date_Applied}
                  />
                </div>
              ))}
            <div className="flex py-4 justify-center text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2.5"
                stroke="currentColor"
                class="w-8 h-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-col space-y-2 ">
            {inTouch &&
              inTouch.map((item, index) => (
                <div key={index}>
                  <Card
                    name={item.candidate_name}
                    location={item.location}
                    date={item.date_Applied}
                  />
                </div>
              ))}
            <div className="flex py-4 justify-center text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2.5"
                stroke="currentColor"
                class="w-8 h-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-col space-y-2 ">
            {interview &&
              interview.map((item, index) => (
                <div key={index}>
                  <Card
                    name={item.candidate_name}
                    location={item.location}
                    date={item.date_Applied}
                  />
                </div>
              ))}
            <div className="flex py-4 justify-center text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2.5"
                stroke="currentColor"
                class="w-8 h-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-col space-y-2 ">
            {hired &&
              hired.map((item, index) => (
                <div key={index}>
                  <Card
                    name={item.candidate_name}
                    location={item.location}
                    date={item.date_Applied}
                  />
                </div>
              ))}
            <div className="flex py-4 justify-center text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2.5"
                stroke="currentColor"
                class="w-8 h-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-col space-y-2 ">
            {rejected &&
              rejected.map((item, index) => (
                <div key={index}>
                  <Card
                    name={item.candidate_name}
                    location={item.location}
                    date={item.date_Applied}
                  />
                </div>
              ))}
            <div className="flex py-4 justify-center text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2.5"
                stroke="currentColor"
                class="w-8 h-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
