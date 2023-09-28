import { Navbar } from "@/components";

export default function Profile() {
  return (
    <div className="bg-[url('/img/profile_bg.png')] bg-cover min-h-screen">
      <Navbar></Navbar>
      <div className="flex flex-col justify-center px-10">
        <div className="flex justify-center items-center">
          <img
            src="/img/self_img.png"
            width={320}
            height={320}
            className="drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)] p-10"
          ></img>
        </div>
        <div className="flex justify-center space-x-60 py-10 md:flex-row">
          <div className="flex-col">
            <h1 className="flex justify-center font-bold text-3xl">Nama</h1>
            <p className="text-3xl text-center">Keysa Anadea Aqiva Ajie</p>
          </div>
          <div className="flex-col hidden md:flex">
            <h1 className="flex justify-center font-bold text-3xl">TTL</h1>
            <p className="text-3xl text-center">Bojonegoro, 18 April 2003</p>
          </div>
        </div>
        <div className="flex justify-center items-center py-10 md:hidden">
          <div className="flex-col">
            <h1 className="flex justify-center font-bold text-3xl">TTL</h1>
            <p className="text-3xl text-center">Bojonegoro, 18 April 2003</p>
          </div>
        </div>
        <div className="flex justify-center py-10 items-center">
          <div className="flex-col">
            <h1 className="flex justify-center font-bold text-3xl">Fun Fact</h1>
            <p className="text-3xl text-center">Suka Detective Conan</p>
          </div>
        </div>
        <div className="flex justify-center items-center py-10 space-x-10">
          <a href="">
            <img className="w-10" src="/img/logos_google-gmail.png"></img>
          </a>
          <a href="https://www.instagram.com/keysanadea/">
            <img className="w-10" src="/img/skill-icons_instagram.png"></img>
          </a>
          <a href="https://www.linkedin.com/in/keysaanadea/">
            <img className="w-10" src="/img/skill-icons_linkedin.png"></img>
          </a>
        </div>
      </div>
    </div>
  );
}
