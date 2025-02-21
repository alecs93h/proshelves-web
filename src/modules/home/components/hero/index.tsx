import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"

const Hero = () => {
  return (
    <div
      className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle"
      style={{
        backgroundImage: "url('/images/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "grayscale(100%)",
      }}
    >
      <div className="absolute inset-0 bg-black/40" /> {/* opacity 40% */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span>
          <Heading
            level="h1"
            className="text-4xl leading-10 text-white font-bold drop-shadow-lg"
          >
            ProShelves
          </Heading>
          <Heading
            level="h2"
            className="text-3xl leading-10 text-gray-200 font-normal drop-shadow-lg mt-2"
          >
            Soluții inovatoare de depozitare pentru e-commerce și logistică
          </Heading>
        </span>
        {/*<a*/}
        {/*  href="https://github.com/medusajs/nextjs-starter-medusa"*/}
        {/*  target="_blank"*/}
        {/*>*/}
        {/*  <Button variant="secondary">*/}
        {/*    View on GitHub*/}
        {/*    <Github />*/}
        {/*  </Button>*/}
        {/*</a>*/}
      </div>
    </div>
  )
}

export default Hero
