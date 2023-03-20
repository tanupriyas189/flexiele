import { useState } from "react";
// const Card = dynamic(() => import("./components/card"));
import Card from "./components/card";
import { Modal } from "@mui/material";
import Input from "./components/Input";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
function App() {
  const [data, setData] = useState([
    [
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
    ],
    [
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
    ],
    [
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
    ],
    [
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
    ],
    [
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
    ],
    [
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
    ],
  ]);
  const [open, setOpen] = useState(-1);
  const handleClose = () => setOpen(-1);
  const [name, setName] = useState();
  const [date, setDate] = useState();
  const [location, setLocation] = useState();
  const onSubmit = () => {
    data[open].push({
      candidate_name: name,
      photo:
        "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80",
      location: location,
      date_Applied: date,
    });
    setOpen(-1);
  };

  const handleDrop = (result) => {
    const { destination, source } = result;
  };
  return (
    <>
      <div className="bg-blue-100 px-4 min-h-screen">
        <DragDropContext onDragEnd={handleDrop}>
          {/* Multilist Drop */}
          <Modal open={open === -1 ? false : true} onClose={handleClose}>
            <div className="flex h-full justify-center items-center">
              <div className="bg-white rounded-lg px-4 py-2 ">
                <div className="flex  items-center justify-between ">
                  <h1 className="font-bold text-xl">Create</h1>
                  <div
                    className="rotate-45 bg-gray-200 p-2 rounded-full hover:scale-105 transform transition duration-150"
                    onClick={handleClose}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col">
                  {/* form */}
                  <Input label="Name" type="text" setValue={setName} />
                  <Input label="Location" type="text" setValue={setLocation} />
                  <Input label="Date" type="date" setValue={setDate} />
                  <div
                    onClick={onSubmit}
                    className="bg-blue-500 text-white flex items-center justify-center rounded-lg shadow-md active:shadow-sm active:scale-95 transition transfrom py-2 px-4 mt-2"
                  >
                    Submit
                  </div>
                </div>
              </div>
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
            {data.map((stageData, index0) => (
              <Droppable droppableId={`${index0}`}>
                {(droppableProvided, droppableSnapshot) => (
                  <div
                    key={`${index0}`}
                    className="flex flex-col space-y-2 "
                    ref={droppableProvided.innerRef}
                    {...droppableProvided.droppableProps}
                  >
                    {stageData &&
                      stageData.map((item, index1) => (
                        <Draggable
                          key={`${item.candidate_name}`}
                          draggableId={`${index1}`}
                          index={index1}
                        >
                          {(draggableProvided, draggableSnapshot) => (
                            <div
                              key={index1}
                              ref={draggableProvided.innerRef}
                              {...draggableProvided.draggableProps}
                              {...draggableProvided.dragHandleProps}
                            >
                              <div className="bg-white px-4 py-2 shadow-md rounded-lg flex space-x-2 w-full text-sm">
                                {/* card */}
                                <div className="h-6 w-6 rounded-full bg-gray-300"></div>
                                <div>
                                  <h1>{item.candidate_name}</h1>
                                  <div className="flex space-x-2 w-full">
                                    <h2>{item.location}</h2>
                                    <h2>{item.date_Applied}</h2>
                                  </div>
                                </div>
                              </div>
                              {/* <Card
                                key={index1}
                                name={item.candidate_name}
                                location={item.location}
                                date={item.date_Applied}
                              /> */}
                            </div>
                          )}
                        </Draggable>
                      ))}

                    <div className="flex py-4 justify-center text-blue-600">
                      <div
                        onClick={() => {
                          setOpen(index0);
                          console.log(index0);
                        }}
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
                )}

                {droppableProvided.placeholder}
              </Droppable>
            ))}
          </div>
        </DragDropContext>
      </div>
    </>
  );
}

export default App;
