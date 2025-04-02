import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import StyledMap from "./StyledMap";

import { PiBuildingOfficeThin } from "react-icons/pi";
import { LuMailPlus } from "react-icons/lu";
import { FaPhoneAlt } from "react-icons/fa";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import PageIdentifier from "../Home/page_identifier";
import { useRef } from "react";

const position = { lat: 19.140890779136594, lng: 72.84299784481418 };
const size = { width: "100%", height: "375px" };

const formSchema = z.object({
  firstname: z
    .string()
    .min(3, { message: "First Name must be at least 3 characters." })
    .max(50, { message: "First Name cannot exceed 50 characters." })
    .regex(/^[A-Za-z\s]+$/, {
      message: "First Name can only contain alphabets.",
    }),

  lastname: z
    .string()
    .min(3, { message: "Last Name must be at least 3 characters." })
    .max(50, { message: "Last Name cannot exceed 50 characters." })
    .regex(/^[A-Za-z\s]+$/, {
      message: "Last Name can only contain alphabets.",
    }).optional().or(z.literal("")),

  email: z
    .string()
    .email({ message: "Invalid email address." }),

    tel: z
    .string()
    .trim()
    .regex(/^\+?(\d{1,4})?[-.\s]?\d{10}$/, {
      message: "Enter a valid phone number (e.g., +91 9876543210 or 9876543210).",
    }),

  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." })
    .max(500, { message: "Message cannot exceed 500 characters." }),
});

const Contact = () => {

  const submited_form = useRef<HTMLFormElement>(null!);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      tel: "",
      message: "",
    },
  });

  const onSubmit = () => {

    console.log("Submitted...");
    
    emailjs
      .sendForm('service_0d29e67', 'template_3t8y9b3', submited_form.current, {
        publicKey: 'YN4ZM5IV00gbtojAK',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className=" bg-background">
      <PageIdentifier title="Contact Us" tab_link="/contact"/>
        {/*  ---------------------- Pannels ------------------------*/}
      <div className="max-w-7xl mx-auto block md:flex">
        {/*  ---------------------- Left Pannel --------------------*/}
        <div className="w-full md:w-1/2 justify-center items-center p-6 space-y-4">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold">Get In Touch</h1>
            <p className="text-lg tracking-normal">
              At Mantik Enterprises, we provide premium glass solutions,
              including V-Groove Engraving, CEP, Beveling, Decorative Laminated
              Glass, Mirrors, Smart Glass, Toughened Glass, and Bend Glass,
              designed to enhance any space with style and durability.
            </p>
          </div>

          <div className="flex gap-2">
            <div className="text-xl pt-3">
              <PiBuildingOfficeThin />
            </div>
            <p>
              Unit NO: 1, Ghaswala Estate, Swami Vivekananda Rd, opp. 24 Karat,
              Jogeshwari West, Mumbai-400102
            </p>
          </div>

          <div className="flex gap-2">
            <div className="text-lg pt-2">
              <LuMailPlus />
            </div>
            <a
              className="text-lg tracking-normal"
              href="mailto:mantikenterprises24@gmail.com"
            >
              mantikenterprises24@gmail.com
            </a>
          </div>

          <div className="flex gap-2">
            <div className="text-sm pt-2">
              <FaPhoneAlt />
            </div>
            <a className="text-lg tracking-normal" href="tel:+919870615500">
              +91 98706 15500
            </a>
          </div>

          {/*  ---------------------- Map --------------------*/}

          <StyledMap position={position} size={size} />
        </div>

        {/*  ---------------------- Right Pannel -------------------*/}

        <div className="w-full md:w-1/2 justify-center items-center p-6">
          <Form {...form}>
            <form ref={submited_form} onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="flex gap-4 justify-between">
                <div className="w-1/2">
                  <FormField
                    control={form.control}
                    name="firstname"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="First Name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="w-1/2">
                  <FormField
                    control={form.control}
                    name="lastname"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Last Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="tel"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="Phone Number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Massage</FormLabel>
                    <FormControl>
                      <Textarea
                        className="h-80"
                        placeholder="Type your massage here."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="text-right">
                <Button type="submit">Submit</Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
