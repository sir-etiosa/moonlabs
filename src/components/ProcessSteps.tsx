import { processSteps } from "@/lib/config";

export default function ProcessSteps() {
  return (
    <ol className="grid gap-6 md:grid-cols-4">
      {processSteps.map((step, i) => (
        <li key={step.title} className="flex flex-col gap-2">
          <span className="mono-label text-[var(--gold)]">0{i + 1}</span>
          <h3 className="text-base font-semibold text-[var(--ink)]">{step.title}</h3>
          <p className="text-sm text-[var(--dim)]">{step.description}</p>
        </li>
      ))}
    </ol>
  );
}
