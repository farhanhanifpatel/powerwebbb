"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

// ✅ Zod Schema with strict email validation
const formSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .regex(/^[A-Za-z\s]+$/, "Only letters allowed"),

  phone: z
    .string()
    .min(8, "Phone too short")
    .regex(/^[0-9]+$/, "Only numbers allowed"),

  email: z
    .string()
    .min(5, "Email too short")
    .regex(
      /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
      "Invalid email format (e.g., name@example.com)",
    ),

  message: z.string().min(5, "Message too short"),
});

type FormValues = z.infer<typeof formSchema>;
type FormData = z.infer<typeof formSchema>;

export default function ContactSection() {
  const [loading, setLoading] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", phone: "", message: "" },
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  useEffect(() => {
    window.scrollTo(0, 40);

    const handleScroll = () => {
      if (window.scrollY < 35) {
        window.scrollTo(0, 35);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const onSubmit = async (data: FormValues) => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Message Sent ✅");
      form.reset();
    }, 1000);
  };

  return (
    <>
      <div className="h-[60px]" />

      <section className="bg-gray-50 min-h-screen flex items-end py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6 w-full">
          {/* ✅ FORM */}
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="bg-white shadow-xl rounded-xl p-8 space-y-5"
            >
              <h2 className="text-3xl font-bold">Contact Us</h2>

              {/* Name */}
              <FormField
                control={form.control}
                name="name"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="John Doe"
                        {...field}
                        value={field.value || ""}
                      />
                    </FormControl>
                    {fieldState.error && (
                      <FormMessage className="text-red-500">
                        {fieldState.error.message}
                      </FormMessage>
                    )}
                  </FormItem>
                )}
              />

              {/* Phone */}
              <FormField
                control={form.control}
                name="phone"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        placeholder="9876543210"
                        {...field}
                        value={field.value || ""}
                      />
                    </FormControl>
                    {fieldState.error && (
                      <FormMessage className="text-red-500">
                        {fieldState.error.message}
                      </FormMessage>
                    )}
                  </FormItem>
                )}
              />

              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="email@example.com"
                        {...field}
                        value={field.value || ""}
                      />
                    </FormControl>
                    {fieldState.error && (
                      <FormMessage className="text-red-500">
                        {fieldState.error.message}
                      </FormMessage>
                    )}
                  </FormItem>
                )}
              />

              {/* Message */}
              <FormField
                control={form.control}
                name="message"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea rows={4} {...field} value={field.value || ""} />
                    </FormControl>
                    {fieldState.error && (
                      <FormMessage className="text-red-500">
                        {fieldState.error.message}
                      </FormMessage>
                    )}
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600"
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Form>

          {/* RIGHT SIDE CARD */}
          <div className="max-w-xl bg-white border border-gray-200 rounded-2xl shadow-lg p-8 space-y-8">
            {/* Heading */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900">Get in touch</h2>

              <p className="text-gray-600 mt-4 leading-relaxed">
                Ready to take your business to the next level? Contact us today
                and let’s start the conversation. Whether you have questions,
                want to discuss a project, or simply need advice — our team is
                here to help.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-100 text-purple-600 rounded-lg">
                  <FaEnvelope size={18} />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-semibold text-gray-900">
                    info@powerweb.qa
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="p-3 bg-indigo-100 text-indigo-600 rounded-lg">
                  <FaPhone size={18} />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-semibold text-gray-900">+974 5018 4018</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-center gap-4">
                <div className="p-3 bg-pink-100 text-pink-600 rounded-lg">
                  <FaLocationDot size={18} />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Address</p>
                  <p className="font-semibold text-gray-900">
                    Qatar Science & Technology Park,
                    <br />
                    Doha, Qatar
                  </p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gray-200"></div>

            {/* Socials */}
            <div>
              <p className="font-semibold text-gray-800 mb-4">
                Follow us on social media
              </p>

              <div className="flex gap-4">
                {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
                  (Icon, i) => (
                    <div
                      key={i}
                      className="w-11 h-11 flex items-center justify-center
            rounded-full bg-gradient-to-r from-purple-600 to-indigo-600
            text-white hover:scale-110 transition cursor-pointer shadow-md"
                    >
                      <Icon size={16} />
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
