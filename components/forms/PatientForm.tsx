"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {Form} from "@/components/ui/form"
import CustomFormField, { FormFieldType } from "../CustomFormField";
import SubmitButton from "../SubmitButton"
import { useState } from "react"
import { UserFormValidation } from "@/lib/validation"
import { useRouter } from "next/navigation"
import { createUser } from "@/lib/actions/patient.actions"

 
export const PatientForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  
  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: ""
    },
  })
 
  async function onSubmit({name, email, phone}: z.infer<typeof UserFormValidation>) {
    setIsLoading(true);
    try {
      const userData = { name, email, phone };

      const user = await createUser(userData);
      if(user) router.push(`/patients/${user.$id}/register`)
    } catch (error) {
      console.log(error)
      
    }
  }
  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
      <section className="mb-12 space-y-4">
        <h1 className="header"> Create Your Patient Profile </h1>
        <p className ="text-dark-700">Get started by registering your details to schedule your first appointment.</p>
      </section>  
      <CustomFormField 
      fieldType = {FormFieldType.INPUT}
        control = {form.control}
        name = "name"
        label = "Full name"
        placeholder = "John Doe"
        iconSrc = "/assets/icons/user.svg"
        iconAlt = "user"
      />
      <CustomFormField 
      fieldType = {FormFieldType.INPUT}
        control = {form.control}
        name = "email"
        label = "Email"
        placeholder = "johndoe@bervicdigital.com"
        iconSrc = "/assets/icons/email.svg"
        iconAlt = "user"
      />
      <CustomFormField 
      fieldType = {FormFieldType.PHONE_INPUT}
        control = {form.control}
        name = "phone"
        label = "Phone number"
        placeholder = "(555) 123-4567"
      />
      <SubmitButton isLoading = {isLoading}>
        Get Started
      </SubmitButton>
    </form>
  </Form>
  );
};

