import RegisterForm from "@/components/forms/RegisterForm";
import { getuser } from "@/lib/actions/patient.actions";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = async ({ params: { userId } }: SearchParamProps) => {
    const user = await getuser(userId);

    return (
        <div className="flex h-screen max-h-screen">
            <section className="remove-scrollbar container">
                <div className="sub-container max-w-[860px] py-10">
                    <Image
                        src="/assets/icons/logo-full.svg"
                        height={1000}
                        width={1000}
                        alt="patient"
                        className="mb-12 h10 w-fit"
                    />

                    <RegisterForm user={user} />

                    <p className="copyright py-12">© 2024 CarePulse</p>
                </div>
            </section>

            <Image
                src="/assets/images/register-img.png"
                height={1000}
                width={1000}
                alt="patient"
                className="side-img max-w-[390px]"
            />
        </div>
    );
};

export default page;
