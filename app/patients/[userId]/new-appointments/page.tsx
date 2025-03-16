import Image from "next/image";

import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { getPatient } from "@/lib/actions/patient.actions";
import * as Sentry from '@sentry/nextjs'


const Appointment = async ({ params }: SearchParamProps) => {
  if (!params?.userId) {
    return <p>Loading...</p>;
  }

  const { userId } = params;
  const patient = await getPatient(userId);

  if (!patient) {
    return <p>Patient not found. Please check the ID.</p>;
  }
  Sentry.setTag("user_view_new-appointments", patient.name);
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
          <Image
            src="/assets/icons/pulsepro-logo.png"
            height={1000}
            width={1000}
            alt="logo"
            className="mb-12 h-10 w-fit"
          />

          <AppointmentForm
            patientId={patient.$id}
            userId={userId}
            type="create"
          />

          <p className="copyright mt-10 py-12">© 2025 PulsePro</p>
        </div>
      </section>

      <Image
        src="/assets/images/appointment-img.png"
        height={1500}
        width={1500}
        alt="appointment"
        className="side-img max-w-[390px] bg-bottom"
      />
    </div>
  );
};

export default Appointment;
