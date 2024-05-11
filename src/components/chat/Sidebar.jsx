import { BsChat } from "react-icons/bs";
import { FaArchway, FaWrench } from "react-icons/fa";
import { FaRegPenToSquare } from "react-icons/fa6";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoIosArrowBack } from "react-icons/io";
import { IoShareSocial } from "react-icons/io5";
import { MdCameraAlt } from "react-icons/md";
import { RiGitRepositoryPrivateFill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
const Sidebar = () => {
  return (
    <section className="">
      <div className="flex items-center justify-between py-2">
        <div className="flex items-center gap-1">
          <IoIosArrowBack />
          <p>Chats</p>
          <p>img:3</p>
          <p>msg:</p>
        </div>
        <div className="flex items-center gap-2">
          <HiOutlineDotsVertical />
          <FaWrench />
          <FaArchway />
          <FaRegPenToSquare />
          <RxCross2 />
        </div>
      </div>
      <div className="relative">
        <img
          className="rounded-md"
          src="https://i.ibb.co/VBZpH4F/granma.jpg"
          alt="user image"
        />
        <div className="absolute bottom-0 left-0 bg-second opacity-60 w-full">
         <div className="ml-6 p-3">
         <p className="text-sm">Jessica Anderson</p>
          <p className="text-xs">@jessica-anderson-2</p>
         </div>
        </div>
      </div>
      <div className="bg-[#4d1022] p-2.5">
        <div className="flex justify-between items-center bg-second p-2 rounded-md">
          <div className="flex items-center gap-1">
            <h1 className="flex items-center">
              <MdCameraAlt />0
            </h1>
            <h1 className="flex items-center">
              <BsChat />6
            </h1>
          </div>
          <div className="flex items-center gap-1">
            <RiGitRepositoryPrivateFill />
            <p className="text-xs">Make Character Public</p>
            <IoShareSocial />
          </div>
        </div>
        <div className="grid grid-cols-3 bg-second mt-4 py-4">
          <div className="col-span-1">
            <div className="flex flex-col justify-start px-1 text-xs">
              <h1 className="text-sm font-semibold">Who am I</h1>
              <div className="mt-2">
                <h3 className="font-semibold">Personality</h3>
                <h4>CareGiver</h4>
              </div>
              <div>
                <h3 className="font-semibold">Work</h3>
                <h3>Instructor</h3>
              </div>
              <div className="my-2">
                <h3 className="font-bold">Hobbies</h3>
                <h3>Anime Fun</h3>
              </div>
              <div className="mb-2">
                <h3 className="font-semibold">Relationship</h3>
                <h3>Friend</h3>
              </div>
            </div>
          </div>
          <div className="col-span-2 px-1">
            <div className="flex justify-between items-center">
              <div className="text-sm font-semibold">About me</div>
              <div>
                <FaRegPenToSquare />
              </div>
            </div>
            <div className="text-xs pt-2">
              <p>
                21 year old anime lover and yoga instructor. I binch watch
                anime.Looking for someone to join me on downward dog and anime
                marathons.Fun fact I can recite the entire script. Lets
                chat!🧘💕🎀
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Sidebar;
