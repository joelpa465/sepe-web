import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import AdSidebar from "@/components/AdSidebar";
import AdBanner from "@/components/AdBanner";
import Link from "next/link";
import {
  FileText,
  ShieldCheck,
  Globe,
  Building,
  Clock,
  CheckCircle,
  Download,
  Mail,
  Smartphone,
  NotebookPen,
  MapPin,
  Info,
  ArrowLeft
} from "lucide-react";

export const metadata: Metadata = {
  title: "Certificado de Antecedentes Penales 2024: Cómo Solicitarlo Paso a Paso | Web Cursos SEPE",
  description:
    "Guía completa para obtener el certificado de antecedentes penales en España: solicitud online, presencial y desde el extranjero, documentación, tasas y tiempos de tramitación.",
  keywords: [
    "certificado antecedentes penales",
    "certificado penales online",
    "ministerio de justicia certificado",
    "antecedentes penales consulado",
    "certificado penales presencial"
  ],
  alternates: {
    canonical: "/fiscal/certificado-penales"
  }
};

const usos = [
  {
    title: "Oposiciones y Empleo Público",
    description: "Acredita carecer de antecedentes para oposiciones, licitaciones y empleo en la administración.",
    icon: ShieldCheck
  },
  {
    title: "Visados y Residencias",
    description: "Embajadas y consulados lo exigen para visados, nacionalidades o permisos de residencia.",
    icon: Globe
  },
  {
    title: "Contratación Privada",
    description: "Empresas de seguridad, transporte o infancia pueden solicitarlo para nuevos empleados.",
    icon: Building
  },
  {
    title: "Trámites Internacionales",
    description: "Reconocimiento de títulos, adopciones internacionales o programas de voluntariado.",
    icon: NotebookPen
  }
];

const canales = [
  {
    title: "Solicitud Online",
    icon: Smartphone,
    color: "from-blue-50 to-indigo-50",
    pasos: [
      "Accede a la Sede Electrónica del Ministerio de Justicia (sede.mjusticia.gob.es).",
      "Identifícate con certificado digital, DNIe o sistema Cl@ve.",
      "Completa el formulario electrónico y comprueba tus datos personales.",
      "Paga la tasa 006 (3,78 €) mediante tarjeta o cargo en cuenta.",
      "Descarga el certificado en formato PDF con CSV válido en España y el extranjero."
    ]
  },
  {
    title: "Solicitud Presencial en España",
    icon: MapPin,
    color: "from-slate-50 to-gray-50",
    pasos: [
      "Pide cita previa en las Gerencias Territoriales del Ministerio de Justicia o en oficinas de la Administración General del Estado.",
      "Rellena el impreso Modelo 790 – Código 006 (también disponible in situ).",
      "Aporta DNI/NIE original y justificante del pago de la tasa (puedes pagar en entidades colaboradoras).",
      "El certificado se entrega preferentemente en el acto o se envía a domicilio en caso de tramitación diferida."
    ]
  },
  {
    title: "Desde el Extranjero",
    icon: Globe,
    color: "from-amber-50 to-orange-50",
    pasos: [
      "Contacta con el Consulado o Embajada de España en tu país de residencia.",
      "Presenta pasaporte y, si procede, NIE o documento que acredite tu vínculo con España.",
      "Rellena el modelo 790 y paga la tasa mediante transferencia al Tesoro o directamente en la sede consular.",
      "El certificado se remitirá por vía electrónica o se retirará en el consulado cuando esté disponible."
    ]
  }
];

const documentos = [
  "DNI, NIE o pasaporte en vigor.",
  "Justificante del pago de la tasa 006 (Modelo 790).",
  "Autorización firmada y copia del documento de identidad si actúa un representante.",
  "En caso de solicitud desde el extranjero: documento que acredite la residencia y, si procede, traducciones juradas."
];

const recomendaciones = [
  {
    title: "Validez limitada",
    text: "Los certificados suelen considerarse vigentes durante 90 días. Comprueba el plazo que exige la entidad que lo solicita.",
    icon: Clock,
    color: "bg-blue-50 border-blue-200"
  },
  {
    title: "Tasas y formas de pago",
    text: "El importe de la tasa 006 es de 3,78 € (2024). Puedes pagar online, en bancos colaboradores o en el consulado.",
    icon: Download,
    color: "bg-emerald-50 border-emerald-200"
  },
  {
    title: "Representación",
    text: "Otra persona puede recogerlo si aporta autorización firmada, fotocopia de tu documento y su propio documento identificativo.",
    icon: Mail,
    color: "bg-amber-50 border-amber-200"
  },
  {
    title: "Legalización y Apostilla",
    text: "Para trámites fuera de la UE puede requerirse Apostilla de La Haya o legalización consular. Solicítala tras obtener el certificado.",
    icon: Info,
    color: "bg-indigo-50 border-indigo-200"
  }
];

export default function CertificadoPenalesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ScrollProgressBar />

      <main className="flex-grow bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-r from-blue-700 to-indigo-900 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-6">
                <Link
                  href="/categorias/fiscal"
                  className="flex items-center text-blue-100 hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Volver a Fiscal
                </Link>
              </div>

              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-sm text-white shadow-lg mr-4">
                  <FileText className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                    Certificado de Antecedentes Penales 2024
                  </h1>
                  <div className="flex items-center gap-6 text-blue-100">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-2" />
                      <span>9 min de lectura</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-xl text-blue-100">
                Aprende a solicitar el certificado de antecedentes penales en España: requisitos, trámites online y presenciales,
                tiempos de expedición y consejos para gestiones nacionales e internacionales.
              </p>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <div className="bg-gray-50 py-4 border-b">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-sm max-w-4xl mx-auto">
              <ol className="flex items-center space-x-2">
                <li>
                  <Link href="/" className="text-blue-600 hover:text-blue-800">
                    Inicio
                  </Link>
                </li>
                <li>
                  <span className="text-gray-400">/</span>
                </li>
                <li>
                  <Link href="/categorias/fiscal" className="text-blue-600 hover:text-blue-800">
                    Fiscal
                  </Link>
                </li>
                <li>
                  <span className="text-gray-400">/</span>
                </li>
                <li className="text-gray-700">Certificado de Antecedentes Penales</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-8">
              {/* Sidebar izquierdo */}
              <div className="hidden xl:block w-80 flex-shrink-0">
                <AdSidebar position="left" />
              </div>

              {/* Contenido principal */}
              <div className="flex-1 max-w-4xl">
                {/* Introducción */}
                <div className="mb-12">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    El certificado de antecedentes penales acredita que una persona no tiene (o sí tiene) antecedentes inscritos
                    en el Registro Central de Penados. Es un documento imprescindible para procedimientos administrativos,
                    judiciales o laborales que exigen demostrar la ausencia de condenas firmes.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Lo expide el Ministerio de Justicia y puede solicitarse en España o desde el extranjero. A continuación
                    te explicamos los usos más habituales, los canales disponibles y los pasos para obtenerlo sin errores.
                  </p>
                </div>

                {/* Usos frecuentes */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">¿Para qué sirve el certificado?</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {usos.map((uso, index) => {
                      const Icon = uso.icon;
                      return (
                        <div
                          key={index}
                          className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-300 transition-colors"
                        >
                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mr-4">
                              <Icon className="w-6 h-6 text-blue-700" />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-gray-900">{uso.title}</h3>
                              <p className="text-gray-600 text-sm">{uso.description}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Canales */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Canales para solicitarlo</h2>
                  <div className="space-y-8">
                    {canales.map((canal, index) => {
                      const Icon = canal.icon;
                      return (
                        <div
                          key={canal.title}
                          className={`rounded-2xl border border-gray-200 bg-gradient-to-br ${canal.color} p-6`}
                        >
                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 rounded-lg bg-white/70 flex items-center justify-center mr-4">
                              <Icon className="w-6 h-6 text-blue-700" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">{canal.title}</h3>
                          </div>
                          <ul className="space-y-3 text-gray-700">
                            {canal.pasos.map((paso, idx) => (
                              <li key={idx} className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-blue-700 mr-2 flex-shrink-0 mt-0.5" />
                                <span>{paso}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Documentos necesarios */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Documentos necesarios</h2>
                  <ul className="space-y-4 text-gray-700">
                    {documentos.map((documento, index) => (
                      <li key={index} className="flex items-start">
                        <MapPin className="w-5 h-5 text-blue-700 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{documento}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Recomendaciones */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Recomendaciones</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {recomendaciones.map((recomendacion, index) => (
                      <div
                        key={index}
                        className={`bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-300 transition-colors ${recomendacion.color}`}
                      >
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mr-4">
                            <recomendacion.icon className="w-6 h-6 text-blue-700" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900">{recomendacion.title}</h3>
                        </div>
                        <p className="text-gray-600 text-sm">{recomendacion.text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ad Banner */}
                <div className="mt-12">
                  <AdBanner />
                </div>
              </div>

              {/* Sidebar derecha */}
              <div className="hidden xl:block w-80 flex-shrink-0">
                <AdSidebar position="right" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}