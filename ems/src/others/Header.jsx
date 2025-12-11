

const Header = () => {
  return (
    <div className="flex items-end justify-between">
        <h1 className="text-2xl font-medium">Hello <br /> <span className="text-3xl font-semibold">Shahil👋</span></h1>
        <button className="bg-red-600 text-white text-lg font-medium rounded-sm py-2 px-5 cursor-pointer hover:bg-red-800">Log Out</button>
    </div>
  )
}

export default Header