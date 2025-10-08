import HomeContent from "../components/home-content";

export default function Home() {
  return (
    <>
    <div className="flex w-screen justify-end items-center">
      <HomeContent/>
      <img className="h-90" src="/themewagon/1.home/illustration1.png" alt="illustration1" />
    </div>
    <div className="flex gap-6 justify-around items-center border-t-2 border-b-2 border-gray-100 py-4 mt-10">
        <img className="w-30" src="/themewagon/1.home/google.png" alt="google" />
        <img className="w-30"  src="/themewagon/1.home/netflix.png" alt="netflix" />
        <img className="w-30"  src="/themewagon/1.home/microsoft.png" alt="microsoft" />
        <img className="w-30"  src="/themewagon/1.home/mailbuster.png" alt="mailbuster" />
        <img className="w-30"  src="/themewagon/1.home/themewagon.png" alt="themewagon" />
    </div>
    </>
  )
}
