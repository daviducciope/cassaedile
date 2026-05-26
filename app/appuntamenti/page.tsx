import { AppointmentBooking } from "@/components/appointment-booking";
import { SectionHeader } from "@/components/ui";

export default function AppuntamentiPage() {
  return (
    <div className="container-shell py-10">
      <SectionHeader
        eyebrow="Appuntamenti"
        title="Prenotazione appuntamento"
        description="Selezione di ufficio, data e fascia oraria con conferma immediata lato frontend."
      />
      <div className="mt-8">
        <AppointmentBooking />
      </div>
    </div>
  );
}
