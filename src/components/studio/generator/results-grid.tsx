import ResultCard from "@/components/studio/generator/result-card";
import type { GenerationJob } from "@/types/studio";

/** Same grid metrics as the anime favorite/genre pages, so the two surfaces line up. */
export default function ResultsGrid({ jobs }: { jobs: GenerationJob[] }) {
  return (
    <section>
      <h2 className="text-base font-medium text-foreground sm:text-lg">Recent generations</h2>
      <div className="mt-3 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {jobs.map((job) => (
          <ResultCard key={job.id} job={job} />
        ))}
      </div>
    </section>
  );
}
