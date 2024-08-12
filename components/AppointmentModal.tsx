"use client";

import React, { useState } from "react";
import { Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Appointment } from "@/types/appwrite.types";
import AppointmentForm from "./forms/AppointmentForm";

const AppointmentModal = ({
    type,
    patientId,
    userId,
    appointment,
    title,
    description,
}: {
    type: "schedule" | "cancel";
    patientId: string;
    userId: string;
    appointment?: Appointment;
    title: string;
    description: string;
}) => {
    const [open, setOpen] = useState(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button
                    variant="ghost"
                    className={`capitalize ${
                        type === "schedule" && "text-green-500"
                    }`}
                >
                    {type}
                </Button>
            </DialogTrigger>
            <DialogContent className="shad-dialog sm:max-w-md">
                <DialogHeader className="mb-4 space-y-3">
                    <DialogTitle className="capitalize">
                        {type} Appointment
                    </DialogTitle>
                    <DialogDescription>
                        Please fill in the following details to {type} an
                        appointment
                    </DialogDescription>
                </DialogHeader>

                <AppointmentForm
                    userId={userId}
                    patientId={patientId}
                    type={type}
                    appointment={appointment}
                    setOpen={setOpen}
                />
            </DialogContent>
        </Dialog>
    );
};

export default AppointmentModal;
