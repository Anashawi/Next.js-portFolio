import { Button } from "@/components/shadcn/ui/button";
import Social from "../components/Social";
import { FiDownload } from "react-icons/fi";
import Photo from "../components/Photo";
import { Stats } from "@/components/Stats";
function Home() {
  return (
    <section className="h-full">
      <div className="container h-full mx-auto">
        <div className="flex flex-col items-center justify-between xl:flex-row xl:pt-8 xl:pb-24 ">
          <div className="order-2 text-center xl:text-left xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="mb-6 h1">
              Hello I'm <br></br>
              <span className="text-accent">Anas Hawi</span>
            </h1>
            <p className="mb-9 max-w-[500px] text-white/80 ">
              Motivated Junior Web Developer with a strong foundation in web
              technologies. Committed to creating dynamic and user-friendly
              websites through continuous learning and creativity
              Problem-solving and Troubleshooting <br></br> Enjoy helping people
              <br></br>solution focus
            </p>
            <div className="flex flex-col items-center gap-8 xl:flex-row">
              <Button
                variants="outline"
                size="lg"
                className="flex items-center gap-2 uppercase"
              >
                <a href="/AnasAlhawi.pdf" download={"/AnasAlhawi.pdf"}>
                  Download CV
                </a>

                <FiDownload className="text-xl"></FiDownload>
              </Button>
              <div className="mb-8 xl:mb:0">
                <Social
                  containerStyle="flex gap-6 xl:mt-8"
                  iconStyle="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                ></Social>
              </div>
            </div>
          </div>
          <div className="order-1 mb-32 xl:order-none xl:mb:0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats></Stats>
    </section>
  );
}

export default Home;
