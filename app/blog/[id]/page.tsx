import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSidebar from "@/components/AdSidebar";
import AdBanner from "@/components/AdBanner";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import BlogViewTracker from "@/components/BlogViewTracker";
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
  },
  "ayudas-discapacitados": {
    title: "Ayudas Disponibles para Personas con Discapacidad o Diversidad Funcional",
    description: "Guía completa sobre todas las ayudas y prestaciones disponibles para personas con discapacidad: sistema de Seguridad Social, subvenciones autonómicas y locales, y ayudas fiscales.",
    icon: Heart,
    gradient: "from-green-500 to-emerald-600",
    category: "Ayudas",
    date: "2024",
    readTime: "12 min",
    image: "/images/Blog/ayudas-discapacidad.png",
    content: [
      {
        type: "intro",
        text: "La plena inclusión y el bienestar de las personas con discapacidad o diversidad funcional son pilares fundamentales de la política social en España. Para ello, se ha establecido un amplio abanico de ayudas y prestaciones que buscan garantizar la igualdad de oportunidades, la autonomía personal y la mejora de la calidad de vida."
      },
      {
        type: "paragraph",
        text: "La elegibilidad para estas ayudas se determina considerando una serie de características individuales, que incluyen: la edad, el tipo y grado de discapacidad (especialmente a partir del 33%, que es el umbral mínimo para la mayoría de los beneficios), el grado de limitación en las actividades diarias, el nivel de dependencia y la situación socioeconómica."
      },
      {
        type: "paragraph",
        text: "A continuación, se presenta un índice detallado de las principales categorías de ayudas, invitando a una consulta exhaustiva de cada sección para obtener información completa y específica."
      },
      {
        type: "heading",
        text: "1. Ayudas del Sistema de Seguridad Social"
      },
      {
        type: "paragraph",
        text: "El Ministerio de Inclusión, Seguridad Social y Migraciones, a través de sus diversos organismos, desempeña un papel fundamental en la provisión de apoyo económico a personas con un determinado grado de discapacidad o diversidad funcional, así como a sus familiares dependientes. Estas prestaciones se estructuran principalmente en dos modalidades:"
      },
      {
        type: "list",
        items: [
          "Modalidades Contributivas: Requieren que el beneficiario haya cotizado a la Seguridad Social durante un período mínimo establecido. Son pensiones que se generan a partir de la trayectoria laboral del individuo.",
          "Modalidades No Contributivas: Dirigidas a quienes carecen de recursos económicos suficientes y no han cotizado lo necesario para acceder a una pensión contributiva. Su objetivo es garantizar un mínimo de subsistencia y se basan en la situación de necesidad."
        ]
      },
      {
        type: "heading",
        text: "1.1. Prestaciones Económicas de Incapacidad Temporal"
      },
      {
        type: "paragraph",
        text: "Estas prestaciones están diseñadas para proteger económicamente a los trabajadores que, debido a una contingencia específica, se encuentran temporalmente incapacitados para realizar su trabajo habitual. Las causas pueden ser: enfermedad común, enfermedad profesional, accidente no laboral o accidente de trabajo."
      },
      {
        type: "list",
        items: [
          "Duración: El período inicial de la prestación es de 365 días. No obstante, existe la posibilidad de prorrogar este plazo por otros 180 días adicionales si se prevé que el trabajador tiene posibilidades reales de recuperación y reincorporación a su puesto.",
          "Objetivo: El propósito primordial de esta prestación es facilitar la recuperación del trabajador, permitiéndole centrarse en su salud sin la preocupación inmediata de la pérdida de ingresos, con el fin último de su reincorporación laboral en las mejores condiciones posibles."
        ]
      },
      {
        type: "heading",
        text: "1.2. Prestaciones Económicas por Incapacidad Permanente"
      },
      {
        type: "paragraph",
        text: "Las prestaciones por incapacidad permanente se conceden a trabajadores que, una vez agotado el tratamiento médico oportuno y las posibilidades de recuperación, presentan reducciones anatómicas o funcionales graves y definitivas. Estas reducciones deben disminuir o anular de forma significativa su capacidad para trabajar."
      },
      {
        type: "paragraph",
        text: "Para acceder a estas prestaciones, se exige generalmente un período mínimo de cotización, con la notable excepción de los casos derivados de accidente (ya sea laboral o no) o enfermedad profesional, donde no se requiere cotización previa."
      },
      {
        type: "paragraph",
        text: "Las pensiones de Incapacidad Permanente se clasifican en diferentes grados, dependiendo del alcance de la limitación:"
      },
      {
        type: "list",
        items: [
          "Incapacidad Permanente Parcial: Se reconoce cuando el trabajador experimenta una reducción no inferior al 33% en el rendimiento para su profesión habitual. A pesar de esta limitación, el trabajador aún puede continuar desempeñando las tareas fundamentales de su ocupación, aunque con dificultad o con menor eficiencia. Esta modalidad implica una indemnización, no una pensión mensual vitalicia.",
          "Incapacidad Permanente Total: Esta clasificación inhabilita al trabajador para la realización de todas o las fundamentales tareas de su profesión habitual. Sin embargo, se le considera capacitado para dedicarse a otra actividad laboral diferente. Esta pensión es compatible con la realización de un trabajo distinto al que motivó la incapacidad.",
          "Incapacidad Permanente Absoluta: Califica al trabajador como impedido para el desempeño de cualquier profesión u oficio. Esto significa que la persona no puede realizar las tareas básicas de ninguna actividad laboral de forma eficiente o segura. Esta modalidad otorga una pensión vitalicia.",
          "Gran Invalidez: Es el grado más elevado de incapacidad permanente. Se reconoce cuando el trabajador, además de estar afectado por una incapacidad permanente absoluta, necesita la asistencia de otra persona para realizar los actos esenciales de la vida diaria. Estos actos incluyen actividades como comer, vestirse, desplazarse, asearse, etc. La pensión de Gran Invalidez incluye un complemento destinado a retribuir a la persona que asiste al gran inválido."
        ]
      },
      {
        type: "heading",
        text: "1.3. Prestaciones Económicas de Invalidez (Modalidad No Contributiva)"
      },
      {
        type: "paragraph",
        text: "Estas prestaciones están específicamente diseñadas para personas con discapacidad que se encuentran en una situación de necesidad económica, careciendo de recursos suficientes, y que, además, no cumplen con los requisitos de cotización necesarios para acceder a una pensión contributiva. Constituyen una red de seguridad para garantizar un mínimo de protección social."
      },
      {
        type: "heading",
        text: "Requisitos fundamentales:"
      },
      {
        type: "list",
        items: [
          "Edad: Tener una edad comprendida entre los 18 y los 65 años.",
          "Grado de discapacidad: Acreditar un grado de discapacidad igual o superior al 65%, ya sea psíquica, sensorial o física. Este porcentaje es crucial para determinar la elegibilidad.",
          "Residencia legal y efectiva: Residir legalmente en España y haberlo hecho durante un período mínimo de 5 años. De estos, al menos 2 años deben ser inmediatamente anteriores a la fecha de solicitud de la prestación.",
          "Carencia de ingresos suficientes: Los ingresos personales y/o los de la unidad familiar de convivencia (si la hubiera) no deben superar los límites establecidos anualmente por la ley. Estos límites se revisan periódicamente."
        ]
      },
      {
        type: "heading",
        text: "Cuantía de la prestación:"
      },
      {
        type: "paragraph",
        text: "La cuantía de la pensión de invalidez no contributiva está sujeta a las rentas del beneficiario y de su unidad familiar. Existe una cuantía mínima que no puede ser inferior al 25% de la cuantía fijada legalmente para la pensión no contributiva. Además, si el beneficiario requiere de la ayuda o asistencia de una tercera persona para realizar las actividades esenciales de la vida diaria, puede recibir un complemento adicional del 50% sobre la cuantía base de su pensión."
      },
      {
        type: "heading",
        text: "1.4. Prestaciones por Descendientes con Discapacidad (Modalidad Contributiva)"
      },
      {
        type: "paragraph",
        text: "Estas prestaciones están dirigidas a trabajadores que han cotizado previamente a la Seguridad Social y tienen a su cargo un descendiente con discapacidad. Su objetivo es brindar un apoyo económico a las familias que afrontan esta situación, reconociendo el esfuerzo y los costes adicionales que implica."
      },
      {
        type: "heading",
        text: "Requisitos esenciales:"
      },
      {
        type: "list",
        items: [
          "Condición de trabajador: Ser un trabajador que ha cumplido con los períodos mínimos de cotización establecidos por la legislación de la Seguridad Social para esta prestación.",
          "Descendiente a cargo: Tener a cargo un descendiente (hijo/a, nieto/a, etc.) menor de 18 años.",
          "Grado de discapacidad del descendiente: El descendiente debe tener un grado de discapacidad (sensorial, mental, física o intelectual) igual o superior al 65%. Este porcentaje es fundamental para el reconocimiento de la prestación."
        ]
      },
      {
        type: "paragraph",
        text: "Adicionalmente, el grado de dependencia del descendiente se evalúa para determinar el nivel de ayuda que necesita. Los grados de dependencia reconocidos son:"
      },
      {
        type: "list",
        items: [
          "Grado I: Dependencia Moderada. La persona necesita ayuda para realizar varias actividades básicas de la vida diaria al menos una vez al día, o tiene necesidades de apoyo intermitente o limitado para su autonomía personal.",
          "Grado II: Dependencia Severa. La persona necesita ayuda para realizar varias actividades básicas de la vida diaria dos o tres veces al día, pero no requiere la presencia permanente de un cuidador, o tiene necesidades de apoyo extenso para su autonomía personal.",
          "Grado III: Gran Dependencia. La persona necesita ayuda para realizar varias actividades básicas de la vida diaria varias veces al día y, por su pérdida total de autonomía física, mental, intelectual o sensorial, necesita el apoyo indispensable y continuo de otra persona o tiene necesidades de apoyo generalizado para su autonomía personal."
        ]
      },
      {
        type: "heading",
        text: "1.5. Prestaciones por Descendientes con Discapacidad (Modalidad No Contributiva)"
      },
      {
        type: "paragraph",
        text: "A diferencia de la modalidad contributiva, estas prestaciones económicas están destinadas a solicitantes que, si bien tienen a su cargo un descendiente en situación de discapacidad, no han cumplido con las cotizaciones mínimas estipuladas por el sistema de Seguridad Social. La clave para acceder a ellas es la demostración de una situación de necesidad económica."
      },
      {
        type: "heading",
        text: "Requisitos principales:"
      },
      {
        type: "list",
        items: [
          "Carencia de cotizaciones mínimas: El solicitante no debe haber cotizado el período mínimo exigido para acceder a las prestaciones contributivas.",
          "Descendiente a cargo: Tener a cargo un hijo o descendiente menor de 18 años o, en su caso, mayor de edad, que presente una minusvalía en un grado igual o superior al 65%.",
          "Acogimiento y dependencia: El descendiente debe estar acogido familiarmente por el solicitante y depender económicamente de este, formando parte de su unidad familiar.",
          "Carencia de recursos económicos: Los ingresos del solicitante y su unidad familiar no deben superar los umbrales económicos establecidos anualmente."
        ]
      },
      {
        type: "heading",
        text: "1.6. Prestación por Padre o Madre con Discapacidad"
      },
      {
        type: "paragraph",
        text: "Estas ayudas se dirigen a trabajadores que tienen a su progenitor o progenitora con discapacidad a cargo. Se otorga una cuantía estipulada reglamentariamente cuando la discapacidad del padre o la madre es igual o superior al 65%. De manera recíproca, esta prestación también aplica a una madre o padre con discapacidad (a partir del 65%) que tenga un hijo a cargo. La finalidad es reconocer la carga que supone el cuidado de un familiar dependiente y ofrecer un soporte económico."
      },
      {
        type: "heading",
        text: "2. Ayudas Económicas Individuales (Subvenciones Autonómicas y Locales)"
      },
      {
        type: "paragraph",
        text: "Más allá de las prestaciones que emanan directamente del sistema de Seguridad Social, existe una importante variedad de subvenciones y ayudas específicas gestionadas por las Comunidades Autónomas y los Ayuntamientos. Estas ayudas tienen como objetivo principal mejorar la calidad de vida, fomentar la autonomía personal y promover la plena integración de las personas con discapacidad en su entorno."
      },
      {
        type: "paragraph",
        text: "Es fundamental destacar que, debido a la naturaleza descentralizada de estas ayudas, las condiciones exactas, los plazos de solicitud, los importes y los criterios de elegibilidad pueden variar considerablemente de una Comunidad Autónoma a otra y entre diferentes Ayuntamientos. No obstante, las directrices nacionales suelen establecer las líneas generales sobre las que se articulan estas políticas."
      },
      {
        type: "heading",
        text: "2.1. Subvenciones para Vivienda"
      },
      {
        type: "paragraph",
        text: "El acceso a una vivienda adecuada y adaptada es un derecho fundamental. El Plan Estatal de Vivienda 2022-2025 (regulado por el Real Decreto 42/2022, de 18 de enero) incorpora programas específicos y de vital importancia para personas mayores y personas con discapacidad. Estos programas buscan facilitar tanto el acceso a la vivienda como la adaptación de las existentes para garantizar su habitabilidad y accesibilidad."
      },
      {
        type: "heading",
        text: "Ayudas para Compra o Alquiler de Vivienda Adaptada:"
      },
      {
        type: "list",
        items: [
          "Requisitos de la Vivienda: Para ser elegible, la vivienda debe ser de nueva construcción, haber sido objeto de una rehabilitación reciente, o ser cedida para uso exclusivo por personas mayores de 65 años o personas con discapacidad y su núcleo familiar. Es crucial que la vivienda se mantenga en este uso durante un plazo mínimo de 40 años. Además, un criterio importante es que la vivienda esté situada en un entorno que cuente con servicios cercanos y accesibles, tales como centros de salud, centros de rehabilitación, servicios de asistencia social y opciones de recreación.",
          "Beneficiarios (Propietarios de Inmuebles): Los propietarios de viviendas que se comprometan a destinar sus inmuebles al alquiler o cesión a personas con discapacidad pueden recibir subvenciones para llevar a cabo el acondicionamiento necesario de la vivienda. Esto incluye reformas que garanticen la accesibilidad universal y la habitabilidad óptima, adaptada a la diversidad funcional del futuro inquilino o propietario.",
          "Precio Límite: El precio máximo establecido para el alquiler o la cesión de estas viviendas no puede superar los 9,5 euros por metro cuadrado de área útil. Este límite busca asegurar la asequibilidad.",
          "Límites de Ingresos (Familiares con persona con discapacidad): Para las familias que incluyen a una persona con discapacidad, se establecen límites de ingresos para ser beneficiarios de estas ayudas. Generalmente, los ingresos de la unidad familiar no deben superar los 30.119 euros anuales. Este umbral se eleva a 37.648 euros anuales en el caso de familias donde reside una persona con un elevado grado de discapacidad, reconociendo los mayores gastos asociados."
        ]
      },
      {
        type: "heading",
        text: "Subvenciones para Adaptación de Vivienda:"
      },
      {
        type: "list",
        items: [
          "Objetivo: Estas ayudas están destinadas a financiar las reformas necesarias dentro de la vivienda para ajustarla a las necesidades específicas de la persona con discapacidad. Esto puede incluir la adaptación de cocinas, baños, dormitorios u otras áreas para facilitar la autonomía y la seguridad.",
          "Eliminación de Barreras Arquitectónicas: Una parte fundamental de estas subvenciones cubre la eliminación de barreras arquitectónicas, tanto en el interior del hogar como en los accesos al mismo. Esto abarca una amplia gama de soluciones, como la instalación de rampas para salvar desniveles, sillas salvaescaleras o plataformas salvaescaleras para garantizar la accesibilidad vertical en escaleras, ascensores domésticos para edificios sin ascensor o para viviendas unifamiliares, y grúas de techo o de bipedestación para facilitar los traslados de personas con gran dependencia. El objetivo es garantizar una accesibilidad total, tanto vertical como horizontal, dentro del hogar."
        ]
      },
      {
        type: "heading",
        text: "2.2. Subvenciones para Movilidad"
      },
      {
        type: "paragraph",
        text: "La autonomía en el desplazamiento es crucial para la integración social y laboral. Estas ayudas están específicamente diseñadas para facilitar la movilidad de personas con discapacidad motora o movilidad reducida, abarcando tanto el movimiento dentro del hogar como el desplazamiento exterior."
      },
      {
        type: "heading",
        text: "Adquisición de Productos de Asistencia:"
      },
      {
        type: "list",
        items: [
          "Sillas de ruedas: Manuales o eléctricas, adaptadas a las necesidades individuales.",
          "Scooters eléctricos: Para desplazamientos autónomos en distancias medias.",
          "Andadores: Para personas con dificultades de equilibrio o que necesitan apoyo para caminar.",
          "Otros dispositivos: Como muletas, bastones, sistemas de propulsión adaptados, etc."
        ]
      },
      {
        type: "heading",
        text: "Procedimiento de Solicitud:"
      },
      {
        type: "paragraph",
        text: "Para informarse sobre los requisitos específicos y el proceso de solicitud, las personas interesadas pueden acudir a:"
      },
      {
        type: "list",
        items: [
          "Servicio Social del Ayuntamiento: Los servicios sociales municipales son un primer punto de contacto para asesoramiento e información sobre ayudas locales y autonómicas.",
          "IMSERSO (Instituto de Mayores y Servicios Sociales): Este organismo, a través de sus delegaciones territoriales y en coordinación con las Comunidades Autónomas, gestiona y proporciona información sobre diversas ayudas, especialmente las relacionadas con la Ley de Promoción de la Autonomía Personal y Atención a las personas en situación de dependencia. La vía exacta dependerá de la comunidad autónoma de residencia."
        ]
      },
      {
        type: "heading",
        text: "2.3. Subvenciones para Vehículos"
      },
      {
        type: "paragraph",
        text: "La adquisición y adaptación de vehículos es fundamental para la autonomía de muchas personas con discapacidad. Para ello, existen diversas exenciones fiscales y beneficios que buscan reducir la carga económica:"
      },
      {
        type: "heading",
        text: "Descuento en el Precio:"
      },
      {
        type: "paragraph",
        text: "Algunos concesionarios de vehículos tienen políticas de descuentos directos para solicitantes que acrediten un certificado de discapacidad. Es imprescindible demostrar que el vehículo será para uso personal de la persona con discapacidad o para su transporte habitual."
      },
      {
        type: "heading",
        text: "Exoneraciones Fiscales:"
      },
      {
        type: "list",
        items: [
          "Impuesto de Matriculación: Las personas con un grado de discapacidad igual o superior al 33% están exentas de pagar el Impuesto de Matriculación al adquirir un vehículo nuevo.",
          "Impuesto de Circulación (Impuesto sobre Vehículos de Tracción Mecánica - IVTM): Existe una exención total de este impuesto para vehículos registrados a nombre de personas con discapacidad, siempre que se cumplan ciertos requisitos sobre el uso del vehículo.",
          "Reducción del IVA: Se aplica un tipo de IVA superreducido (actualmente 4%) en la compra de vehículos nuevos destinados a personas con discapacidad severa (generalmente igual o superior al 33% y con movilidad reducida reconocida) y para la adaptación de vehículos ya existentes. Esta reducción es significativa.",
          "Tarjeta de Estacionamiento Reservado: Esta tarjeta, de carácter personal e intransferible, permite estacionar en las plazas reservadas para personas con movilidad reducida. En muchas localidades, también habilita para estacionar en zonas de estacionamiento regulado sin coste o con condiciones especiales."
        ]
      },
      {
        type: "heading",
        text: "Subvenciones para Adaptación de Vehículos:"
      },
      {
        type: "list",
        items: [
          "Finalidad: Se conceden ayudas específicas para modificar un vehículo existente con los sistemas de conducción o transporte adaptados que la persona necesite. Esto puede incluir mandos adaptados, sistemas de anclaje para sillas de ruedas, rampas de acceso, elevadores, asientos giratorios, etc.",
          "Requisito: Es indispensable demostrar la propiedad del vehículo que se desea adaptar.",
          "Tramitación: La solicitud y gestión de estas ayudas se realiza generalmente a través de la Dirección General de Servicios Sociales o el organismo equivalente de cada Comunidad Autónoma."
        ]
      },
      {
        type: "heading",
        text: "Ayudas para Desplazamiento en Transporte:"
      },
      {
        type: "paragraph",
        text: "Para aquellas personas que no poseen vehículo propio o no pueden utilizarlo, existen subvenciones que cubren parte de los costes de transporte público o transporte adaptado. Estas ayudas son fundamentales para asistir a terapias, centros de trabajo, centros educativos o cualquier otra actividad esencial, fomentando la autonomía y la participación social."
      },
      {
        type: "heading",
        text: "2.4. Subvenciones para Formación, Estudio y Deporte"
      },
      {
        type: "paragraph",
        text: "Estas subvenciones son clave para garantizar la igualdad de oportunidades en el ámbito educativo, la capacitación profesional y la participación en actividades deportivas y culturales. Su objetivo es derribar barreras y facilitar el acceso de las personas con discapacidad a estas áreas vitales."
      },
      {
        type: "heading",
        text: "Cobertura:"
      },
      {
        type: "list",
        items: [
          "Matriculación: Financiación de las tasas de matriculación en instituciones educativas (universidades, centros de formación profesional, escuelas de idiomas, etc.).",
          "Material didáctico adaptado: Ayudas para la adquisición de libros en formatos accesibles, software específico, dispositivos de apoyo a la comunicación, lupas, teclados adaptados, etc.",
          "Transporte especializado: Subvenciones para cubrir los costes de un transporte adaptado que permita a la persona con discapacidad asistir a su centro educativo o de formación.",
          "Alimentación: En algunos casos, pueden cubrir gastos de alimentación asociados a la asistencia a centros o residencias.",
          "Asignación de residencias adaptadas: Ayudas para el alojamiento en residencias universitarias o de estudiantes que cuenten con las adaptaciones necesarias.",
          "Inscripción y material deportivo adaptado: Subvenciones para la inscripción en clubes o eventos deportivos, así como para la adquisición de material deportivo específico (sillas de ruedas deportivas, prótesis para deporte, etc.)."
        ]
      },
      {
        type: "heading",
        text: "Entidades Promotoras:"
      },
      {
        type: "paragraph",
        text: "Organizaciones como la Fundación ONCE son un referente en España en la promoción de la formación, el empleo y la accesibilidad para personas con discapacidad. Ofrecen una gran variedad de becas, programas de formación, ayudas para el emprendimiento y apoyo al deporte. Se recomienda encarecidamente consultar sus programas específicos y convocatorias, ya que son una fuente importante de recursos y oportunidades. Otras entidades públicas y privadas, así como federaciones deportivas, también ofrecen programas en este ámbito."
      },
      {
        type: "heading",
        text: "3. Ayudas Fiscales"
      },
      {
        type: "paragraph",
        text: "Las personas con un Certificado de Discapacidad o tarjeta acreditativa con un porcentaje igual o superior al 33% tienen derecho a acceder a diversas ayudas y beneficios fiscales. Estas ventajas se implementan tanto a nivel estatal como autonómico y local, por lo que es fundamental consultar la normativa específica en el Ayuntamiento o la Agencia Tributaria autonómica correspondiente para conocer todos los detalles."
      },
      {
        type: "heading",
        text: "Las principales ayudas fiscales incluyen:"
      },
      {
        type: "list",
        items: [
          "Disminución del Impuesto sobre la Renta de las Personas Físicas (IRPF): Se aplican deducciones y reducciones en la base imponible o en la cuota del IRPF, tanto para la propia persona con discapacidad (por ejemplo, por gastos sanitarios o por la propia discapacidad) como para los familiares que la tienen a cargo. El mínimo personal y familiar por discapacidad incrementa la parte de la renta que no tributa, tanto para el contribuyente con discapacidad como para sus ascendientes o descendientes con discapacidad a cargo.",
          "Exoneración de Impuestos de Vehículos: Exención total del Impuesto de Matriculación y del Impuesto sobre Vehículos de Tracción Mecánica (IVTM) / Impuesto de Circulación para vehículos registrados a nombre de personas con discapacidad.",
          "Disminución del IVA: Se aplica el tipo superreducido (4%) en la adquisición de una serie de bienes y servicios esenciales: vehículos para personas con discapacidad con movilidad reducida, productos sanitarios (prótesis, órtesis, material ortopédico), servicios de teleasistencia, adaptación de viviendas, servicios de asistencia personal, etc.",
          "Bonificaciones en el Impuesto de Patrimonio y Ley de Sucesiones y Donaciones: Se aplican bonificaciones, reducciones en la base imponible o incluso exenciones en estos impuestos. Esto beneficia tanto a las propias personas con discapacidad que posean patrimonio, como a aquellos que reciban herencias o donaciones en su favor, facilitando la transmisión de bienes y el acceso a recursos. Las particularidades varían mucho según la Comunidad Autónoma, ya que tienen amplias competencias en estos impuestos."
        ]
      },
      {
        type: "heading",
        text: "Preguntas Frecuentes (FAQ) sobre Ayudas para Personas con Discapacidad"
      },
      {
        type: "paragraph",
        text: "Para facilitar la comprensión y el acceso a la información, se responden algunas de las preguntas más comunes relacionadas con las ayudas y beneficios para personas con discapacidad:"
      },
      {
        type: "heading",
        text: "Q1: ¿Cómo se obtiene el certificado de discapacidad?"
      },
      {
        type: "paragraph",
        text: "El certificado de discapacidad es el documento oficial que acredita el grado de discapacidad de una persona. Se solicita en los Centros de Valoración y Orientación de Personas con Discapacidad dependientes de la Consejería de Bienestar Social (o el organismo equivalente) de cada Comunidad Autónoma. El proceso implica una evaluación integral por parte de un equipo multidisciplinar (médicos, psicólogos, trabajadores sociales) que valorará las limitaciones funcionales, las barreras del entorno y el impacto en la vida diaria de la persona, determinando finalmente el grado de discapacidad en porcentaje."
      },
      {
        type: "heading",
        text: "Q2: ¿Qué significa \"grado de discapacidad del 33% o superior\"?"
      },
      {
        type: "paragraph",
        text: "El 33% es el umbral mínimo establecido por la legislación española para que una persona con discapacidad pueda acceder a la gran mayoría de las ayudas, beneficios fiscales y derechos específicos (como la reserva de empleo público, ventajas en transporte, etc.). Un grado de discapacidad inferior a este porcentaje, aunque reconozca algún tipo de limitación, generalmente no da acceso a los mismos derechos y beneficios. Es el punto de partida para ser considerado legalmente como persona con discapacidad a efectos de la aplicación de la normativa de protección y fomento de la igualdad de oportunidades."
      },
      {
        type: "heading",
        text: "Q3: ¿Las ayudas son compatibles entre sí?"
      },
      {
        type: "paragraph",
        text: "La compatibilidad de las diferentes ayudas es una cuestión fundamental y compleja que depende de la naturaleza específica de cada ayuda. Es crucial consultar las bases de cada convocatoria o la normativa reguladora."
      },
      {
        type: "list",
        items: [
          "Incompatibilidad: Algunas prestaciones son incompatibles entre sí, especialmente si tienen la misma finalidad o derivan del mismo hecho causante (por ejemplo, dos pensiones de la Seguridad Social por la misma incapacidad). La percepción de una pensión de invalidez no contributiva suele ser incompatible con una pensión de la Seguridad Social.",
          "Compatibilidad: Muchas otras ayudas son compatibles. Por ejemplo, es común que una persona perciba una prestación por discapacidad y, a la vez, reciba una subvención para la adaptación de su vivienda, una ayuda para la movilidad o beneficios fiscales. Las ayudas para el fomento del empleo o la formación también suelen ser compatibles con las pensiones."
        ]
      },
      {
        type: "highlight",
        text: "Recomendación: Ante cualquier duda, la mejor práctica es informarse detalladamente en los organismos gestores de cada ayuda o consultar con un profesional (trabajador social, abogado especializado) para evitar incurrir en incompatibilidades que puedan acarrear la suspensión o devolución de las prestaciones."
      },
      {
        type: "heading",
        text: "Q4: ¿Dónde puedo obtener información personalizada?"
      },
      {
        type: "paragraph",
        text: "Para obtener información específica y adaptada a su caso particular, se recomienda encarecidamente acudir a las siguientes fuentes:"
      },
      {
        type: "list",
        items: [
          "Los Centros de Atención Primaria de Servicios Sociales de su Ayuntamiento: Son el primer escalón y la puerta de entrada al sistema de servicios sociales. Ofrecen asesoramiento general, información sobre recursos locales, ayudas municipales y orientación sobre cómo acceder a otros niveles de la administración.",
          "Las Consejerías de Bienestar Social o Asuntos Sociales de su Comunidad Autónoma: Estos organismos gestionan la mayoría de las políticas autonómicas de discapacidad, incluyendo el certificado de discapacidad, ayudas a la dependencia, programas de vivienda, empleo y mucho más.",
          "Organizaciones y asociaciones de personas con discapacidad (ONCE, CERMI, etc.): Estas entidades, como la Organización Nacional de Ciegos Españoles (ONCE) o el Comité Español de Representantes de Personas con Discapacidad (CERMI), son una fuente inestimable de información, asesoramiento y apoyo. Tienen una vasta experiencia y conocimiento de los derechos y recursos disponibles, además de ofrecer sus propios programas.",
          "La Sede Electrónica de la Seguridad Social: Para todo lo relacionado con prestaciones y pensiones del sistema de Seguridad Social (incapacidad temporal, permanente, prestaciones por descendientes, etc.), su página web y sus oficinas son el canal oficial para la información y la gestión.",
          "Agencia Tributaria: Para consultas sobre ayudas y beneficios fiscales, tanto a nivel estatal como autonómico, la Agencia Tributaria y las Haciendas Autonómicas ofrecen información detallada y servicios de asesoramiento."
        ]
      },
      {
        type: "paragraph",
        text: "Es fundamental recordar que la información y los requisitos pueden actualizarse, por lo que siempre es recomendable verificar los datos más recientes en las fuentes oficiales."
      }
    ]
  },
  "prestacion-hijo-cargo": {
    title: "Prestación por Hijo a Cargo: Requisitos y Cuantía 2024",
    description: "Guía completa sobre la prestación por hijo a cargo: requisitos, cuantía, cómo solicitarla y diferencias entre prestación contributiva y no contributiva.",
    icon: Users,
    gradient: "from-orange-500 to-amber-600",
    category: "Ayudas",
    date: "2024",
    readTime: "8 min",
    image: undefined,
    content: [
      {
        type: "intro",
        text: "La prestación por hijo a cargo es una ayuda económica que proporciona la Seguridad Social a las familias que tienen menores o personas con discapacidad a su cargo. Esta prestación busca aliviar la carga económica que supone el cuidado y mantenimiento de los hijos, especialmente en situaciones de necesidad."
      },
      {
        type: "paragraph",
        text: "Existen dos modalidades principales de esta prestación: la contributiva y la no contributiva. Cada una tiene requisitos específicos y está dirigida a diferentes perfiles de beneficiarios. En esta guía te explicamos todo lo que necesitas saber para acceder a esta ayuda."
      },
      {
        type: "heading",
        text: "¿Qué es la prestación por hijo a cargo?"
      },
      {
        type: "paragraph",
        text: "La prestación por hijo a cargo es una ayuda económica mensual que se otorga a las familias que tienen a su cargo hijos menores de 18 años o mayores de edad con discapacidad. Esta prestación forma parte del sistema de protección social y tiene como objetivo apoyar económicamente a las familias en el cuidado y mantenimiento de sus hijos."
      },
      {
        type: "paragraph",
        text: "Esta ayuda puede ser de dos tipos: contributiva (para trabajadores que han cotizado) o no contributiva (para personas sin recursos suficientes que no han cotizado lo necesario)."
      },
      {
        type: "heading",
        text: "Modalidades de la prestación"
      },
      {
        type: "heading",
        text: "1. Prestación Contributiva por Hijo a Cargo"
      },
      {
        type: "paragraph",
        text: "Esta modalidad está dirigida a trabajadores que han cotizado a la Seguridad Social y tienen hijos a su cargo. Es compatible con el trabajo y se paga de forma mensual."
      },
      {
        type: "heading",
        text: "Requisitos para la prestación contributiva:"
      },
      {
        type: "list",
        items: [
          "Tener un hijo menor de 18 años a cargo, o mayor de 18 años con discapacidad igual o superior al 65%.",
          "Estar afiliado y en alta en la Seguridad Social, o en situación asimilada al alta.",
          "Haber cotizado un mínimo de días en los últimos 5 años (generalmente 500 días).",
          "Tener ingresos inferiores a determinados límites establecidos anualmente.",
          "Que el hijo resida en España y conviva con el beneficiario."
        ]
      },
      {
        type: "heading",
        text: "Cuantía de la prestación contributiva:"
      },
      {
        type: "paragraph",
        text: "La cuantía de la prestación contributiva por hijo a cargo varía según la situación familiar y los ingresos. En 2024, las cuantías aproximadas son:"
      },
      {
        type: "list",
        items: [
          "Hijo menor de 18 años sin discapacidad: aproximadamente 341 euros anuales (28,42 euros mensuales).",
          "Hijo con discapacidad igual o superior al 33%: aproximadamente 1.000 euros anuales (83,33 euros mensuales).",
          "Hijo con discapacidad igual o superior al 65%: aproximadamente 4.700 euros anuales (391,67 euros mensuales)."
        ]
      },
      {
        type: "highlight",
        text: "Importante: Estas cuantías son orientativas y pueden variar según la normativa vigente. Se recomienda consultar las cuantías actualizadas en la web oficial de la Seguridad Social."
      },
      {
        type: "heading",
        text: "2. Prestación No Contributiva por Hijo a Cargo"
      },
      {
        type: "paragraph",
        text: "Esta modalidad está dirigida a familias con escasos recursos económicos que no han cotizado lo suficiente para acceder a la prestación contributiva. Es una ayuda de carácter asistencial."
      },
      {
        type: "heading",
        text: "Requisitos para la prestación no contributiva:"
      },
      {
        type: "list",
        items: [
          "Tener un hijo menor de 18 años a cargo, o mayor de 18 años con discapacidad igual o superior al 65%.",
          "No haber cotizado lo suficiente para acceder a la prestación contributiva.",
          "Carecer de recursos económicos suficientes (los ingresos de la unidad familiar no deben superar los límites establecidos).",
          "Residir legalmente en España y haberlo hecho durante al menos 5 años, de los cuales 2 deben ser inmediatamente anteriores a la solicitud.",
          "Que el hijo resida en España y conviva con el beneficiario."
        ]
      },
      {
        type: "heading",
        text: "Límites de ingresos para la prestación no contributiva:"
      },
      {
        type: "paragraph",
        text: "Los límites de ingresos se establecen anualmente y varían según la composición de la unidad familiar. En general, se tienen en cuenta:"
      },
      {
        type: "list",
        items: [
          "Los ingresos del solicitante y de todos los miembros de la unidad familiar.",
          "El patrimonio familiar (bienes, propiedades, etc.).",
          "El número de hijos a cargo y su situación (con o sin discapacidad)."
        ]
      },
      {
        type: "paragraph",
        text: "Se recomienda consultar los límites actualizados en la web de la Seguridad Social o en las oficinas del INSS."
      },
      {
        type: "heading",
        text: "Cuantía de la prestación no contributiva:"
      },
      {
        type: "paragraph",
        text: "La cuantía de la prestación no contributiva es similar a la contributiva, pero está sujeta a los ingresos de la unidad familiar. Puede ser reducida si los ingresos superan determinados umbrales."
      },
      {
        type: "heading",
        text: "¿Cómo solicitar la prestación por hijo a cargo?"
      },
      {
        type: "paragraph",
        text: "El proceso de solicitud puede realizarse de forma presencial o telemática. Te explicamos ambos métodos:"
      },
      {
        type: "heading",
        text: "Solicitud online (Recomendado):"
      },
      {
        type: "list",
        items: [
          "Accede a la Sede Electrónica de la Seguridad Social (sede.seg-social.gob.es).",
          "Identifícate con tu certificado digital, DNI electrónico o Cl@ve.",
          "Busca el trámite \"Prestación por hijo a cargo\" en el menú de prestaciones familiares.",
          "Cumplimenta el formulario con todos los datos requeridos.",
          "Adjunta la documentación necesaria en formato digital.",
          "Envía la solicitud y guarda el justificante."
        ]
      },
      {
        type: "heading",
        text: "Solicitud presencial:"
      },
      {
        type: "list",
        items: [
          "Solicita cita previa en el INSS (Instituto Nacional de la Seguridad Social).",
          "Acude a la cita con toda la documentación necesaria.",
          "Presenta el formulario de solicitud cumplimentado.",
          "El funcionario revisará la documentación y te dará un resguardo de la solicitud."
        ]
      },
      {
        type: "heading",
        text: "Documentación necesaria:"
      },
      {
        type: "list",
        items: [
          "DNI o NIE del solicitante y de todos los miembros de la unidad familiar.",
          "Libro de familia o certificado de empadronamiento que acredite la convivencia.",
          "Certificado de discapacidad (si el hijo tiene discapacidad igual o superior al 33%).",
          "Justificantes de ingresos de todos los miembros de la unidad familiar (nóminas, declaración de la renta, etc.).",
          "Certificado de empadronamiento de todos los miembros de la familia.",
          "Documentación acreditativa de la situación laboral (vida laboral, certificado de empresa, etc.).",
          "IBAN para el cobro de la prestación."
        ]
      },
      {
        type: "heading",
        text: "Plazo de resolución"
      },
      {
        type: "paragraph",
        text: "El plazo máximo para resolver la solicitud de prestación por hijo a cargo es de 90 días desde la presentación de la solicitud. Si transcurrido este plazo no se ha recibido respuesta, se puede entender que la solicitud ha sido denegada por silencio administrativo."
      },
      {
        type: "paragraph",
        text: "En caso de aprobación, la prestación se abonará desde el mes siguiente a la presentación de la solicitud, siempre que se cumplan todos los requisitos desde esa fecha."
      },
      {
        type: "heading",
        text: "Compatibilidad con otras prestaciones"
      },
      {
        type: "paragraph",
        text: "La prestación por hijo a cargo es compatible con:"
      },
      {
        type: "list",
        items: [
          "Otras prestaciones familiares (prestación por nacimiento, ayuda familiar, etc.).",
          "Prestaciones por desempleo.",
          "Pensiones contributivas.",
          "Salarios y otros ingresos del trabajo."
        ]
      },
      {
        type: "paragraph",
        text: "Sin embargo, no es compatible con otras prestaciones no contributivas de la misma naturaleza si se perciben por el mismo hijo."
      },
      {
        type: "heading",
        text: "Duración y renovación"
      },
      {
        type: "paragraph",
        text: "La prestación por hijo a cargo se concede por períodos anuales y debe renovarse cada año mientras se sigan cumpliendo los requisitos. Es importante presentar la renovación antes de que finalice el período de vigencia para no perder el derecho a la prestación."
      },
      {
        type: "heading",
        text: "Casos especiales"
      },
      {
        type: "heading",
        text: "Hijos con discapacidad:"
      },
      {
        type: "paragraph",
        text: "Cuando el hijo tiene una discapacidad igual o superior al 33%, la cuantía de la prestación es mayor. Si la discapacidad es igual o superior al 65%, la cuantía se incrementa significativamente."
      },
      {
        type: "heading",
        text: "Familias numerosas:"
      },
      {
        type: "paragraph",
        text: "Las familias numerosas pueden acceder a cuantías adicionales o complementos específicos. Se recomienda consultar las ayudas específicas para familias numerosas."
      },
      {
        type: "heading",
        text: "Familias monoparentales:"
      },
      {
        type: "paragraph",
        text: "Las familias monoparentales (madres o padres solteros) pueden tener acceso a cuantías incrementadas o ayudas complementarias. Consulta las ayudas específicas para este tipo de familias."
      },
      {
        type: "heading",
        text: "Preguntas frecuentes"
      },
      {
        type: "heading",
        text: "¿Puedo solicitar la prestación si trabajo?"
      },
      {
        type: "paragraph",
        text: "Sí, la prestación por hijo a cargo es compatible con el trabajo. De hecho, para la modalidad contributiva es necesario estar trabajando o en situación asimilada al alta."
      },
      {
        type: "heading",
        text: "¿Qué pasa si mi hijo cumple 18 años?"
      },
      {
        type: "paragraph",
        text: "Si tu hijo cumple 18 años y no tiene discapacidad, la prestación finaliza. Sin embargo, si tiene una discapacidad igual o superior al 65%, puedes seguir percibiendo la prestación mientras se cumplan los demás requisitos."
      },
      {
        type: "heading",
        text: "¿Puedo solicitar la prestación si estoy cobrando el paro?"
      },
      {
        type: "paragraph",
        text: "Sí, la prestación por hijo a cargo es compatible con la prestación por desempleo. Ambas pueden percibirse simultáneamente."
      },
      {
        type: "heading",
        text: "¿Cuánto tarda en resolverse la solicitud?"
      },
      {
        type: "paragraph",
        text: "El plazo máximo de resolución es de 90 días. Si no recibes respuesta en ese plazo, puedes presentar una reclamación o consultar el estado de tu solicitud en la Sede Electrónica."
      },
      {
        type: "heading",
        text: "Conclusión"
      },
      {
        type: "paragraph",
        text: "La prestación por hijo a cargo es una ayuda importante para las familias que tienen menores o personas con discapacidad a su cargo. Conocer los requisitos, la documentación necesaria y el proceso de solicitud te ayudará a acceder a esta prestación de forma más eficiente."
      },
      {
        type: "paragraph",
        text: "Recuerda que es fundamental mantener actualizada la documentación y renovar la prestación anualmente para no perder el derecho a esta ayuda. Si tienes dudas, no dudes en consultar en las oficinas del INSS o en la Sede Electrónica de la Seguridad Social."
      }
    ]
  },
  "cita-previa-seguridad-social": {
    title: "Cómo Solicitar Cita Previa en el Instituto Nacional de la Seguridad Social (INSS)",
    description: "Guía completa para solicitar, gestionar y comprender el sistema de cita previa del INSS. Procedimiento detallado paso a paso.",
    icon: Calendar,
    gradient: "from-blue-500 to-indigo-600",
    category: "Trámites",
    date: "2025",
    readTime: "15 min",
    image: "/images/Blog/cita-previa.png",
    content: [
      {
        type: "intro",
        text: "Obtener una cita previa para realizar gestiones en el Instituto Nacional de la Seguridad Social (INSS) es un trámite administrativo esencial. Representa el acceso principal para gestionar derechos fundamentales como pensiones y prestaciones. Sin embargo, el proceso puede generar dudas o frustración debido a la alta demanda y la especificidad de los procedimientos."
      },
      {
        type: "paragraph",
        text: "El objetivo de esta guía es proporcionar un procedimiento detallado, claro y profesional para solicitar, gestionar y comprender el sistema de cita previa del INSS. Este manual está diseñado para eliminar la ambigüedad, asegurar que el ciudadano pueda completar el trámite de forma eficiente y evitar los errores más comunes."
      },
      {
        type: "heading",
        text: "Diferenciación Clave: INSS frente a TGSS"
      },
      {
        type: "paragraph",
        text: "Antes de iniciar cualquier solicitud, es crucial distinguir qué entidad gestiona el trámite que necesita. Un error en este paso preliminar es la principal fuente de confusión y resultará en una cita infructuosa."
      },
      {
        type: "highlight",
        text: "Regla General: INSS gestiona Prestaciones (el cobro de dinero). TGSS gestiona Cotizaciones y Afiliación (el pago de cuotas y la relación laboral)."
      },
      {
        type: "heading",
        text: "INSS (Instituto Nacional de la Seguridad Social)"
      },
      {
        type: "paragraph",
        text: "Esta es la entidad encargada de la gestión y administración de las prestaciones del sistema. Debe solicitar cita previa presencial en el INSS para trámites que requieran asesoramiento o presentación de documentación compleja."
      },
      {
        type: "heading",
        text: "Trámites Principales que Requieren Cita Previa en el INSS:"
      },
      {
        type: "list",
        items: [
          "Pensiones: Jubilación (ordinaria, anticipada), incapacidad permanente (revisión, solicitud), viudedad, orfandad y en favor de familiares.",
          "Ingreso Mínimo Vital (IMV): Solicitud inicial, modificación de datos o resolución de expedientes.",
          "Prestaciones por nacimiento y cuidado del menor: Anteriormente conocidas como maternidad y paternidad.",
          "Prestaciones familiares: Asignación por hijo a cargo (para quienes la mantengan) o por nacimiento.",
          "Tarjeta Sanitaria Europea (TSE): Si bien este trámite se recomienda encarecidamente realizarlo online por su inmediatez, puede solicitarse en un CAISS."
        ]
      },
      {
        type: "heading",
        text: "TGSS (Tesorería General de la Seguridad Social)"
      },
      {
        type: "paragraph",
        text: "Esta entidad gestiona los recursos económicos, la afiliación y la cotización. NO se requiere cita previa presencial para la mayoría de sus trámites, ya que su canal prioritario es el portal Import@ss y la Sede Electrónica."
      },
      {
        type: "heading",
        text: "Trámites Principales de la TGSS (Mayormente Online – NO requieren cita presencial):"
      },
      {
        type: "list",
        items: [
          "Informes de vida laboral: (Trámite 100% online y automático).",
          "Consultas o duplicados del Número de Afiliación (NAF): (Online).",
          "Altas, bajas o modificaciones en el Régimen de Autónomos (RETA): (Online).",
          "Gestión de pagos de cotizaciones, deudas o aplazamientos: (Online o telefónico).",
          "Asignación de Código de Cuenta de Cotización (CCC) para empleadores."
        ]
      },
      {
        type: "highlight",
        text: "Advertencia Crucial: Si usted solicita una cita en el INSS para un trámite que corresponde a la TGSS (como pedir un informe de vida laboral), el personal administrativo no podrá atenderle y le redirigirá a los canales telemáticos."
      },
      {
        type: "heading",
        text: "¿Es Realmente Necesaria una Cita Presencial? La Era Digital"
      },
      {
        type: "paragraph",
        text: "La Administración Pública, y la Seguridad Social en particular, fomenta activamente el uso de los canales telemáticos como la vía preferente y más eficiente para la gestión de trámites. Antes de proceder a solicitar una cita presencial, es altamente recomendable verificar si su gestión puede realizarse completamente online."
      },
      {
        type: "paragraph",
        text: "Muchos trámites pueden realizarse al instante a través del portal \"Tu Seguridad Social\" o la Sede Electrónica del organismo:"
      },
      {
        type: "list",
        items: [
          "La solicitud de la Tarjeta Sanitaria Europea (TSE).",
          "La descarga de certificados de pensionista o de prestaciones.",
          "La simulación de su futura pensión de jubilación.",
          "La consulta de sus datos de afiliación y cotización.",
          "La gestión de altas y bajas en la Seguridad Social para empleadores y autónomos (vía Import@ss)."
        ]
      },
      {
        type: "paragraph",
        text: "Para acceder a estos servicios online, necesitará disponer de métodos de identificación digital como Cl@ve Permanente, Cl@ve PIN o Certificado Digital (FNMT)."
      },
      {
        type: "heading",
        text: "Información Requerida Antes de Iniciar Cualquier Proceso de Cita"
      },
      {
        type: "paragraph",
        text: "Para agilizar al máximo el proceso de solicitud de cita previa, ya sea por vía telefónica u online, es absolutamente imprescindible tener preparada y a mano la siguiente información. La falta de cualquiera de estos datos detendrá irremediablemente el proceso."
      },
      {
        type: "heading",
        text: "Datos Indispensables:"
      },
      {
        type: "list",
        items: [
          "Documento Nacional de Identidad (DNI) o Número de Identidad de Extranjero (NIE): Deberá tenerlo físicamente o conocer el número exacto.",
          "Número de Afiliación a la Seguridad Social (NAF): Este es un dato crucial y a menudo causa de confusión. Es un número de 12 dígitos, personal e intransferible. Puede localizarlo en la cabecera de sus nóminas, en contratos de trabajo antiguos, en su informe de vida laboral o en cualquier comunicación oficial recibida de la Seguridad Social.",
          "Un número de teléfono móvil operativo: Es indispensable y obligatorio. Recibirá un SMS de confirmación con los datos de la cita.",
          "Una dirección de correo electrónico: Altamente recomendado. Es la mejor forma de recibir un resguardo por escrito de su número localizador y todos los detalles de la cita."
        ]
      },
      {
        type: "heading",
        text: "Método Online (El Canal Prioritario y Más Recomendado)"
      },
      {
        type: "paragraph",
        text: "La vía telemática es, sin lugar a dudas, el método prioritario, más fiable, rápido y que ofrece un registro visual y escrito de la gestión realizada. Se articula en dos opciones principales, dependiendo de si se dispone de identificación digital."
      },
      {
        type: "heading",
        text: "Opción A: Acceso sin Certificado Digital (Formulario Estándar para la Ciudadanía General)"
      },
      {
        type: "paragraph",
        text: "Esta opción está diseñada para aquellos ciudadanos que no disponen de Cl@ve o Certificado Digital. Requiere la cumplimentación manual de datos."
      },
      {
        type: "list",
        items: [
          "Acceso al Portal Oficial: Ingrese exclusivamente al portal oficial de la Sede Electrónica de la Seguridad Social. La URL directa y segura es: https://sede.seg-social.gob.es. Una vez dentro, deberá localizar la sección \"Cita previa para prestaciones y otras gestiones (INSS)\".",
          "Identificación Simplificada: Dentro de la sección de cita previa, seleccione la opción \"Obtener Cita\" bajo el epígrafe \"Sin certificado\".",
          "Cumplimentación de Datos Personales: Rellene el formulario con sus datos personales: Nombre, Apellidos, DNI/NIE, y Teléfono Móvil. Es crucial ser extremadamente preciso; un simple error de transcripción invalidará la cita.",
          "Selección del Trámite: Deberá seleccionar el motivo exacto de su cita de un menú desplegable. Sea lo más específico posible. Si su trámite es sobre \"Jubilación\", elíjalo explícitamente por encima de categorías más genéricas como \"Pensiones\".",
          "Selección Geográfica (CAISS): El sistema le solicitará su código postal para identificar los CAISS más cercanos. Si no hay citas disponibles, utilice la opción de búsqueda avanzada o \"por provincia\".",
          "Selección de Fecha y Hora: El sistema mostrará un calendario interactivo. Los días con disponibilidad suelen aparecer marcados. Seleccione la fecha y la franja horaria.",
          "Confirmación Final: Revise minuciosamente todos los datos antes de confirmar.",
          "Obtención del Número Localizador: Al finalizar, el sistema le proporcionará un número localizador de cita (código alfanumérico). Es fundamental conservar este código. Realice una captura de pantalla o anótelo junto con el SMS recibido."
        ]
      },
      {
        type: "heading",
        text: "Opción B: Acceso con Identificación Digital (Cl@ve o Certificado Digital)"
      },
      {
        type: "paragraph",
        text: "Si dispone de Certificado Digital, DNI electrónico o sistema Cl@ve (en sus modalidades PIN o Permanente), este método es el más eficiente, rápido y seguro."
      },
      {
        type: "list",
        items: [
          "En el mismo portal oficial (sede.seg-social.gob.es), seleccione la opción de identificación digital correspondiente.",
          "El sistema validará su identidad de forma automática y rellenará directamente sus datos personales en el formulario, eliminando cualquier posibilidad de error de transcripción.",
          "El proceso se reduce entonces a seleccionar el trámite deseado, elegir el centro (CAISS) y la hora disponible.",
          "Beneficio Adicional: Al identificarse digitalmente, el sistema es capaz de detectar que ciertos trámites pueden realizarse de forma 100% online a través del portal \"Tu Seguridad Social\" sin necesidad de una cita presencial."
        ]
      },
      {
        type: "heading",
        text: "Método Telefónico (Alternativa para Usuarios sin Acceso a Internet)"
      },
      {
        type: "paragraph",
        text: "Para aquellos usuarios que no disponen de acceso a internet o prefieren la atención telefónica, existen líneas específicas para la asignación de citas previas."
      },
      {
        type: "heading",
        text: "Números de Teléfono Oficiales (INSS para Cita Previa):"
      },
      {
        type: "list",
        items: [
          "91 541 25 30 (Tarificación provincial estándar. Altamente recomendado).",
          "901 10 65 70 (Tarificación especial, implica un coste adicional por minuto. Se desaconseja si existe alternativa)."
        ]
      },
      {
        type: "paragraph",
        text: "Se recomienda encarecidamente utilizar el número 91 541 25 30, ya que las llamadas a este número están incluidas en la mayoría de tarifas planas de telefonía fija y móvil actuales."
      },
      {
        type: "paragraph",
        text: "Horario de Atención: El servicio automático de cita previa está disponible las 24 horas del día, los 7 días de la semana. Sin embargo, la opción de atención con un gestor humano suele estar restringida a horarios de oficina (por ejemplo, de 9:00 a 14:30)."
      },
      {
        type: "heading",
        text: "Proceso Telefónico (Automatizado):"
      },
      {
        type: "list",
        items: [
          "Tenga a mano y listos su DNI y su Código Postal antes de iniciar la llamada.",
          "El sistema automático de voz le solicitará el trámite específico que desea realizar. Hable claro y pausadamente.",
          "Le pedirá su Código Postal para localizar el CAISS más cercano.",
          "Le requerirá su número de DNI o NIE.",
          "Una vez introducidos los datos, el sistema le ofrecerá la primera cita disponible. Podrá aceptarla o solicitar la siguiente.",
          "Al confirmar la cita, asegúrese de anotar cuidadosamente el número localizador que le facilite la locución."
        ]
      },
      {
        type: "heading",
        text: "Estrategias de Actuación Ante la Falta de Disponibilidad de Citas"
      },
      {
        type: "paragraph",
        text: "Es una situación frecuente que el sistema de cita previa muestre el mensaje: \"No hay citas disponibles\". Este mensaje no debe interpretarse como un error del sistema, sino como un reflejo de que la demanda de citas supera temporalmente la capacidad de atención de los centros."
      },
      {
        type: "heading",
        text: "Estrategias Recomendadas para Maximizar las Oportunidades:"
      },
      {
        type: "list",
        items: [
          "Acceso a Primera Hora (Liberación de Cupos): Los CAISS liberan sus nuevos cupos de citas en el sistema a primera hora de la mañana. Se recomienda encarecidamente acceder al portal justo a las 8:00 AM o en la franja entre las 9:00 y 9:30 AM.",
          "Insistencia y Monitoreo por Anulaciones: Las citas que otros ciudadanos anulan vuelven a estar disponibles en el sistema en tiempo real. Intentar acceder al sistema varias veces durante el día (especialmente a mediodía o primera hora de la tarde) puede dar resultado.",
          "Flexibilidad Geográfica: Si el CAISS más cercano a su domicilio no tiene citas, amplíe su búsqueda a todos los centros disponibles en su provincia. Un CAISS situado en un distrito colindante puede tener una disponibilidad mucho mayor."
        ]
      },
      {
        type: "heading",
        text: "Consulta y Anulación de Citas – Su Responsabilidad Cívica"
      },
      {
        type: "paragraph",
        text: "El sistema de cita previa es un recurso público limitado y de gran valor para la ciudadanía. Si sus circunstancias cambian y no puede acudir a la cita previamente concertada, es su responsabilidad cívica y administrativa anularla."
      },
      {
        type: "paragraph",
        text: "La anulación de una cita se realiza de forma sencilla y rápida a través del mismo portal de cita previa del INSS. Deberá acceder a la sección específica denominada \"Consultar / Anular cita\"."
      },
      {
        type: "paragraph",
        text: "Para proceder con la consulta o anulación, el sistema le solicitará dos datos clave que obtuvo al reservar la cita:"
      },
      {
        type: "list",
        items: [
          "Su DNI/NIE (Documento Nacional de Identidad o Número de Identidad de Extranjero).",
          "El número localizador que le fue proporcionado al finalizar el proceso de reserva de la cita (ya sea online o telefónicamente)."
        ]
      },
      {
        type: "highlight",
        text: "Consecuencias de la No Anulación: La no presentación reiterada a citas sin haber realizado una anulación previa puede ser registrada por el sistema y puede afectar a futuras gestiones."
      },
      {
        type: "heading",
        text: "Conclusión"
      },
      {
        type: "paragraph",
        text: "Solicitar una cita previa en el INSS no tiene por qué ser un proceso complejo o frustrante. Con la información adecuada, los documentos necesarios y siguiendo los pasos descritos en esta guía, podrá completar su trámite de forma eficiente."
      },
      {
        type: "paragraph",
        text: "Recuerde siempre verificar primero si su gestión puede realizarse online, distinga correctamente entre INSS y TGSS, y tenga a mano toda la documentación necesaria antes de iniciar el proceso."
      },
      {
        type: "paragraph",
        text: "El sistema de cita previa está diseñado para facilitar el acceso a los servicios públicos. Con paciencia, persistencia y la información correcta, obtendrá su cita y podrá realizar su trámite sin complicaciones."
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
  
  if (!post) {
    return {
      title: "Artículo no encontrado | Web Cursos SEPE",
      description: "El artículo solicitado no está disponible.",
    };
  }

  const baseUrl = "https://webcursosepe.es";
  const url = `${baseUrl}/blog/${id}`;
  const imageUrl = post.image ? `${baseUrl}${post.image}` : `${baseUrl}/og-image.jpg`;
  
  // Formatear fecha para Open Graph (formato ISO 8601)
  // Manejar diferentes formatos de fecha (YYYY, "DD MMM YYYY", etc.)
  let publishedDate: string;
  if (post.date) {
    try {
      // Si es solo un año (ej: "2024"), usar 1 de enero
      if (/^\d{4}$/.test(post.date.trim())) {
        publishedDate = new Date(`${post.date.trim()}-01-01`).toISOString();
      } else {
        // Intentar parsear la fecha directamente
        const parsed = new Date(post.date);
        publishedDate = isNaN(parsed.getTime()) ? new Date().toISOString() : parsed.toISOString();
      }
    } catch {
      publishedDate = new Date().toISOString();
    }
  } else {
    publishedDate = new Date().toISOString();
  }
  
  // Generar keywords basadas en el contenido
  const keywords = [
    post.category?.toLowerCase(),
    "sepe",
    "trámites sepe",
    post.title.toLowerCase().split(" ").slice(0, 5).join(" "),
    "ayudas españa",
    "prestaciones",
    "guía completa",
    "2024"
  ].filter(Boolean);

  return {
    title: `${post.title} | Web Cursos SEPE`,
    description: post.description,
    keywords: keywords,
    authors: [{ name: post.author || "Equipo SEPE" }],
    creator: post.author || "Equipo SEPE",
    publisher: "Web Cursos SEPE",
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      locale: "es_ES",
      url: url,
      title: post.title,
      description: post.description,
      siteName: "Web Cursos SEPE",
      publishedTime: publishedDate,
      modifiedTime: publishedDate,
      authors: [post.author || "Equipo SEPE"],
      section: post.category,
      tags: [post.category, "SEPE", "Trámites", "Ayudas"],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [imageUrl],
      creator: "@WebCursosSEPE", // Actualiza con tu cuenta de Twitter si la tienes
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    other: {
      "article:author": post.author || "Equipo SEPE",
      "article:published_time": publishedDate,
      "article:modified_time": publishedDate,
      "article:section": post.category,
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = blogPosts[id];
  
  // Determinar el tipo de blog
  const blogType: 'blog' | 'tutorial' = 'blog';

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

  // Schema.org JSON-LD para Article
  const baseUrl = "https://webcursosepe.es";
  const url = `${baseUrl}/blog/${id}`;
  const imageUrl = post.image ? `${baseUrl}${post.image}` : `${baseUrl}/og-image.jpg`;
  const publishedDate = post.date ? new Date(post.date).toISOString() : new Date().toISOString();
  
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: imageUrl,
    datePublished: publishedDate,
    dateModified: publishedDate,
    author: {
      "@type": "Organization",
      name: post.author || "Equipo SEPE",
      url: baseUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Web Cursos SEPE",
      url: baseUrl,
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    articleSection: post.category,
    keywords: post.category,
    inLanguage: "es-ES",
  };

  // Schema.org JSON-LD para BreadcrumbList
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${baseUrl}/#blogs`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: url,
      },
    ],
  };

  // Extraer FAQs del contenido para Schema.org FAQPage
  const extractFAQs = () => {
    if (!post.content) return [];
    
    const faqs: Array<{ question: string; answer: string }> = [];
    let currentQuestion = "";
    let currentAnswer: string[] = [];
    let inFAQSection = false;
    
    for (let i = 0; i < post.content.length; i++) {
      const item = post.content[i];
      
      // Detectar inicio de sección FAQ
      if (item.type === "heading" && 
          (item.text.toLowerCase().includes("preguntas frecuentes") || 
           item.text.toLowerCase().includes("faq"))) {
        inFAQSection = true;
        continue;
      }
      
      if (inFAQSection) {
        // Detectar pregunta (headings que empiezan con Q o son preguntas)
        if (item.type === "heading" && (item.text.startsWith("Q") || item.text.includes("?"))) {
          // Guardar FAQ anterior si existe
          if (currentQuestion && currentAnswer.length > 0) {
            faqs.push({
              question: currentQuestion,
              answer: currentAnswer.join(" "),
            });
          }
          currentQuestion = item.text.replace(/^Q\d+:\s*/, "");
          currentAnswer = [];
        } else if (currentQuestion && item.type === "paragraph") {
          currentAnswer.push(item.text);
        } else if (currentQuestion && item.type === "list" && item.items) {
          currentAnswer.push(item.items.join(" "));
        }
      }
    }
    
    // Añadir último FAQ
    if (currentQuestion && currentAnswer.length > 0) {
      faqs.push({
        question: currentQuestion,
        answer: currentAnswer.join(" "),
      });
    }
    
    return faqs;
  };

  const faqs = extractFAQs();
  
  const faqSchema = faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  } : null;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ScrollProgressBar />
      <BlogViewTracker blogId={id} blogType={blogType} />
      
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      
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
              <h1 className="text-3xl sm:text-4xl font-bold mb-6" itemProp="headline">
                {post.title}
              </h1>
              <div className="flex items-center gap-6 text-blue-100">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  <span itemProp="timeRequired">{post.readTime}</span>
                </div>
                <span>•</span>
                <time dateTime={publishedDate} itemProp="datePublished">
                  {post.date}
                </time>
              </div>
            </div>
          </div>
        </section>

        {/* Breadcrumb - Estructura semántica mejorada */}
        <div className="bg-gray-50 py-4 border-b">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="text-sm max-w-4xl mx-auto">
              <ol className="flex items-center space-x-2" itemScope itemType="https://schema.org/BreadcrumbList">
                <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                  <Link href="/" className="text-blue-600 hover:text-blue-800" itemProp="item">
                    <span itemProp="name">Inicio</span>
                  </Link>
                  <meta itemProp="position" content="1" />
                </li>
                <li><span className="text-gray-400" aria-hidden="true">/</span></li>
                <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                  <Link href="/#blogs" className="text-blue-600 hover:text-blue-800" itemProp="item">
                    <span itemProp="name">Blog</span>
                  </Link>
                  <meta itemProp="position" content="2" />
                </li>
                <li><span className="text-gray-400" aria-hidden="true">/</span></li>
                <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem" className="text-gray-700">
                  <span itemProp="name">{post.title}</span>
                  <meta itemProp="position" content="3" />
                </li>
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
                <article className="prose prose-lg max-w-none" itemScope itemType="https://schema.org/Article">
                  {/* Intro imagen */}
                  {post.image ? (
                    <div className="mb-12 rounded-2xl overflow-hidden shadow-lg">
                      <Image
                        src={post.image}
                        alt={`${post.title} - Imagen principal del artículo`}
                        width={894}
                        height={826}
                        className="w-full h-auto"
                        priority
                        itemProp="image"
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
                  <div className="space-y-6" itemProp="articleBody">
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
                          <p className="text-xl text-gray-800 leading-relaxed font-medium mb-6" itemProp="description">
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

