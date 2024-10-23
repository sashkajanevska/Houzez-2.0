import Header from "../components/header/Header";
import TitleSection from "../components/contact/TitleSection";
import ContactInfoSection from "../components/contact/ContactInfoSection";
import MapSection from "../components/contact/MapSection";
import "../styles/ContactPage.css";

export default function ContactPage() {
  return (
    <>
      <Header newClass={""} />
      <div className="contact-page">
        <TitleSection />
        <ContactInfoSection />
        <MapSection />
      </div>
    </>
  );
}
