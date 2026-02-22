"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";

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

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(8, "Phone too short"),
  email: z.string().email("Invalid email"),
  message: z.string().min(5, "Message too short"),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactSection() {
  const [loading, setLoading] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", phone: "", message: "" },
  });

  const onSubmit = async (data: FormValues) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Message Sent ✅");
      form.reset();
    }, 1000);
  };

  return (
    <section className="relative min-h-screen flex items-center py-32 overflow-hidden bg-black text-white">
      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-600/30 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-600/30 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-20 px-6 w-full">
        {/* ================= FORM ================= */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl rounded-3xl p-12 space-y-8 hover:shadow-purple-500/20 transition-all duration-500"
            >
              <h2 className="text-4xl font-bold tracking-tight">Let’s Talk</h2>

              {/* Name */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-400">Full Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="John Doe"
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />

              {/* Phone */}
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-400">Phone</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="9876543210"
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />

              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-400">Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="email@example.com"
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />

              {/* Message */}
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-400">Message</FormLabel>
                    <FormControl>
                      <Textarea
                        rows={5}
                        {...field}
                        placeholder="Tell us about your project..."
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full py-6 text-lg shadow-lg hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300"
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Form>
        </motion.div>

        {/* ================= RIGHT SIDE ================= */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-12"
        >
          <div>
            <h2 className="text-5xl font-bold leading-tight">Get in touch.</h2>

            <p className="text-gray-400 mt-6 leading-relaxed text-lg">
              Ready to take your business to the next level? Contact us today
              and let’s start the conversation. Whether you have questions about
              our services, want to discuss a project, or simply need advice,
              our team is here to help. Reach out via phone, email, or fill out
              the contact form below, and let’s make great things happen
              together.
            </p>
          </div>

          {/* Contact Info */}
          {[
            { icon: FaEnvelope, title: "Email", value: "info@powerweb.qa" },
            { icon: FaPhone, title: "Phone", value: "+974 5018 4018" },
            {
              icon: FaLocationDot,
              title: "Address",
              value: "Qatar Science & Technology Park, Doha",
            },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-5 group">
              <div className="p-4 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl text-white shadow-md group-hover:scale-110 transition">
                <item.icon size={18} />
              </div>

              <div>
                <p className="text-sm text-gray-500">{item.title}</p>
                <p className="text-lg font-semibold">{item.value}</p>
              </div>
            </div>
          ))}

          {/* Social Icons */}
          <div className="flex gap-5 pt-6">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
              (Icon, i) => (
                <div
                  key={i}
                  className="w-12 h-12 flex items-center justify-center
                  rounded-full bg-white/10 backdrop-blur-md border border-white/10
                  hover:bg-gradient-to-r from-purple-600 to-indigo-600
                  hover:scale-110 transition-all duration-300 cursor-pointer"
                >
                  <Icon size={16} />
                </div>
              ),
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
