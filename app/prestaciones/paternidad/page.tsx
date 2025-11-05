import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSidebar from "@/components/AdSidebar";
import AdBanner from "@/components/AdBanner";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import Link from "next/link";
import { 
  Baby, 
  Clock, 
  CheckCircle, 
  ArrowLeft,
  FileText,
  AlertCircle,
  Lightbulb,
  DollarSign,
  Calendar,
  Phone
} from "lucide-react";

export const metadata: Metadata = {
  title: "Baja por Paternidad - Guía Completa 2024 | Web Cursos SEPE",
  description: "Guía completa sobre la baja por paternidad: requisitos, cuantía (100% base reguladora), duración (16 semanas), cómo solicitarla y todo lo que necesitas saber.",
  keywords: ["baja paternidad", "permiso paternidad", "baja por paternidad sepe", "permiso paternidad 16 semanas"],
  alternates: {
    canonical: "/prestaciones/paternidad",
  },
  openGraph: {
    title: "Baja por Paternidad - Guía Completa 2024",
    description: "Aprende todo sobre la baja por paternidad: requisitos, cuantía, duración y cómo solicitarla.",
    type: "article",
  },
};

const steps = [
  {
    number: 1,
    title: "Cumplir los Requisitos",
    description: "Verifica que cumples los requisitos para tener derecho a la baja por paternidad.",
    details: [
      "Estar afiliado y en alta en la Seguridad Social",
      "Haber cotizado el período mínimo exigido (según edad)",
      "Para menores de 21 años: no se exige cotización mínima",
      "Para 21-26 años: 90 días en últimos 7 años o 180 días en total",
      "Para mayores de 26 años: 180 días en últimos 7 años o 360 días en total"
    ],
    icon: CheckCircle
  },
  {
    number: 2,
    title: "Preparar la Documentación",
    description: "Reúne todos los documentos necesarios antes de solicitar la baja.",
    details: [
      "DNI o NIE del padre",
      "Libro de familia o certificado de nacimiento del bebé",
      "Número de cuenta bancaria (IBAN)",
      "Certificado de empresa (si eres trabajador por cuenta ajena)",
      "En caso de adopción o acogimiento: resolución judicial o administrativa"
    ],
    icon: FileText
  },
  {
    number: 3,
    title: "Presentar la Solicitud",
    description: "Puedes solicitar la baja online o presencialmente en el INSS.",
    details: [
      "Online: A través de la sede electrónica del INSS (recomendado)",
      "Presencial: En la oficina del INSS con cita previa",
      "Plazo: Máximo 15 días desde el nacimiento o adopción",
      "Puedes iniciar el permiso desde el mismo día del nacimiento"
    ],
    icon: CheckCircle
  },
  {
    number: 4,
    title: "Esperar la Resolución",
    description: "El INSS revisará tu solicitud y te notificará la resolución.",
    details: [
      "Plazo de resolución: Aproximadamente 15-30 días",
      "Recibirás la notificación por correo postal o electrónico",
      "Puedes consultar el estado en la sede electrónica del INSS",
      "Si falta documentación, te pedirán que la aportes"
    ],
    icon: Clock
  },
  {
    number: 5,
    title: "Cobrar la Prestación",
    description: "Una vez aprobada, comenzarás a cobrar mensualmente.",
    details: [
      "Cuantía: 100% de la base reguladora",
      "El pago se realiza mensualmente, entre los días 1 y 5",
      "La prestación está exenta de IRPF",
      "Durante la baja, no se descuenta la cuota de autónomos (si eres autónomo)"
    ],
    icon: DollarSign
  }
];

const requisitos = [
  "Estar afiliado y en alta en la Seguridad Social",
  "Haber cotizado el período mínimo exigido (según edad)",
  "Haber nacido, adoptado o acogido un hijo",
  "No tener la edad de jubilación"
];

export default function PrestacionPaternidadPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ScrollProgressBar />
      
      <main className="flex-grow bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-6">
                <Link
                  href="/categorias/prestaciones-sepe"
                  className="flex items-center text-blue-100 hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Volver a Prestaciones SEPE
                </Link>
              </div>
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm text-white shadow-lg mr-4">
                  <Baby className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                    Baja por Paternidad
                  </h1>
                  <div className="flex items-center gap-6 text-blue-100">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-2" />
                      <span>10 min de lectura</span>
                    </div>
                    <span>•</span>
                    <span>100% de la base reguladora</span>
                  </div>
                </div>
              </div>
              <p className="text-xl text-blue-100">
                Guía completa sobre la baja por paternidad: requisitos, cuantía, duración (16 semanas), 
                cómo solicitarla paso a paso y todo lo que necesitas saber sobre esta prestación.
              </p>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <div className="bg-gray-50 py-4 border-b">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-sm max-w-4xl mx-auto">
              <ol className="flex items-center space-x-2">
                <li><Link href="/" className="text-blue-600 hover:text-blue-800">Inicio</Link></li>
                <li><span className="text-gray-400">/</span></li>
                <li><Link href="/categorias/prestaciones-sepe" className="text-blue-600 hover:text-blue-800">Prestaciones SEPE</Link></li>
                <li><span className="text-gray-400">/</span></li>
                <li className="text-gray-700">Baja por Paternidad</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-8">
              {/* Sidebar izquierdo - SOLO en desktop */}
              <div className="hidden xl:block w-80 flex-shrink-0">
                <AdSidebar position="left" />
              </div>
              
              {/* Contenido principal */}
              <div className="flex-1 max-w-4xl">
                {/* Introducción */}
                <div className="mb-12">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    La baja por paternidad (prestación por nacimiento y cuidado del menor) es una ayuda económica 
                    que proporciona la Seguridad Social para compensar la pérdida de ingresos cuando un padre 
                    interrumpe su trabajo tras el nacimiento, adopción o acogimiento de un hijo.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Desde el 1 de abril de 2019, tanto la madre como el padre tienen derecho a 16 semanas de permiso 
                    retribuido, con el 100% de la base reguladora. Esta prestación está exenta de IRPF y fomenta la 
                    corresponsabilidad en el cuidado de los hijos.
                  </p>
                </div>

                {/* Requisitos */}
                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <AlertCircle className="w-6 h-6 mr-2 text-blue-600" />
                    Requisitos para Tener Derecho
                  </h2>
                  <ul className="space-y-2">
                    {requisitos.map((req, index) => (
                      <li key={index} className="flex items-start text-gray-700">
                        <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Cuantía y Duración */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Cuantía y Duración</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <DollarSign className="w-6 h-6 mr-2 text-blue-600" />
                        Cuantía
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• <strong>Base reguladora:</strong> 100% de la base de cotización</li>
                        <li>• <strong>Exenta de IRPF:</strong> No se aplica retención</li>
                        <li>• <strong>Pago mensual:</strong> Entre los días 1 y 5</li>
                        <li>• <strong>Autónomos:</strong> Bonificación del 100% de la cuota</li>
                      </ul>
                    </div>

                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <Calendar className="w-6 h-6 mr-2 text-green-600" />
                        Duración
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• <strong>Duración total:</strong> 16 semanas</li>
                        <li>• <strong>Flexible:</strong> Puede disfrutarse de forma continua o interrumpida</li>
                        <li>• <strong>Dentro del primer año:</strong> Desde el nacimiento o adopción</li>
                        <li>• <strong>Compartible:</strong> Puede compartirse con la madre</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Pasos */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Cómo Solicitar la Baja por Paternidad</h2>
                  <div className="space-y-12">
                    {steps.map((step, index) => {
                      const Icon = step.icon;
                      return (
                        <div key={step.number} className="relative">
                          {/* Connection line */}
                          {index < steps.length - 1 && (
                            <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-blue-200 -translate-y-12"></div>
                          )}
                          
                          <div className="flex gap-8">
                            {/* Step number */}
                            <div className="flex-shrink-0">
                              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white shadow-lg">
                                <Icon className="w-8 h-8" />
                              </div>
                            </div>
                            
                            {/* Step content */}
                            <div className="flex-grow pb-12">
                              <div className="flex items-center mb-2">
                                <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full mr-3">
                                  Paso {step.number}
                                </span>
                              </div>
                              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                {step.title}
                              </h3>
                              <p className="text-lg text-gray-700 mb-4">
                                {step.description}
                              </p>
                              
                              {step.details && (
                                <ul className="space-y-2 bg-gray-50 rounded-lg p-4">
                                  {step.details.map((detail, idx) => (
                                    <li key={idx} className="flex items-start text-gray-700">
                                      <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                                      <span>{detail}</span>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Banner publicitario */}
                <div className="my-8">
                  <AdBanner type="horizontal" />
                </div>

                {/* Consejos */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Consejos Importantes</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                      <div className="flex items-start">
                        <Lightbulb className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-bold text-gray-900 mb-3">Consejos Útiles</h3>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li>• <strong>Plazo de 15 días:</strong> Solicita la baja cuanto antes</li>
                            <li>• <strong>Flexibilidad:</strong> Puedes disfrutarlo de forma continua o interrumpida</li>
                            <li>• <strong>Compartible:</strong> Puedes compartirlo con la madre</li>
                            <li>• <strong>Consulta online:</strong> Puedes ver el estado en la sede electrónica</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-100">
                      <div className="flex items-start">
                        <AlertCircle className="w-6 h-6 text-orange-600 mr-3 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-bold text-gray-900 mb-3">Atención</h3>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li>• <strong>Documentación completa:</strong> Reúne todos los documentos</li>
                            <li>• <strong>Dentro del primer año:</strong> Debe disfrutarse en el primer año</li>
                            <li>• <strong>Adopción o acogimiento:</strong> También aplica en estos casos</li>
                            <li>• <strong>Dudas:</strong> Consulta la sede electrónica del INSS</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Información adicional */}
                <div className="bg-gray-50 rounded-xl p-6 mb-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                    <Phone className="w-6 h-6 mr-2 text-blue-600" />
                    Información de Contacto
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Si tienes dudas sobre la baja por paternidad:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>INSS:</strong> 91 541 25 30</li>
                    <li>• <strong>Web oficial:</strong> sede.seg-social.gob.es</li>
                    <li>• <strong>Horario:</strong> De lunes a viernes de 9:00 a 19:00</li>
                  </ul>
                </div>

                {/* CTA Final */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">¿Necesitas más información?</h3>
                  <p className="text-blue-100 mb-6">
                    Consulta otras prestaciones SEPE o explora nuestros tutoriales
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/categorias/prestaciones-sepe"
                      className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      Ver Todas las Prestaciones
                    </Link>
                    <Link
                      href="/prestaciones/maternidad"
                      className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                    >
                      Ver Baja por Maternidad
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Sidebar derecho - SOLO en desktop */}
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
      </main>
      
      <Footer />
    </div>
  );
}

