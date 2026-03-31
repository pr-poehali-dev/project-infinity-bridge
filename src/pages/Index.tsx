import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Promo from "@/components/Promo";
import ConsultationForm from "@/components/ConsultationForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Featured />
      <Promo />
      <ConsultationForm />
      <section className="w-full h-[400px] sm:h-[500px]">
        <iframe
          src="https://yandex.ru/map-widget/v1/?ll=46.034740%2C51.533560&z=17&pt=46.034740%2C51.533560~Саратов,+ул.+Большая+Казачья,+д.59/65,+оф.3&text=Саратов+Большая+Казачья+59/65"
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
          title="Карта офиса Морозов и Партнеры"
          style={{ border: 0 }}
        />
      </section>
      <Footer />
    </main>
  );
};

export default Index;