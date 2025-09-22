"use client";

import Script from "next/script";

export default function CalendlyWidget() {
  return (
    <div id="turnos" className="flex flex-col gap-12 h-[1000px]">
    <div className="flex flex-col justify-center items-center text-center pt-16">
      
      <div className="flex w-[400px] items-center md:mt-[0px] md:mb-[30px] lg:mt-[40px] text-center justify-center rounded-lg bg-teal-500"><h2 className="text-xl text-white font-bold p-6">Agenda un turno / consulta</h2></div>
      {/* Calendly Widget */}
         </div>
      <div>
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/agustinescuderoweb/agendar-reunion"
        style={{ minWidth: "320px", height: "700px" }}
      ></div>

      {/* Script de Calendly */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </div>
    </div>
  );
}
