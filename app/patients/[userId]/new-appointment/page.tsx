import { Button } from "@/components/ui/button";
import Image from "next/image";
import logoFull from "@/public/assets/icons/logo-full.svg";
import Link from "next/link";
import AppointmentForm from "@/components/forms/AppointmentForm";
import { getPatient } from "@/lib/actions/patient.actions";

const page = async ({ params: { userId } }: SearchParamProps) => {
    const patient = await getPatient(userId);

    return (
        <div className="flex h-screen max-h-screen">
            <section className="remove-scrollbar container">
                <div className="sub-container max-w-[860px]">
                    <Image
                        src={logoFull}
                        height={1000}
                        width={1000}
                        alt="patient"
                        className="mb-12 h10 w-fit"
                    />

                    <AppointmentForm
                        type="create"
                        userId={userId}
                        patientId={patient.$id}
                    />

                    <p className="py-12 copyright">© 2024 CarePulse</p>
                </div>
            </section>

            <Image
                src="/assets/images/appointment-img.png"
                height={1000}
                width={1000}
                alt="patient"
                className="side-img max-w-[390px] bg-bottom"
            />
        </div>
    );
};

export default page;
