import React from 'react'

const App = () => {
  return (
    <div className=" mt-3 mb-3 ml-5 mr-5 border border-black flex flex-col h-full">
      <div className="flex flex-row h-16 bg-white border-b border-black">
        <div className="w-1/3 p-4 border-r border-black">Lorem ipsum</div>
        <div className=" w-1/2 p-4 text-end">link</div>
      </div>

      <div className="flex flex-row h-80 bg-white border-b border-black ">
        <div className="flex w-1/2 p-4 border-r border-black justify-items-center items-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et voluptate
          exercitationem labore,
        </div>
        <div className="w-1/2 p-4"></div>
      </div>

      <div className="flex h-36 bg-white p-4 border-black">footer</div>
    </div>
  );
}

export default App