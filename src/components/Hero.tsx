import { profile } from "@/data/portfolio";
import DownloadIcon from "@/components/icons/DownloadIcon";

export default function Hero() {
  return (
    <section id="home" className="hero-gradient flex items-center">
      <div className="mx-auto max-w-4xl px-6 py-28 sm:py-36">
        <p className="mb-4 flex items-center gap-2 text-sm font-medium text-white">
          <span className="h-1.5 w-1.5 rounded-full bg-white" aria-hidden />
          {profile.role}
        </p>
        <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          {profile.tagline}
        </h1>
        <p className="mt-6 max-w-xl text-base text-white/70">{profile.bio}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition-opacity hover:opacity-90"
          >
            View my work
          </a>
          <a
            href={profile.resumeUrl}
            download
            className="flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            Download Resume
            <DownloadIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
