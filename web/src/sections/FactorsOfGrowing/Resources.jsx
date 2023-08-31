function Resource({ children }) {
  return (
    <li className="p-4 w-32 h-32 flex items-center justify-center text-center border transition-all hover:bg-slate-400 cursor-pointer">
      {children}
    </li>
  );
}

function Resources() {
  return (
    <ul className="flex gap-10 flex-col pl-5 w-full items-center pt-12">
      <Resource>Water</Resource>
      <Resource>Sun</Resource>
      <Resource>Tree proximity</Resource>
    </ul>
  );
}
export default Resources;
