import { PricingCard } from "@/components/PricingCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import type { Metadata } from 'next';
import { aiPoweredSeoOptimization } from '@/ai/flows/seo-optimizer';

const pageContent = `
Pachete de creare site web la Digital-Online.ro. Fără costuri lunare.
Pachet Standard (149€): Site pentru afacerea ta, modern și eficient. Până la 5 secțiuni, Design responsive, Tehnologie Next.js, Livrare în format ZIP, Conectare domeniu gratuită, Optimizat SEO tehnic.
Pachet Custom (249€): Site creat 100% după viziunea ta. Totul de la Standard, plus: Design personalizat, Până la 8 pagini/secțiuni, Elemente animate & galerii, SEO tehnic avansat, Performanță 90-100 garantată.
Pachet Bonus "SITE + AI READY" (349€): Soluția completă pentru o afacere modernă. Totul de la Custom, plus: Integrare Chat AI (GPT/Gemini), Integrare Chat WhatsApp, Toți pixelii (Meta, Google, TikTok) instalați, Formular de contact avansat.
Add-on-uri: Integrare Chat AI cu GPT sau Gemini – 49€, Integrare WhatsApp Business – 29€, Instalare pixel Google / Meta / TikTok – 39€ per platformă, SEO profesional pentru site-uri existente – 89€.
IMPORTANT: Titlul SEO trebuie să înceapă cu 'Prețuri Pachete Site Web'.
`;

export async function generateMetadata(): Promise<Metadata> {
  try {
    const seoData = await aiPoweredSeoOptimization({ pageContent, pageTitle: 'Prețuri Pachete Site Web | Creare Site Fără Abonament - Digital-Online.ro' });
    return {
      title: seoData.title,
      description: seoData.description,
    };
  } catch (e) {
    console.error('Error generating metadata for Pachete Site page:', e);
    return {
      title: 'Prețuri Pachete Site Web | Creare Site Fără Abonament - Digital-Online.ro',
      description: 'Află cât costă un site web modern, rapid și optimizat SEO. Vezi pachetele noastre de creare site fără abonament și alege soluția potrivită pentru afacerea ta!',
    };
  }
}

const websitePackages = [
  {
    title: "PACHET STANDARD",
    price: "149 €",
    priceSuffix: "plată unică",
    description: "Site pentru afacerea ta, modern și eficient.",
    features: [
      "Până la 5 secțiuni",
      "Design responsive",
      "Tehnologie Next.js",
      "Livrare în format ZIP",
      "Conectare domeniu gratuită",
      "Optimizat SEO tehnic",
    ],
    ctaText: "Comandă Acum",
    ctaLink: "/contact?pachet=standard",
  },
  {
    title: "PACHET CUSTOM",
    price: "249 €",
    priceSuffix: "plată unică",
    description: "Site creat 100% după viziunea ta.",
    features: [
      "Totul de la Standard",
      "Design 100% personalizat",
      "Până la 8 pagini/secțiuni",
      "Elemente animate & galerii foto",
      "SEO tehnic avansat",
      "Performanță 90-100 garantată",
    ],
    ctaText: "Alege Pachetul Custom",
    ctaLink: "/contact?pachet=custom",
    recommended: true,
  },
  {
    title: 'PACHET "SITE + AI READY"',
    price: "349 €",
    priceSuffix: "plată unică",
    description: "Soluția completă pentru o afacere modernă.",
    features: [
      "Totul de la Custom",
      "Integrare Chat AI (GPT/Gemini)",
      "Integrare Chat WhatsApp",
      "Toți pixelii (Meta, Google, TikTok) instalați",
      "Formular de contact avansat",
    ],
    ctaText: "Vreau Pachetul Complet",
    ctaLink: "/contact?pachet=ai-ready",
  },
];

const addons = [
    { name: "Integrare Chat AI cu GPT sau Gemini", price: "49€" },
    { name: "Integrare WhatsApp Business", price: "29€" },
    { name: "SEO profesional pentru site-uri existente", price: "89€" },
    { name: "Configurare Securitate Site", price: "29€" }
]

export default function PacheteSitePage() {
  return (
    <div className="py-20 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-white">
            Creează-ți Prezența Online. <span className="text-primary">100% Fără Costuri Lunare.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
            Alege pachetul potrivit pentru afacerea ta. Toate pachetele includ livrarea completă a site-ului și proprietate 100%.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {websitePackages.map((pkg) => (
            <PricingCard key={pkg.title} {...pkg} />
          ))}
        </div>
        <div className="text-center my-8">
          <a href="/portofoliu" className="inline-block text-lg font-bold text-primary hover:underline">Vezi exemple de site-uri realizate de noi în portofoliu.</a>
        </div>
        
        <div className="mt-20">
            <Card className="bg-secondary/50 border-border/50">
                <CardHeader className="text-center">
                    <CardTitle className="text-3xl font-headline text-white">Servicii Suplimentare & Integrări</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 max-w-3xl mx-auto">
                        {addons.map(addon => (
                            <li key={addon.name} className="flex justify-between border-b border-dashed border-border pb-2">
                                <span className="flex items-center"><Check className="w-4 h-4 mr-2 text-primary"/>{addon.name}</span>
                                <span className="font-bold">{addon.price}</span>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </div>
        {/* Extra servicii pret negociabil */}
        <div className="mt-8">
            <Card className="bg-secondary/50 border-border/50">
                <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-headline text-white">Extra servicii sau pentru site-uri existente</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-center text-lg text-white mb-2">
                        Oferim servicii suplimentare precum <span className="font-bold text-primary">editare</span>, <span className="font-bold text-primary">reconfigurare</span> sau <span className="font-bold text-primary">optimizare</span> pentru site-uri deja existente.
                    </p>
                    <p className="text-center text-base text-muted-foreground mb-2">
                        Fiecare proiect este unic, iar prețul se stabilește în funcție de complexitate și cerințe.
                    </p>
                    <p className="text-center text-lg font-bold text-primary">
                        Contactează-ne pentru o ofertă personalizată și consultanță gratuită!
                    </p>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
