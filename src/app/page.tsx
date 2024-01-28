import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col md:mx-60 mx-8">
      <div className="flex flex-col items-center text-center justify-center py-16 md:flex-row md:space-x-20 md:text-left">
        <div className="mb-20">
          <Image
            src="/headshot.jpg"
            alt="Hero Image"
            className="rounded-full shadow-2xl"
            width={300}
            height={300}
          />
        </div>

        <div className="">
          <p className="text-lg text-gray-600">
            I&#39;m a student at Brown University. Here&#39;s something about
            myself. I love little{" "}
            <Link
              href="/projects"
              className="font-semibold text-primary-600 hover:underline"
            >
              rats
            </Link>
            .
          </p>
          <br />
          <p className="text-lg text-gray-600">
            I&#39;m a student at Brown University. Here&#39;s something about
            myself. I love little{" "}
            <Link
              href="/projects"
              className="font-semibold text-primary-600 hover:underline"
            >
              rats
            </Link>
            .
          </p>
        </div>
      </div>

      {/* TODO: skills section for recruiting, pubs for research */}
      <div className="flex md:px-20 px-2 pb-80">
        <h2 className="text-2xl font-bold text-primary-600">Skills</h2>
      </div>
    </main>
  );
}
