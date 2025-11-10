import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSidebar from "@/components/AdSidebar";
import AdBanner from "@/components/AdBanner";
import Link from "next/link";
import {
  MonitorSmartphone,
  KeyRound,
  ShieldCheck,
  Smartphone,
  Globe,
  Cpu,
  Lightbulb
} from "lucide-react";

export const metadata: Metadata = {
  title: "Servicios Digitales - Identificación, Certificados y Gestiones Online",
  description:
    "Guía completa de servicios digitales para trámites públicos: Cl@ve, certificado digital FNMT, Sede Electrónica del SEPE, Tu Seguridad Social y apps oficiales.",
  keywords: [
    "clave pin",
    "certificado digital",
    "sede electronica sepe",
    "tu seguridad social",
    "identificacion digital",
    "app sepe"
  ],
  alternates: {
    canonical: "/categorias/servicios-digitales"
  }
};

const servicios = [
  {
    id: "clave-pin",
    title: "Cl@ve PIN y Permanente",
    description:
      "Activa Cl@ve para identificarte en la Administración con PIN temporal o contraseña permanente desde cualquier dispositivo.",
    icon: KeyRound,
    gradient: "from-blue-500 to-blue-600",
    link: "/servicios-digitales/clave-pin"
  },
  {
    id: "certificado-digital",
    title: "Certificado Digital FNMT",
    description:
      "Solicita, descarga e instala el certificado digital para firmar trámites online con garantías jurídicas.",
    icon: ShieldCheck,
    gradient: "from-emerald-500 to-emerald-600",
    link: "/servicios-digitales/certificado-digital"
  },
  {
    id: "sede-electronica-sepe",
    title: "Sede Electrónica SEPE",
    description:
      "Aprende a usar la sede del SEPE para consultar prestaciones, enviar solicitudes y realizar consultas sin desplazamientos.",
    icon: MonitorSmartphone,
    gradient: "from-indigo-500 to-indigo-600",
    link: "/servicios-digitales/sede-electronica-sepe"
  },
  {
    id: "tu-seguridad-social",
    title: "Tu Seguridad Social",
    description:
      "Accede a tu expediente de pensiones, informes de vida laboral y trámites sanitarios desde el portal Tu Seguridad Social.",
    icon: Globe,
    gradient: "from-purple-500 to-purple-600",
    link: "/servicios-digitales/tu-seguridad-social"
  },
  {
    id: "app-sepe",
    title: "App Móvil SEPE",
    description:
      "Instala y configura la app oficial del SEPE para consultar citas, prestaciones y notificaciones desde tu móvil.",
    icon: Smartphone,
    gradient: "from-orange-500 to-orange-600",
    link: "/servicios-digitales/app-sepe"
  },
  {
    id: "identificacion-digital",
    title: "Identificación Digital Segura",
    description:
      "Conoce las alternativas de identificación (DNIe, certificados, Cl@ve) y cómo proteger tus credenciales online.",
    icon: Cpu,
    gradient: "from-cyan-500 to-cyan-600",
    link: "/servicios-digitales/identificacion-digital"
  }
];

export default function ServiciosDigitalesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-r from-blue-700 via-purple-700 to-teal-700 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm text-white shadow-lg">
                  <MonitorSmartphone className="w-10 h-10" />
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                Servicios Digitales para tus Trámites
              </h1>
              <p className="text-xl text-blue-100">
                Configura tu identidad digital, accede a sedes electrónicas y aprovecha apps oficiales para relacionarte
                con la Administración sin desplazarte.
              </p>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <div className="bg-gray-50 py-4 border-b">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-sm">
              <ol className="flex items-center space-x-2">
                <li>
                  <Link href="/" className="text-blue-600 hover:text-blue-800">
                    Inicio
                  </Link>
                </li>
                <li>
                  <span className="text-gray-400">/</span>
                </li>
                <li className="text-gray-700">Servicios Digitales</li>
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

              {/* Content */}
              <div className="flex-1">
                <div className="max-w-4xl mx-auto mb-10">
                  <p className="text-lg text-gray-700">
                    La transformación digital de los servicios públicos permite solicitar citas, presentar escritos y consultar
                    expedientes desde casa. Te reunimos las guías imprescindibles para obtener credenciales, instalar certificados y
                    usar las sedes electrónicas más demandadas.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {servicios.map((servicio) => {
                    const Icon = servicio.icon;
                    return (
                      <Link key={servicio.id} href={servicio.link} className="group">
                        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-6 border border-gray-200 h-full flex flex-col">
                          <div
                            className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${servicio.gradient} text-white mb-4 group-hover:scale-110 transition-transform`}
                          >
                            <Icon className="w-7 h-7" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                            {servicio.title}
                          </h3>
                          <p className="text-gray-600 flex-1">{servicio.description}</p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Sidebar derecho */}
              <div className="hidden xl:block w-80 flex-shrink-0">
                <AdSidebar position="right" />
              </div>
            </div>
          </div>
        </section>

        {/* Banner publicitario */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <AdBanner type="horizontal" />
            </div>
          </div>
        </section>

        {/* Consejos */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                      <Lightbulb className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-blue-900 mb-2">Protege tus credenciales</h3>
                    <p className="text-blue-800 leading-relaxed">
                      Mantén tus contraseñas y certificados en dispositivos seguros, actualiza el software de tu navegador y comprueba
                      siempre que estás en la sede oficial antes de introducir datos personales.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
