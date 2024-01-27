import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className=" nav flex w-[1536px] gap-5 pt-[15px] pl-[35px]">
    <div className="w-[30px] bg-slate-700 rounded-3xl text-center pt-1 mb-[5px]">
    ⬇
    </div>
      <NavLink className="flex justify-between pr-4 pb-2 items-center pt-[5px] h-[35px] w-[200px] pl-[20px]" to={"/"}>
        Life  
      </NavLink>
      <div className="h-[30px] bg-slate-50 w-[2px]"></div>
      <NavLink className="flex justify-between items-center pr-4 pb-2 pt-[5px] h-[35px] w-[200px] pl-[20px]" to={"/g.o.a.t"}>
        Cristiano 
      </NavLink>
      <div className="h-[30px] bg-slate-50 w-[2px]"></div>

      <NavLink className=" flex justify-between items-center pr-4 pb-2 pt-[5px] h-[35px] w-[200px] pl-[20px]" to={"/neymar"}>
        Neymar 
      </NavLink>
      <div className=" h-[30px] bg-slate-50 w-[2px]"></div>

      <NavLink className=" flex justify-between items-center pr-4 pb-2 pt-[5px] h-[35px] w-[200px] pl-[20px]" to={"/football"}>
        Football 
      </NavLink>
    </div>
  );
}

export default Navbar;
