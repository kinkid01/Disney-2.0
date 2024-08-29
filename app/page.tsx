import MoviesCarousel from "@/components/MoviesCarousel";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col space-y-2 xl:-mt-48">
        <MoviesCarousel />
      </div>
    </main>
  );
}
