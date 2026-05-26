import { faqs } from "@/data/demo";

export function FaqList() {
  return (
    <div className="grid gap-3">
      {faqs.map((faq) => (
        <details key={faq.question} className="rounded-lg border bg-white p-4">
          <summary className="cursor-pointer text-sm font-bold">{faq.question}</summary>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
