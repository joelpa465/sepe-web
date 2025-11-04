import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSidebar from "@/components/AdSidebar";
import AdBanner from "@/components/AdBanner";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import Image from "next/image";
import Link from "next/link";
import { 
  Baby, 
  Calendar, 
  Heart, 
  FileText, 
  Users, 
  GraduationCap,
  Building,
  Clock,
  CheckCircle,
  ArrowLeft
} from "lucide-react";

const blogPosts: { [key: string]: any } = {
  "baja-maternidad": {
    title: "Guía Completa para Pedir la Baja por Maternidad en España (Actualizado 2025)",
    description: "Guía completa sobre la baja por maternidad: requisitos, cuantía, duración y cómo solicitarla paso a paso.",
    icon: Baby,
    gradient: "from-pink-500 to-rose-600",
    category: "Prestaciones",
    date: "2024",
    readTime: "10 min",
    image: "/images/Blog/maternidad.png",
    content: [
      {
        type: "intro",
        text: "La llegada de un hijo es uno de los momentos más importantes en la vida de cualquier persona. Sin embargo, también implica una serie de trámites y gestiones que, si no se conocen bien, pueden generar estrés o confusión. Uno de los más importantes es la baja por maternidad, una prestación económica que garantiza a las madres y padres poder disfrutar del nacimiento o adopción de su hijo con plena protección económica."
      },
      {
        type: "paragraph",
        text: "En esta guía completa encontrarás toda la información práctica: qué es la prestación, quién puede pedirla, qué requisitos hay, cómo se solicita, qué documentos necesitas y qué derechos tienes tanto si eres trabajadora por cuenta ajena, autónoma o estás cobrando el paro."
      },
      {
        type: "heading",
        text: "¿Qué es la prestación por maternidad?"
      },
      {
        type: "paragraph",
        text: "La baja por maternidad (actualmente denominada prestación por nacimiento y cuidado del menor) es una ayuda económica que concede la Seguridad Social para compensar la pérdida de ingresos cuando una persona interrumpe su trabajo tras el nacimiento, adopción o acogimiento de un hijo."
      },
      {
        type: "paragraph",
        text: "Desde el 1 de abril de 2019, la baja por maternidad y la baja por paternidad se unificaron bajo la misma denominación y condiciones, de modo que ambos progenitores disfrutan de 16 semanas de permiso retribuido, con el 100 % de la base reguladora."
      },
      {
        type: "paragraph",
        text: "Este permiso tiene como objetivo garantizar el descanso y el cuidado del recién nacido, fomentando además la corresponsabilidad entre ambos padres."
      },
      {
        type: "heading",
        text: "Cuantía de la prestación por maternidad"
      },
      {
        type: "paragraph",
        text: "La cuantía económica corresponde al 100 % de la base reguladora del trabajador o trabajadora."
      },
      {
        type: "paragraph",
        text: "La base reguladora se calcula a partir de la base de cotización del mes anterior al inicio del descanso por maternidad."
      },
      {
        type: "highlight",
        text: "Por ejemplo, si una trabajadora tenía una base de cotización de 1.950 € el mes anterior, cobrará esa misma cantidad durante el periodo de baja."
      },
      {
        type: "highlight",
        text: "💡 En esta prestación no se aplican descuentos ni deducciones de IRPF, ya que está exenta de impuestos."
      },
      {
        type: "paragraph",
        text: "En el caso de las trabajadoras autónomas, la cuantía equivale al 100 % de la base de cotización elegida (por lo general, la base mínima si no se ha modificado)."
      },
      {
        type: "heading",
        text: "Quién puede beneficiarse de la baja por maternidad"
      },
      {
        type: "paragraph",
        text: "Tienen derecho a la prestación por maternidad:"
      },
      {
        type: "list",
        items: [
          "Trabajadoras y trabajadores por cuenta ajena afiliados y en alta en la Seguridad Social.",
          "Trabajadoras autónomas, siempre que estén dadas de alta y al corriente en sus pagos.",
          "Personas que estén cobrando el paro o subsidios, ya que el INSS asume el pago durante el periodo de baja.",
          "En casos de adopción o acogimiento, cualquiera de los progenitores puede ser beneficiario."
        ]
      },
      {
        type: "heading",
        text: "Requisitos de cotización según la edad"
      },
      {
        type: "paragraph",
        text: "Para tener derecho a la prestación contributiva por maternidad, se deben cumplir unos mínimos de cotización. Estos requisitos dependen de la edad de la madre en el momento del parto, adopción o acogimiento:"
      },
      {
        type: "table",
        headers: ["Edad de la madre", "Días cotizados necesarios"],
        rows: [
          ["Menos de 21 años", "No se exige cotización mínima"],
          ["Entre 21 y 26 años", "90 días en los últimos 7 años o 180 días en total"],
          ["Más de 26 años", "180 días en los últimos 7 años o 360 días en total"]
        ]
      },
      {
        type: "paragraph",
        text: "Si no se cumple con los periodos exigidos, es posible acceder a una prestación no contributiva (subsidio por maternidad), destinada a madres sin recursos o con cotizaciones insuficientes."
      },
      {
        type: "heading",
        text: "Duración del permiso de maternidad"
      },
      {
        type: "paragraph",
        text: "El permiso tiene una duración total de 16 semanas, que se pueden distribuir de la siguiente manera:"
      },
      {
        type: "list",
        items: [
          "6 semanas obligatorias tras el parto, que deben disfrutarse de forma ininterrumpida y a jornada completa por motivos de recuperación.",
          "10 semanas adicionales que se pueden distribuir de forma flexible dentro del primer año de vida del bebé.",
          "Ambos progenitores tienen las mismas 16 semanas, y pueden disfrutarlas simultáneamente o en distintos periodos, según la organización familiar."
        ]
      },
      {
        type: "heading",
        text: "Casos especiales de ampliación:"
      },
      {
        type: "list",
        items: [
          "Parto múltiple: +2 semanas por cada hijo adicional.",
          "Hijo con discapacidad: +1 semana adicional.",
          "Parto prematuro o ingreso hospitalario del bebé: la baja se amplía hasta que el menor reciba el alta (con un máximo de 13 semanas extra)."
        ]
      },
      {
        type: "heading",
        text: "Cuándo se puede iniciar la baja por maternidad"
      },
      {
        type: "paragraph",
        text: "La madre puede iniciar el descanso por maternidad:"
      },
      {
        type: "list",
        items: [
          "El mismo día del parto o al día siguiente.",
          "O hasta 4 semanas antes de la fecha prevista de parto, siempre que lo indique el médico en el informe de maternidad.",
          "En casos de adopción o acogimiento, el permiso comienza desde la resolución judicial o administrativa."
        ]
      },
      {
        type: "highlight",
        text: "Importante: si la baja se inicia antes del parto, las semanas utilizadas antes se descuentan del total de 16 semanas."
      },
      {
        type: "heading",
        text: "Cómo solicitar la baja por maternidad paso a paso"
      },
      {
        type: "paragraph",
        text: "El trámite se realiza ante el Instituto Nacional de la Seguridad Social (INSS)."
      },
      {
        type: "paragraph",
        text: "Se puede gestionar online desde la Sede Electrónica de la Seguridad Social o presencialmente con cita previa."
      },
      {
        type: "heading",
        text: "Paso 1: Preparar la documentación"
      },
      {
        type: "paragraph",
        text: "La documentación varía según el tipo de situación (nacimiento, adopción o acogimiento)."
      },
      {
        type: "heading",
        text: "Documentación general:"
      },
      {
        type: "list",
        items: [
          "DNI o NIE del solicitante.",
          "Formulario oficial de solicitud (disponible en la web del INSS).",
          "Número de cuenta bancaria.",
          "Certificado de empresa que acredite la situación de baja laboral."
        ]
      },
      {
        type: "heading",
        text: "Por nacimiento:"
      },
      {
        type: "list",
        items: [
          "Informe médico de maternidad (emitido por el hospital o centro de salud).",
          "Libro de familia o certificado de nacimiento del bebé."
        ]
      },
      {
        type: "heading",
        text: "Por adopción o acogimiento:"
      },
      {
        type: "list",
        items: [
          "Resolución judicial o administrativa que acredite el proceso."
        ]
      },
      {
        type: "heading",
        text: "Paso 2: Presentar la solicitud"
      },
      {
        type: "paragraph",
        text: "Se puede presentar:"
      },
      {
        type: "list",
        items: [
          "A través de la Sede Electrónica del INSS, con certificado digital, DNI electrónico o Cl@ve PIN.",
          "En persona, en una oficina de la Seguridad Social con cita previa."
        ]
      },
      {
        type: "paragraph",
        text: "El plazo para presentar la solicitud es de 15 días hábiles desde el inicio del descanso."
      },
      {
        type: "heading",
        text: "Paso 3: Resolución y cobro"
      },
      {
        type: "paragraph",
        text: "El INSS revisará la documentación y aprobará la prestación en un plazo aproximado de 15 a 30 días."
      },
      {
        type: "paragraph",
        text: "Una vez aprobada, el pago se realiza mensualmente, normalmente entre los días 1 y 5 de cada mes."
      },
      {
        type: "heading",
        text: "La baja maternal mientras se cobra el paro"
      },
      {
        type: "paragraph",
        text: "Si la persona beneficiaria está recibiendo el paro, el SEPE suspende temporalmente el subsidio y la Seguridad Social asume el pago durante el periodo de maternidad."
      },
      {
        type: "paragraph",
        text: "Cuando finaliza el permiso, el paro se reanuda automáticamente por el tiempo restante."
      },
      {
        type: "paragraph",
        text: "Si no tienes derecho al paro ni cumples los requisitos de cotización, puedes solicitar el subsidio no contributivo por maternidad, gestionado también por el INSS."
      },
      {
        type: "heading",
        text: "La baja por maternidad en las trabajadoras autónomas"
      },
      {
        type: "paragraph",
        text: "Las trabajadoras autónomas disfrutan de los mismos derechos que las asalariadas:"
      },
      {
        type: "list",
        items: [
          "16 semanas de permiso retribuido.",
          "Cobro del 100 % de la base reguladora.",
          "Bonificación del 100 % de la cuota de autónomos durante la baja."
        ]
      },
      {
        type: "paragraph",
        text: "Para acceder a la prestación deben:"
      },
      {
        type: "list",
        items: [
          "Estar dadas de alta en el Régimen Especial de Trabajadores Autónomos (RETA).",
          "Estar al corriente de sus pagos con la Seguridad Social.",
          "Cumplir los mismos requisitos de cotización que cualquier trabajadora por cuenta ajena."
        ]
      },
      {
        type: "heading",
        text: "¿Está exenta del IRPF?"
      },
      {
        type: "paragraph",
        text: "Sí."
      },
      {
        type: "paragraph",
        text: "El Tribunal Supremo, en su sentencia de 2018, estableció que las prestaciones por maternidad y paternidad están exentas del IRPF."
      },
      {
        type: "paragraph",
        text: "Esto significa que no se declaran como ingresos en la declaración de la renta y no se les aplica retención alguna."
      },
      {
        type: "heading",
        text: "¿Quién paga la baja por maternidad?"
      },
      {
        type: "paragraph",
        text: "El pago lo realiza directamente el Instituto Nacional de la Seguridad Social (INSS), no la empresa."
      },
      {
        type: "paragraph",
        text: "La empresa únicamente comunica el inicio de la baja y envía el certificado de cotizaciones."
      },
      {
        type: "heading",
        text: "¿Qué día se cobra la baja por maternidad?"
      },
      {
        type: "paragraph",
        text: "Generalmente, el pago se efectúa a primeros de mes, entre los días 1 y 5."
      },
      {
        type: "paragraph",
        text: "En algunos casos, el primer ingreso puede demorarse si la solicitud se aprueba a mitad de mes o si faltaba documentación por revisar."
      },
      {
        type: "heading",
        text: "¿Puedo pedir la baja por maternidad antes del parto?"
      },
      {
        type: "paragraph",
        text: "Sí."
      },
      {
        type: "paragraph",
        text: "Puedes solicitar la baja hasta 4 semanas antes del parto, presentando el informe médico de maternidad expedido por tu ginecólogo o centro de salud."
      },
      {
        type: "paragraph",
        text: "Las semanas disfrutadas antes del parto se descontarán del total de 16 semanas."
      },
      {
        type: "heading",
        text: "En resumen"
      },
      {
        type: "table",
        headers: ["Concepto", "Detalle"],
        rows: [
          ["Duración", "16 semanas"],
          ["Cuantía", "100 % de la base reguladora"],
          ["Inicio", "Día del parto o hasta 4 semanas antes"],
          ["Pago", "Seguridad Social"],
          ["IRPF", "Exenta"],
          ["Gestión", "INSS (online o presencial)"]
        ]
      },
      {
        type: "heading",
        text: "Consejos prácticos"
      },
      {
        type: "list",
        items: [
          "Solicita el informe médico de maternidad con antelación, sobre todo si prevés un parto antes de la fecha.",
          "Guarda una copia de todos los documentos enviados al INSS.",
          "Si eres autónoma, revisa tu base de cotización antes del parto, ya que determinará la cuantía a cobrar.",
          "Utiliza la Sede Electrónica de la Seguridad Social para agilizar el proceso: permite adjuntar documentos escaneados y consultar el estado de tu solicitud.",
          "Si tu hijo requiere hospitalización tras el parto, comunícalo al INSS: podrás ampliar tu permiso."
        ]
      },
      {
        type: "heading",
        text: "Conclusión"
      },
      {
        type: "paragraph",
        text: "La baja por maternidad es un derecho esencial que protege la salud, el bienestar y la estabilidad económica de las familias."
      },
      {
        type: "paragraph",
        text: "Conocer bien los plazos, los requisitos y la documentación necesaria te permitirá tramitarla sin complicaciones y disfrutar plenamente del tiempo con tu bebé."
      },
      {
        type: "paragraph",
        text: "En resumen: planifica, solicita con calma y aprovecha este periodo para lo más importante —tu recuperación y el cuidado de tu hijo."
      }
    ]
  }
};

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((id) => ({
    id: id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const post = blogPosts[id];
  
  return {
    title: post ? `${post.title} | Web Cursos SEPE` : "Artículo | Web Cursos SEPE",
    description: post?.description || "Información sobre trámites SEPE",
    alternates: {
      canonical: `/blog/${id}`,
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = blogPosts[id];

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow bg-white flex items-center justify-center py-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Artículo no encontrado</h1>
            <Link href="/" className="text-blue-600 hover:text-blue-800">
              Volver al inicio
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const Icon = post.icon;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ScrollProgressBar />
      
      <main className="flex-grow bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-6">
                <Link 
                  href="/" 
                  className="flex items-center text-blue-100 hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Volver
                </Link>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold mb-6">
                {post.title}
              </h1>
              <div className="flex items-center gap-6 text-blue-100">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  {post.readTime}
                </div>
                <span>•</span>
                <span>{post.date}</span>
              </div>
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
                <li className="text-gray-700">Blog</li>
                <li><span className="text-gray-400">/</span></li>
                <li className="text-gray-700">{post.title}</li>
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
                <article className="prose prose-lg max-w-none">
                  {/* Intro imagen */}
                  {post.image ? (
                    <div className="mb-12 rounded-2xl overflow-hidden shadow-lg">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={1200}
                        height={600}
                        className="w-full h-auto"
                        priority
                      />
                    </div>
                  ) : (
                    <div className="mb-12">
                      <ImagePlaceholder
                        height="300px"
                        gradient={post.gradient}
                        icon={<Icon className="w-32 h-32" />}
                      />
                    </div>
                  )}

                  {/* Contenido del artículo */}
                  <div className="space-y-6">
                    {post.content.map((item: any, index: number) => {
                      // Contamos solo los headings para insertar banners
                      const headingCount = post.content.slice(0, index).filter((i: any) => i.type === "heading").length;
                      
                      return (
                        <div key={index}>
                          {item.type === "heading" && (
                            <>
                              <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
                                {item.text}
                              </h2>
                              {/* Banner publicitario después de los headings 2, 5 y 9 */}
                              {(headingCount === 2 || headingCount === 5 || headingCount === 9) && (
                                <div className="my-8">
                                  <AdBanner type="horizontal" />
                                </div>
                              )}
                            </>
                          )}
                        {item.type === "paragraph" && (
                          <p className="text-lg text-gray-700 leading-relaxed">
                            {item.text}
                          </p>
                        )}
                        {item.type === "list" && (
                          <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 ml-4">
                            {item.items.map((listItem: string, idx: number) => (
                              <li key={idx}>{listItem}</li>
                            ))}
                          </ul>
                        )}
                        {item.type === "highlight" && (
                          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6 rounded-r-lg">
                            <p className="text-lg text-gray-800 font-medium">
                              {item.text}
                            </p>
                          </div>
                        )}
                        {item.type === "intro" && (
                          <p className="text-xl text-gray-800 leading-relaxed font-medium mb-6">
                            {item.text}
                          </p>
                        )}
                        {item.type === "table" && (
                          <div className="overflow-x-auto my-8">
                            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                              <thead className="bg-gray-50">
                                <tr>
                                  {item.headers.map((header: string, hidx: number) => (
                                    <th key={hidx} className="px-6 py-4 text-left text-sm font-bold text-gray-900 border-b">
                                      {header}
                                    </th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody>
                                {item.rows.map((row: string[], idx: number) => (
                                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                                    {row.map((cell: string, cidx: number) => (
                                      <td key={cidx} className="px-6 py-4 text-sm text-gray-700 border-b">
                                        {cell}
                                      </td>
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        )}
                        </div>
                      );
                    })}
                  </div>
                </article>

                {/* CTA Final */}
                <div className="mt-16 p-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl text-white">
                  <h3 className="text-2xl font-bold mb-4">¿Necesitas más ayuda?</h3>
                  <p className="text-blue-100 mb-6">
                    Consulta nuestra guía completa o contacta con el SEPE directamente
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/informacion-oficial"
                      className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      Ver Información Oficial
                    </Link>
                    <Link
                      href="/contacto"
                      className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                    >
                      Contactar
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

