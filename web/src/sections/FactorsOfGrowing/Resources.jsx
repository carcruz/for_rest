function Resource({ children }) {
  return (
    <li className="p-4 w-24 h-24 flex items-center justify-center text-center border transition-all hover:bg-slate-400 cursor-pointer">
      {children}
    </li>
  );
}

function Resources() {
  return (
    <ul className="flex gap-2 flex-col pl-5 ">
      <Resource>Water</Resource>
      <Resource>Sun</Resource>
      <Resource>Tree proximity</Resource>
    </ul>
  );
}
export default Resources;
