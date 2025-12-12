const CreateTask = () => {
  return (
    <div>
           <form className="flex items-start w-full flex-wrap justify-between bg-[#1c1c1c] p-6 rounded-xl shadow-md gap-5">


                {/* LEFT SIDE */}
                <div className="w-1/2 flex flex-col gap-5">


                    <div className="flex flex-col gap-1">
                        <h3 className="text-gray-700 font-medium">Task Title</h3>
                        <input
                            type="text"
                            placeholder="Make UI Design"
                            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
                        />
                    </div>


                    <div className="flex flex-col gap-1">
                        <h3 className="text-gray-700 font-medium">Date</h3>
                        <input
                            type="date"
                            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
                        />
                    </div>


                    <div className="flex flex-col gap-1">
                        <h3 className="text-gray-700 font-medium">Assign to</h3>
                        <input
                            type="text"
                            placeholder="Employee name"
                            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
                        />
                    </div>


                    <div className="flex flex-col gap-1">
                        <h3 className="text-gray-700 font-medium">Category</h3>
                        <input
                            type="text"
                            placeholder="dev, design etc"
                            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
                        />
                    </div>
                </div>


                {/* RIGHT SIDE */}
                <div className="w-[45%] flex flex-col gap-5">
                    <div className="flex flex-col gap-1">
                        <h3 className="text-gray-700 font-medium">Description</h3>
                        <textarea
                            cols={30}
                            rows={10}
                            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none resize-none"
                        ></textarea>
                    </div>

                    <button
                        className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-all"
                    >
                        Create Task
                    </button>
                </div>


            </form>
    </div>
  )
}

export default CreateTask