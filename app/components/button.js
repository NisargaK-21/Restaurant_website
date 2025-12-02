export default function Button({ onClick, label }) {
  return (
    <button onClick={onClick} className="w-[150px] h-[50px] border border-white rounded-2xl bg-[#282525] text-white font-semibold shadow-lg hover:bg-[#c2a676] hover:text-black transition duration-300 ease-in-out">
      {label}
    </button>
  );
}




