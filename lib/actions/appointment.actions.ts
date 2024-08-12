"use server";

import { ID, Query } from "node-appwrite";
import {
    APPOINTMENT_COLLECTION_ID,
    DATABASE_ID,
    databases,
} from "../appwrite.config";
import { parseStringify } from "../utils";
import { Appointment } from "@/types/appwrite.types";
import { revalidatePath } from "next/cache";

export const createAppointment = async (
    appointment: CreateAppointmentParams
) => {
    try {
        const newAppointment = await databases.createDocument(
            DATABASE_ID!,
            APPOINTMENT_COLLECTION_ID!,
            ID.unique(),
            appointment
        );

        return parseStringify(newAppointment);
    } catch (error) {
        console.error(error);
    }
};

export const getAppointment = async (appointmentId: string) => {
    try {
        const appointment = await databases.getDocument(
            DATABASE_ID!,
            APPOINTMENT_COLLECTION_ID!,
            appointmentId
        );

        return parseStringify(appointment);
    } catch (error) {
        console.error(error);
    }
};

export const getRecentAppointmentList = async () => {
    try {
        const appointments = await databases.listDocuments(
            DATABASE_ID!,
            APPOINTMENT_COLLECTION_ID!,
            [Query.orderDesc("$createdAt")]
        );

        const initialCounts = {
            scheduledCount: 0,
            pendingCount: 0,
            cancelledCount: 0,
        };

        const counts = (appointments.documents as Appointment[]).reduce(
            (acc, appointment) => {
                switch (appointment.status) {
                    case "scheduled":
                        acc.scheduledCount += 1;
                        break;
                    case "pending":
                        acc.pendingCount += 1;
                        break;
                    case "cancelled":
                        acc.cancelledCount += 1;
                        break;
                }

                return acc;
            },
            initialCounts
        );

        const data = {
            totalCount: appointments.total,
            ...counts,
            documents: appointments.documents,
        };

        return parseStringify(data);
    } catch (error) {}
};

export const updateAppointment = async ({
    appointmentId,
    userId,
    appointment,
    type,
}: UpdateAppointmentParams) => {
    try {
        const updatedAppointment = await databases.updateDocument(
            DATABASE_ID!,
            APPOINTMENT_COLLECTION_ID!,
            appointmentId,
            appointment
        );

        if (!updatedAppointment) {
            throw new Error("Appointment no found");
        }

        // TODO SMS confirmation

        revalidatePath("/admin");
        return parseStringify(updateAppointment);
    } catch (error) {
        console.error(error);
    }
};
