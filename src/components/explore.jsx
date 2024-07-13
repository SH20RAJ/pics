// https://v0.dev/t/McfqdtVBcOG

import Link from "next/link";
import Testomonials from "./explore/testomonials";
import { auth } from "@/auth";
import UploadMain from "@/app/upload/UploadMain";
import { Button } from "./ui/button";
import { CheckIcon, CameraIcon } from "lucide-react";
import Image from "next/image";

export async function Explore() {
  const session = await auth();
  const user = session?.user;

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link
          href="#"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <CameraIcon className="h-6 w-6" />
          <span className="sr-only">Pics Shade</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#features"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Features
          </Link>
          <Link
            href="#pricing"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Pricing
          </Link>
          <Link
            href="#testimonials"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Testimonials
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Contact
          </Link>
          {user ? (
            <Link
              href="/dashboard"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Dashboard
            </Link>
          ) : (
            <>
              <Link
                href="/join"
                className="text-sm font-medium hover:underline underline-offset-4"
                prefetch={false}
              >
                Join
              </Link>
            </>
          )}
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Host your images with Pics Shade
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Pics Shade is a platform that allows you to host and manage
                    your images for your website. With our Freemium model, you
                    can get started for free and upgrade as your needs grow.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  {user ? (
                    <>
                      <Link
                        href="/dashboard"
                        className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                        prefetch={true}
                      >
                        Dashboard
                      </Link>

                      <Link
                        href="/docs"
                        className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      >
                        Documentation
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link
                        href="/join"
                        className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                        prefetch={true}
                      >
                        Join
                      </Link>
                      <Link
                        href="/upload"
                        className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                        prefetch={true}
                      >
                        Try for Free
                      </Link>
                    </>
                  )}
                </div>
              </div>
              <img
                src="/assets/group.svg"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Powerful features to manage your images
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Pics Shade offers a range of features to help you manage your
                  images, from a Freemium model to advanced integrations.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-8">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Freemium Model</h3>
                      <p className="text-muted-foreground">
                        Get started for free with up to 10,000 images. Pay just
                        $10 for uploading 10,000 more images.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        API Key-based Uploads
                      </h3>
                      <p className="text-muted-foreground">
                        Easily integrate Pics Shade into your application with
                        our API key-based image uploads.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">CDN Delivery</h3>
                      <p className="text-muted-foreground">
                        Serve your images quickly and reliably with our global
                        CDN.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Image Management</h3>
                      <p className="text-muted-foreground">
                        Organize your images with tags and easily find what you
                        need.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Advanced Features</h3>
                      <p className="text-muted-foreground">
                        Integrate with S3 storage(beta), Cloudinary CDN, get
                        free image resizing and <Link className=" text-primary" href={"/wp-plugin"}>Wordpress plugin</Link>.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <Image
                src="/og.png"
                width="550"
                height="510"
                alt="Features"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        {/* section for uploading images demo */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <UploadMain />
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Pricing
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Affordable pricing for every need
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Pics Shade offers a Freemium model to get you started, and
                  affordable plans to scale as your needs grow.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-between rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-4 mb-4">
                  <h3 className="text-2xl font-bold">Free</h3>
                  <p className="text-4xl font-bold">$0</p>
                  <p className="text-muted-foreground">per month</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                      10,000 images
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                      API key-based uploads
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                      CDN delivery
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                      Image management
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                      Free image resizing
                    </li>
                  </ul>
                </div>
                <Link
                  href="/join"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={true}
                >
                  Sign Up
                </Link>
              </div>
              <div className="flex flex-col justify-between rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-4 mb-4">
                  <h3 className="text-2xl font-bold">Pro</h3>
                  <p className="text-4xl font-bold">$10</p>
                  <p className="text-muted-foreground">
                    $10 / 10K additional images
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                      10,000 additional images
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                      API key-based uploads
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                      CDN delivery
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                      Image management
                    </li>
                    {/* <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                      S3 storage integration
                    </li> */}
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                      Cloudinary CDN integration
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                      Free image resizing
                    </li>
                  </ul>
                </div>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Upgrade
                </Link>
              </div>
              <div className="flex flex-col justify-between rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-4 mb-4">
                  <h3 className="text-2xl font-bold">Enterprise</h3>
                  <p className="text-4xl font-bold">Contact Us</p>
                  <p className="text-muted-foreground">
                    Custom plans for large teams and businesses
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                      Truly Unlimited images
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                      API key-based uploads
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                      CDN delivery
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                      Image management
                    </li>
                    {/* <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                      S3 storage integration
                    </li> */}
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                      Cloudinary CDN integration
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                      Free image resizing
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                      Custom features and support
                    </li>
                  </ul>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section
          id="testimonials"
          className="w-full py-12 md:py-24 lg:py-32 bg"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  What our customers are saying
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from real customers who have used Pics Shade to power
                  their websites.
                </p>
              </div>
            </div>
            <Testomonials />
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
}

export const Footer = () => { 
  const year = new Date().getFullYear();
  const links = [
    {
      title: "Documentation",
      href: "/docs",
    },
    // {
    //   title: "Contact",
    //   href: "/contact",
    // },
    // {
    //   title: "Dashboard",
    //   href: "/dashboard",
    // },
    // {
    //   title: "Join",
    //   href: "/join",
    // },
    //add tos and privacy policy
    {
      title: "Terms of Service",
      href: "https://docs.pics.shade.cool/links/terms-of-service",
    },
    {
      title: "Privacy Policy",
      href: "https://docs.pics.shade.cool/links/privacy-policy",
    },
    {
      title : "Refund Policy ( No Refund Policy )",
      href : "https://docs.pics.shade.cool/links/refund-policy"
    },
    //https://docs.pics.shade.cool/links/disclaimer
    {
      title : "Disclaimer",
      href : "https://docs.pics.shade.cool/links/disclaimer"
    }
  ];
  return (
    <footer className="bg-background text-muted-foreground">
      <div className="container px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Pics Shade</h3>
            <p className="text-sm">Host your images with Pics Shade.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Links</h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.title}>
                  <Link href={link.href}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact</h3>
            <p className="text-sm">
              Have a question? Contact us at{" "}
              <a
                href="mailto:sh20raj@gmail.com"
                className="text-primary hover:underline"
              >
                Mail
              </a>
            </p>
          </div>
        </div>
        <div className="border-t border-muted mt-6 pt-6 text-center text-sm">
          <p>&copy; {year} Pics Shade. All rights reserved.</p>
        </div>
      </div>

    </footer>
  )
}