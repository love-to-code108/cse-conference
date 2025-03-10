import Image from "next/image";
import uemLogo from "../../public/uemLogo.png";

export default function Home() {
  return (
    <div className=" w-[100vw] h-[100vh] bg-white">
      
      
      {/* the wrapper */}
      <div className=" flex justify-center items-center w-[100%] h-[94%]">
        
        
        {/* uem logo */}
        <div>
          <Image src={uemLogo} alt="Logo of UEM" />
        </div>
        
        
        
        {/* writing wrapper */}
        <div className=" flex flex-col w-[39rem] ml-12">
        {/* international conference on ai ml and blockchain */}
        <div className=" text-4xl mb-8">
          <h1>International Conference on AIML and Blockchain</h1>
        </div>
        
        
        {/* the line */}
        <div className="w-[100%] h-[2px] bg-[#BBBABA] mb-4"></div>
        
        
        
        {/* the paragraph */}
        <div className=" text-[#A3A3A3]">
          <p className=" mb-4">Our website is currently under development as we work to enhance your experience. We appreciate your patience and look forward to unveiling a refined platform soon. Stay tuned for updates!</p>
          
          
          <p>Copyright ©2025</p>
        </div>
        </div>
        
        
        
      </div>
      
      
      
      
      
      
      
      
      
      {/* the coming soon writing */}
      <div className=" w-[100%] flex justify-center">
        <h1 className=" text-3xl">Coming Soon</h1>
      </div>
      
    </div>
  );
}
