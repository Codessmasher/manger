import cs from "@/images/cs.gif"; // Import the image
import ff from "@/images/ff.jpg"; // Import the image
import Image from "next/image"; // You can still import Image, but you are not using it in this case
import Link from "next/link";
export default function Home() {
  return (
    <main >
      <div className="header flex justify-between m-5">
        <h1 className="text-4xl font-bold">Manger</h1>
        <img className="bg-blend-normal rounded-full"
          src={ff.src}
          alt="burger"
          width={100} // Specify width if needed
          height={130} // Specify height if needed
        />
      </div>
      <h3 className="text-4xl font-bold m-5 text-teal-400 text-center">An Upcoming Food Corner</h3>

      <div className="body flex justify-center w-full bg-blend-lighten">
        <img
          className=""
          src={cs.src} // Access the URL from the imported module
          alt="coming soon"
          width={500} // Specify width if needed
          height={300} // Specify height if needed
        />
      </div>

      <div className="footer text-center">
        <h5 className="m-5">+91-9395531398 | Pathsala | 781325 | Assam</h5>
    <h6>Website Designed By  <Link href="https://github.com/codessmasher" className="text-blue-800">Deepjyoti Das</Link> </h6>
      </div>

    </main>
  );
}
