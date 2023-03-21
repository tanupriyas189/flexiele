import { useState } from "react";
// const Card = dynamic(() => import("./components/card"));
import Card from "./components/card";
import { Modal } from "@mui/material";
import Input from "./components/Input";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";
function App() {
  const [stagesOrder, setStagesOrder] = useState([
    "Source",
    "Applied",
    "In-touch",
    "Interview",
    "Hired",
    "Rejected",
  ]);
  const [stages, setStages] = useState({
    Source: {
      id: "Source",
      title: "Source",
      entries: [
        {
          id: 1,
          candidate_name: "John Doe",
          photo:
            "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80",
          location: "US",
          date_Applied: "19-03-2023",
        },
        {
          id: 2,
          candidate_name: "Jane Doe",
          photo:
            "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80",
          location: "US",
          date_Applied: "19-03-2023",
        },
      ],
    },
    Applied: {
      id: "Applied",
      title: "Applied",
      entries: [
        {
          id: 3,
          candidate_name: "Richard Doe",
          photo:
            "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80",
          location: "US",
          date_Applied: "19-03-2023",
        },
        {
          id: 4,
          candidate_name: " Nicole Doe",
          photo:
            "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80",
          location: "US",
          date_Applied: "19-03-2023",
        },
      ],
    },
    "In-touch": {
      id: "In-touch",
      title: "In-touch",
      entries: [
        {
          id: 5,
          candidate_name: "Phoebe Buffay",
          photo:
            "https://upload.wikimedia.org/wikipedia/en/f/f6/Friendsphoebe.jpg",
          location: "US",
          date_Applied: "19-03-2023",
        },
        {
          id: 6,
          candidate_name: "Monica Geller ",
          photo: "https://home.adelphi.edu/~ni21572/Monica.jpg",
          location: "US",
          date_Applied: "19-03-2023",
        },
      ],
    },
    Interview: {
      id: "Interview",
      title: "Interview",
      entries: [
        {
          id: 7,
          candidate_name: "Chandler Bing",
          photo:
            "https://pyxis.nymag.com/v1/imgs/079/792/3ed0d94be0a9bd3d023f00532889bab152-30-chandler-bing.rsquare.w330.jpg",
          location: "US",
          date_Applied: "19-03-2023",
        },
        {
          id: 8,
          candidate_name: "Rachel Green",
          photo:
            "https://pyxis.nymag.com/v1/imgs/47c/71a/130bf1e557e534b3f2be3351afc2ecf952-17-rachel-green-jewish.rsquare.w700.jpg",
          location: "US",
          date_Applied: "19-03-2023",
        },
      ],
    },
    Hired: {
      id: "Hired",
      title: "Hired",
      entries: [
        {
          id: 9,
          candidate_name: "Ross Geller",
          photo:
            "https://metro.co.uk/wp-content/uploads/2019/09/PRI_85461411.jpg?quality=90&strip=all&zoom=1&resize=480%2C580",
          location: "US",
          date_Applied: "19-03-2023",
        },
        {
          id: 10,
          candidate_name: "Barney Stinson",
          photo:
            "https://media.gq.com/photos/55828b3f1177d66d68d5287c/1:1/w_450,h_450,c_limit/blogs-the-feed-how-i-met-your-mother-barney-stinson.jpg",
          location: "US",
          date_Applied: "19-03-2023",
        },
      ],
    },
    Rejected: {
      id: "Rejected",
      title: "Rejected",
      entries: [
        {
          id: 11,
          candidate_name: "Joey Tribbiani",
          photo:
            "https://media.licdn.com/dms/image/C4E03AQGa_ooZIkytEw/profile-displayphoto-shrink_800_800/0/1640261279530?e=2147483647&v=beta&t=9-s7Xe1KGZm3fAM_c7s_jGmsBTqFGWU4_mP5kr4siZk",
          location: "US",
          date_Applied: "19-03-2023",
        },
        {
          id: 12,
          candidate_name: "Ted Mosby",
          photo:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO90QSoFPktYHLD9ZmFvebCzB38QUmcFme9rXC4Uqv&s",
          location: "US",
          date_Applied: "19-03-2023",
        },
      ],
    },
  });

  const [open, setOpen] = useState(null);
  const handleClose = () => setOpen(null);
  const [name, setName] = useState();
  const [date, setDate] = useState();
  const [location, setLocation] = useState();
  const [image, setImage] = useState();
  const onSubmit = () => {
    const newStages = {
      ...stages,
    };
    newStages[open].entries.push({
      id: uuidv4(),
      candidate_name: name,
      photo: image,
      location: location,
      date_Applied: date,
    });
    setOpen(null);
  };

  const handleDrop = (result) => {
    const { destination, source } = result;
    // if dropped outside column
    if (!destination) return;
    // if dropped within same column at same postion
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;
    // if within same column at diferent position
    const sourceCol = stages[source.droppableId];
    const destinationCol = stages[destination.droppableId];

    if (sourceCol.id === destinationCol.id) {
      const newCol = reorderColumnList(
        sourceCol,
        source.index,
        destination.index
      );
      const newStages = {
        ...stages,
        [newCol.id]: newCol,
      };
      setStages(newStages);
      return;
    }
    // if dropped in different column
    const startColumnEntries = Array.from(sourceCol.entries);
    const [removed] = startColumnEntries.splice(source.index, 1);
    const newStartCol = {
      ...sourceCol,
      entries: startColumnEntries,
    };
    const endColumnEntries = Array.from(destinationCol.entries);
    endColumnEntries.splice(destination.index, 0, removed);
    const newEndCol = {
      ...destinationCol,
      entries: endColumnEntries,
    };
    const finalStages = {
      ...stages,
      [newStartCol.id]: newStartCol,
      [newEndCol.id]: newEndCol,
    };
    setStages(finalStages);
  };
  const reorderColumnList = (sourceCol, startIndex, endIndex) => {
    const newEntries = Array.from(sourceCol.entries);
    const [removed] = newEntries.splice(startIndex, 1);

    newEntries.splice(endIndex, 0, removed);

    const newColumn = { ...sourceCol, entries: newEntries };
    return newColumn;
  };
  return (
    <>
      <div className="bg-blue-100 px-4 min-h-screen">
        {/* Multilist Drop */}
        <Modal open={open === null ? false : true} onClose={handleClose}>
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
                <Input label="Image Url" type="text" setValue={setImage} />
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
          {stagesOrder.map((item) => (
            <div className="flex justify-center">{item}</div>
          ))}
        </div>
        <DragDropContext onDragEnd={handleDrop}>
          <div className="grid grid-cols-6 pt-4 gap-8 px-4">
            {stagesOrder.map((stageData, index0) => (
              <Droppable droppableId={`${stageData}`}>
                {(droppableProvided, droppableSnapshot) => (
                  <div
                    key={index0}
                    className="flex flex-col space-y-2 "
                    ref={droppableProvided.innerRef}
                    {...droppableProvided.droppableProps}
                  >
                    {stages[stageData]["entries"].map((item, index1) => (
                      <Draggable
                        key={`${item.id}`}
                        draggableId={`${item.id}`}
                        index={index1}
                      >
                        {(draggableProvided, draggableSnapshot) => (
                          <div
                            key={item.id}
                            ref={draggableProvided.innerRef}
                            {...draggableProvided.draggableProps}
                            {...draggableProvided.dragHandleProps}
                          >
                            <Card
                              stageData={stageData}
                              key={index1}
                              name={item.candidate_name}
                              location={item.location}
                              date={item.date_Applied}
                              image={item.photo}
                            />
                          </div>
                        )}
                      </Draggable>
                    ))}

                    <div className="flex py-4 justify-center text-blue-600">
                      <div
                        onClick={() => {
                          setOpen(stageData);
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

                {/* {droppableProvided.placeholder} */}
              </Droppable>
            ))}
          </div>
        </DragDropContext>
      </div>
    </>
  );
}

export default App;
