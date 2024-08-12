import { Button } from "@/components/ui/button";
import Image from "next/image";
import logoFull from "@/public/assets/icons/logo-full.svg";
import onboardingImg from "@/public/assets/images/onboarding-img.png";
import PatientForm from "@/components/forms/PatientForm";
import Link from "next/link";
import PassKeyModal from "@/components/PassKeyModal";

export default function Home({ searchParams }: SearchParamProps) {
    const isAdmin = searchParams.admin === "true";

    return (
        <div className="flex h-screen max-h-screen">
            {isAdmin && <PassKeyModal />}

            <section className="remove-scrollbar container">
                <div className="sub-container max-w-[496px]">
                    <Image
                        src={logoFull}
                        height={1000}
                        width={1000}
                        alt="patient"
                        className="mb-12 h10 w-fit"
                    />

                    <PatientForm />

                    <div className="text-14-regular py-10 flex justify-between">
                        <p className="justify-items-end text-dark-600 xl:text-left">
                            © 2024 CarePulse
                        </p>
                        <Link href={"/?admin=true"} className="text-green-500">
                            Admin
                        </Link>
                    </div>
                </div>
            </section>

            <Image
                src={onboardingImg}
                height={1000}
                width={1000}
                alt="patient"
                className="side-img max-w-[50%]"
            />
        </div>
    );
}
