"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";
import { Mail, CheckCircle, Shield, FileText } from "lucide-react";

export default function NewsletterPage() {
  const [formData, setFormData] = useState({
    email: "",
    nombre: "",
    consentimiento: false,
    comunicaciones: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validaciones
    if (!formData.email) {
      setError("El correo electrónico es obligatorio");
      return;
    }

    if (!formData.consentimiento) {
      setError("Debes aceptar la política de privacidad para suscribirte");
      return;
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Por favor, introduce un correo electrónico válido");
      return;
    }

    // Aquí iría la lógica para enviar los datos al servidor
    // Por ahora simulamos el envío exitoso
    console.log("Datos del formulario:", formData);
    
    // Simular envío
    setTimeout(() => {
      setSubmittedEmail(formData.email);
      setSubmitted(true);
      setFormData({
        email: "",
        nombre: "",
        consentimiento: false,
        comunicaciones: false,
      });
    }, 500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow bg-white">
          <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl mx-auto text-center">
                <CheckCircle className="w-20 h-20 mx-auto mb-6 text-green-300" />
                <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                  ¡Suscripción Confirmada!
                </h1>
                <p className="text-xl text-blue-100">
                  Gracias por suscribirte a nuestra newsletter
                </p>
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 text-center">
                <p className="text-lg text-gray-700 mb-6">
                  Hemos recibido tu solicitud de suscripción a <strong>{submittedEmail}</strong>. 
                  Por favor, revisa tu bandeja de entrada y haz clic en el enlace de confirmación si lo recibes.
                </p>
                <p className="text-gray-600 mb-8">
                  Si no recibes el correo en unos minutos, revisa tu carpeta de spam.
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Volver al inicio
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <Mail className="w-16 h-16 mx-auto mb-6" />
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                Suscríbete a Nuestra Newsletter
              </h1>
              <p className="text-xl text-blue-100">
                Recibe información actualizada sobre cursos SEPE, ayudas, prestaciones y trámites
              </p>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <div className="bg-gray-50 py-4 border-b">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-sm">
              <ol className="flex items-center space-x-2">
                <li><Link href="/" className="text-blue-600 hover:text-blue-800">Inicio</Link></li>
                <li><span className="text-gray-400">/</span></li>
                <li className="text-gray-700">Newsletter</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Formulario de Suscripción */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Formulario de Suscripción Gratuita
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Completa el siguiente formulario para recibir nuestra newsletter gratuita con:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6 ml-4">
                    <li>Últimas noticias sobre cursos SEPE y formación profesional</li>
                    <li>Información sobre nuevas ayudas y prestaciones</li>
                    <li>Guías prácticas sobre trámites administrativos</li>
                    <li>Consejos y actualizaciones sobre el SEPE</li>
                  </ul>
                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
                    <p className="text-blue-900 font-semibold">
                      💰 Suscripción 100% Gratuita
                    </p>
                    <p className="text-blue-800 text-sm mt-1">
                      No se requiere ningún pago. Puedes darte de baja en cualquier momento.
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Campo Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                      Correo Electrónico <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="tu@email.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  {/* Campo Nombre (Opcional) */}
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-semibold text-gray-900 mb-2">
                      Nombre (Opcional)
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Nos ayuda a personalizar los correos que te enviamos
                    </p>
                  </div>

                  {/* Checkbox Consentimiento RGPD - OBLIGATORIO */}
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <label className="flex items-start cursor-pointer">
                      <input
                        type="checkbox"
                        id="consentimiento"
                        name="consentimiento"
                        checked={formData.consentimiento}
                        onChange={handleChange}
                        required
                        className="mt-1 mr-3 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <div className="flex-1">
                        <span className="text-sm font-semibold text-gray-900">
                          Acepto la política de privacidad <span className="text-red-500">*</span>
                        </span>
                        <p className="text-xs text-gray-600 mt-1">
                          He leído y acepto la{" "}
                          <Link href="/privacidad" className="text-blue-600 underline hover:text-blue-800" target="_blank">
                            política de privacidad
                          </Link>
                          {" "}y doy mi consentimiento para el tratamiento de mis datos personales conforme al Reglamento General de Protección de Datos (RGPD).
                        </p>
                        <div className="mt-2 flex items-start">
                          <Shield className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                          <p className="text-xs text-gray-600">
                            Tus datos serán tratados de forma segura y confidencial. Solo los utilizaremos para enviarte la newsletter 
                            y mejorar nuestros servicios. Tienes derecho a acceder, rectificar, cancelar u oponerte al tratamiento de tus datos 
                            en cualquier momento.
                          </p>
                        </div>
                      </div>
                    </label>
                  </div>

                  {/* Checkbox Comunicaciones Comerciales - OPCIONAL */}
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <label className="flex items-start cursor-pointer">
                      <input
                        type="checkbox"
                        id="comunicaciones"
                        name="comunicaciones"
                        checked={formData.comunicaciones}
                        onChange={handleChange}
                        className="mt-1 mr-3 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <div className="flex-1">
                        <span className="text-sm font-semibold text-gray-900">
                          Acepto recibir comunicaciones comerciales (Opcional)
                        </span>
                        <p className="text-xs text-gray-600 mt-1">
                          Quiero recibir información sobre ofertas, promociones y novedades relacionadas con nuestros servicios. 
                          Puedes cambiar esta preferencia en cualquier momento.
                        </p>
                      </div>
                    </label>
                  </div>

                  {/* Mensaje de Error */}
                  {error && (
                    <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded-r-lg">
                      <p className="text-red-800 text-sm">{error}</p>
                    </div>
                  )}

                  {/* Botón de Envío */}
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors text-lg"
                  >
                    Suscribirme Gratis
                  </button>
                </form>

                {/* Información Adicional */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <FileText className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Información sobre tus datos</h3>
                        <p className="text-sm text-gray-600">
                          Responsable del tratamiento: Web Cursos SEPE. Finalidad: Envío de newsletter informativa. 
                          Legitimación: Consentimiento del interesado. Conservación: Hasta que solicites la baja. 
                          Derechos: Acceso, rectificación, supresión, oposición, portabilidad y limitación del tratamiento.
                        </p>
                      </div>
                    </div>

                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                      <p className="text-sm text-yellow-900">
                        <strong>Derecho de cancelación:</strong> Puedes darte de baja en cualquier momento haciendo clic 
                        en el enlace que encontrarás en cada correo electrónico que recibas, o contactándonos a través 
                        de nuestro{" "}
                        <Link href="/contacto" className="underline font-semibold">
                          formulario de contacto
                        </Link>
                        .
                      </p>
                    </div>

                    <div className="text-center">
                      <Link 
                        href="/privacidad" 
                        className="text-sm text-blue-600 hover:text-blue-800 underline"
                      >
                        Ver Política de Privacidad completa
                      </Link>
                    </div>
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
