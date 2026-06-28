
import Container from "../Layout/Container";
import { MdLocalParking } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

const Topbar = () => {
  return (
    <div className="border-b border-[#999999]">
        <Container>
            <div className="flex justify-between py-[13px]">
                <div className="font-pop flex items-center gap-1"> <MdLocalParking/> Store Location: Lincoln-  344, Illinois, Chicago, USA</div>
                <div className="flex gap-2.5">
                    <div className="flex items-center relative"> <IoIosArrowDown/> USD</div>
                    <div className="absolute top-[50px] hidden">
                        <ul className="bg-[#7a7979] w-[70px] text-center py-[10px]">
                            <li className="bg-[red] mb-[10px] " >home</li>
                            <li className="bg-[red] mb-[10px] ">home</li>
                            <li className="bg-[red] mb-[10px] ">home</li>
                            <li className="bg-[red] mb-[10px] ">home</li>
                        </ul>
                    </div>
                    <div className="flex items-center"> <IoIosArrowDown/> Eng</div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Topbar