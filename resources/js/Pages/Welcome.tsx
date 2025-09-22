import { PageProps } from '@/types';
import { Head, Link } from '@inertiajs/react';
import Guest from '@/Layouts/GuestLayout';
import image from "@/Assets/businesswoman-networking-using-digital-devices.jpg"
import "@/Style/Welcome.css";
import icon1 from "@/Assets/cloud-service.png"
import icon2 from "@/Assets/analysis.png"
import icon3 from "@/Assets/bar-chart.png"
import image2 from "@/Assets/10.png"
import Footer from '@/Layouts/Footer';


export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    const services = [
        {
          title: "SECURITE-CYBERSECURITE(Bac+5)",
          description: " Le master en securité - cybersecurité et intelligence artificielle (SCI) en formation initiale ( Bac+5) Niveau de recrutement : titulaire d’une licence (BAC+3) ou niveau master 1 Deux profils peuvent postuler à cette formation : Profil Informatique : informatique, electronique , réseou Télécoms toute discipline connexe. Durée de la formation : 2 ans ....",
          image: icon1, // à remplacer par une icône SVG si besoin
        },
        {
          title: "DATA SCIENCE EN FORMATION INITIALE (Bac+5)",
          description: "Data science en formation initiale ( Bac+5) Niveau de recrutement : titulaire d’une licence (BAC+3) ou niveau master 1 Deux profils peuvent postuler à cette formation : Profil Statistique : Statistique, Mathématiques, Econométrie, actuariat ou discipline connexe ; Profil Informatique : informatique, Télécoms, Sciences industrielles ou toute discipline connexe. Durée de la formation : 2 ans ....",
          image: icon2, // idem
        },
        {
          title: "BIG DATA EN FORMATION CONTINUE(Bac+5)",
          description: "Le master en Big Data en formation continue ( BAC+5) Cette formation est destinée aux travailleurs du secteur public et privé désireux de renforcer leur capacité pour acquérir des compétences dans le domaine du big Data. Le recrutement se fera selon les conditions suivantes : Minimum BAC.+3 (Licence minimum ) et quelques années en entreprise. Durée de la formation : 120 credits ...",
          image: icon3, // idem
        },
      ];

    return (
        <Guest>
        {/* <Head title="Welcome" /> */}
           <div className='welcomecontainer'>
                <div className='element1'>
                    <img src={image} alt="" />
                </div>

                <section className="services-section">
                    <h5 className="services-subtitle">NOS FORMATIONS</h5>
                    <h2 className="services-title">Donnez un nouvel élan à votre avenir avec nos formations sur mesure</h2>
                    <div className="services-grid">
                        {services.map((service, index) => (
                        <div className="service-card" key={index}>
                            <div className="service-icon">
                                <img src={service.image} alt={service.title} className="icon-img" />
                            </div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                            <a className="read-more" onClick={ () => window.open('/formation','_self')}>
                            <span className="circle">&#10148;</span> Read More
                            </a>
                        </div>
                        ))}
                    </div>
                </section>

                <section className='element2'>
                    
                    <div className='firstimage'>
                        <img src={image2} alt="" />
                    </div>
                    <div className="about-container">
                        <p className="about-subtitle">EXPERTISES</p>
                        <h2 className="about-title">
                        {/* Présentation du master <br /> */}
                            <strong>Le Master DATA SCIENCE </strong>
                        </h2>
                        <p className="about-description">
                        a pour objectif de former des experts 
                        dans le domaine de la Statistique, de 
                        l’Intelli¬gence Artificielle et du Big Data.
                         Il leur permettra de s’approprier une ingénie¬rie
                          basée sur les nouvelles évolutions en matière de 
                          stockage et de traite¬ment des données massives.
                        </p>

                        <div className="about-options">
                            <div className="option-item">
                                <span className="check-icon">✔</span>
                                <div>
                                    <strong>Objectifs De La Formation</strong>
                                    <li> Accélérer la montée en compétences en Data management en Côte d’Ivoire et en Afrique de l’Ouest. </li>
                                    <li> Un cursus d’excellence de niveau international dans les sciences de la DATA en local (Afrique)</li>
                                </div>
                            </div>
                            <div className="option-item">
                                <span className="check-icon">✔</span>
                                <div>
                                    <strong>Compétences</strong>
                                    <li>Data Analyst</li>
                                    <li>Data Scientist</li>
                                    <li>Ingénieur Big Data</li>
                                    <li>Administrateur de données</li>
                                </div>
                            </div>
                        </div>

                        {/* <button className="know-more-btn">KNOW MORE</button> */}
                    </div>
                </section>
           </div>
           <Footer></Footer>
        </Guest>
    );
}
