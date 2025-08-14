"use client";

import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useState } from "react";

interface ContactFormValues {
	name: string;
	email: string;
	phone?: string;
	message: string;
}

export default function ContactForm() {
	const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactFormValues>();
	const [status, setStatus] = useState<string | null>(null);

	const onSubmit = async (data: ContactFormValues) => {
		setStatus(null);
		try {
			const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
			const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
			const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;
			if (!serviceId || !templateId || !publicKey) {
				throw new Error("EmailJS env vars are missing");
			}
			await emailjs.send(serviceId, templateId, { name: data.name, email: data.email, phone: data.phone ?? "", message: data.message }, { publicKey });
			setStatus("Message sent successfully. We'll get back to you soon.");
			reset();
		} catch {
			setStatus("Failed to send message. Please try again later.");
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
			<div className="grid gap-4 sm:grid-cols-2">
				<div>
					<label className="text-sm font-medium">Name</label>
					<input className="mt-1 w-full rounded-md border px-3 py-2 bg-background" {...register("name", { required: true })} />
					{errors.name && <p className="text-xs text-red-600 mt-1">Name is required</p>}
				</div>
				<div>
					<label className="text-sm font-medium">Email</label>
					<input type="email" className="mt-1 w-full rounded-md border px-3 py-2 bg-background" {...register("email", { required: true })} />
					{errors.email && <p className="text-xs text-red-600 mt-1">Email is required</p>}
				</div>
			</div>
			<div>
				<label className="text-sm font-medium">Phone</label>
				<input className="mt-1 w-full rounded-md border px-3 py-2 bg-background" {...register("phone")} />
			</div>
			<div>
				<label className="text-sm font-medium">Message</label>
				<textarea rows={5} className="mt-1 w-full rounded-md border px-3 py-2 bg-background" {...register("message", { required: true })} />
				{errors.message && <p className="text-xs text-red-600 mt-1">Message is required</p>}
			</div>
			<div className="pt-2">
				<button disabled={isSubmitting} type="submit" className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-white font-medium disabled:opacity-50">
					{isSubmitting ? "Sending..." : "Send Message"}
				</button>
			</div>
			{status && <p className="text-sm text-muted-foreground">{status}</p>}
		</form>
	);
}