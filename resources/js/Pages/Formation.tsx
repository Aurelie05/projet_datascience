import React from 'react';
import Guest from '@/Layouts/GuestLayout';
import image from "@/Assets/13.png"
import "@/Style/Formation.css"
import directeur_img from '@/Assets/Dir-idsi.jpg'
import { useState } from 'react';
import photo from '@/Assets/1.png'
import Footer from '@/Layouts/Footer';

type TabKey = 'research' | 'strategy' | 'report';

const Formation = () => {
    const [activeTab, setActiveTab] = useState<TabKey>('research');

    const tabs: Record<TabKey, {
        title: string;
        title2: string;
        description: string;
        image: string;
        description2?: string;
        description3?: string;
        description4?: string;
        description5?: string;
        description6?: string;
        description7?: string;
        description8?: string;
        description9?: string;
        description10?: string;
        description11?: string;
      }> ={
        research: {
          title: 'Le master en Big data en formation initiale ( Bac+5)',
          title2:'Le master en Big Data en formation continue ( BAC+5)',
          description: `Niveau de recrutement : titulaire d’une licence (BAC+3) ou niveau master
                        1 Deux profils peuvent postuler à cette formation :
                        Profil Statistique : Statistique, Mathématiques, Econométrie, actuariat ou discipline connexe.
                        Profil Informatique : informatique, Télécoms, Sciences industrielles ou toute discipline connexe.`,
            description2: 'Cette formation est destinée aux travailleurs du secteur public et privé désireux de renforcer leur capacité pour acquérir des compétences dans le domaine du big Data.Le recrutement se fera selon les conditions suivantes : Minimum BAC.+4 plus 3 ans d’expérience en entreprise.',
            description3: 'NB: Lors du master, en formation continue, l’étudiant suit un certain nombre d’enseignements, qui, lorsqu’ils sont validés, permettent l’obtention de crédits (ECTS ; facilitant les équivalences à un niveau européen). Au total, il devra valider 120 ECTS au cours de son master. ',
          image: photo, // remplace par le vrai chemin
        },
        strategy: {
          title: 'Le Master Data Science vise à former des spécialistes capables d’occuper les postes suivants :',
          title2: 'Ces spécialistes peuvent travailler dans tous les secteurs d’activités :',
          description: `Administrateur de données , Ingénieur Big Data ,Chargé d'études ,Data Mining ,Data Analyst et Data Scientist`,
          description2: `Sociétés d’études spécialisées dans la mise en place de solutions décisionnelles ,Banques ,Assurances ,Sociétés des Télécoms ,La grande distribution ,La santé et Les Instituts de Statistiques etc.`,
          image: photo,
          
        },
        report: {
          title: 'Missions de l’IDSI',
          title2: 'Vision de l’IDSI',
            description: 'Proposer des programmes d’excellence pour former des experts en science des données, intelligence artificielle et Big Data.',
            description4: 'Développer des compétences répondant aux besoins des entreprises locales, régionales et internationales.',
            description5: 'Encourager la recherche appliquée pour résoudre des défis locaux dans des secteurs comme la santé, l’agriculture, la finance et la cybersécurité.',
            description6: 'Réduire le fossé technologique entre les pays développés et les pays africains.',
            description7: 'Établir des partenariats public-privé pour promouvoir l’utilisation de la data science dans divers secteurs.',
            description8: 'Encourager l’inclusion des femmes et des jeunes dans les domaines scientifiques et technologiques.',
            description9: 'Être une référence en formation et recherche en science des données et intelligence artificielle en Afrique.',
            description10: 'Contribuer à la modernisation des économies africaines grâce à l’exploitation des données et des technologies intelligentes.',
            description11: 'Promouvoir des solutions innovantes pour résoudre des problématiques socio-économiques africaines, comme l’agriculture intelligente, la santé numérique et les systèmes financiers inclusifs.',
          image: image,
        },
      };
    
      const current = tabs[activeTab];
    
  return (

    <Guest>
        <div className='container'>
            <div className='formation_image'>
                <div className="hero-content">
                    <p className="intro-text">Pré-inscription en ligne</p>
                    <h1 className="hero-title">International Data Science Institute</h1>
                    <h2 className="hero-subtitle">Master en :<br />DATA SCIENCE – BIG DATA ET INTELLIGENCE ARTIFICIELLE</h2>
                    <p className="hero-description">
                        Formez-vous aux technologies de demain avec un programme innovant et professionnalisant.
                    </p>
                    <a href="https://mdsia.datascience.inphb.ci/" className="hero-button">
                        Cliquez ici pour vous pré-inscrire
                        <span className="plus">+</span>
                    </a>
                    <h2 className="hero-subtitle">Master en :<br />SECURITE -CYBERSECURITE ET INTELLIGENCE ARTIFICIELLE</h2>
                    {/* </p> */}
                    <a href="https://mscia.datascience.inphb.ci/" className="hero-button2">
                        Cliquez ici pour vous pré-inscrire
                        <span className="plus">+</span>
                    </a>
                </div>
                <div className='dataimage'>
                    <img src={image} alt="" />
                </div>
                
            </div>
            <section className="directeur-section">
                <div className="directeur-container">
                    <div className="directeur-image">
                        <img src={directeur_img} alt="Directeur" />
                    </div>
                    <div className="directeur-texte">
                        <p className="section-label">Mot du Directeur</p>
                        <h2 className="section-title">Notre Vision pour l’Avenir</h2>
                        <div className="quote-icon">“</div>
                            <p className="directeur-message">
                                L’International Data Science Institute (IDSI) propose des programmes d’excellence pour former des experts en science des données, Big Data, Intelligence Artificielle et Cybersécurité.

                                Depuis sa création en 2017, grâce à la coopération entre l’INP-HB, l’ENSEA et l’École Polytechnique de Paris (X), l’IDSI a formé plus d’une centaine d’étudiants venus de toute l’Afrique, aujourd’hui en poste dans divers secteurs : télécoms, finance, transport...

                                Convaincus que la formation en Data Science est un levier stratégique, nous contribuons activement à l’évolution technologique et à l’essor économique de la Côte d’Ivoire, de la sous-région et du continent.

                                Notre ambition : faire de l’IDSI le hub africain de la formation, de la recherche et de l’innovation en Intelligence Artificielle.
                            </p>
                            <p className="directeur-nom"><strong>Dr TANOH Tanoh Lambert</strong><br /><span>Enseignant -Chercheur</span></p>
                        </div>
                    </div>
            </section>

            <div className="tabs-section">
                <div className="tabs-menu">
                    <button className={activeTab === 'research' ? 'active' : ''} onClick={() => setActiveTab('research')}>
                        Formation
                    </button>
                    <button className={activeTab === 'strategy' ? 'active' : ''} onClick={() => setActiveTab('strategy')}>
                        Débouchés
                    </button>
                    <button className={activeTab === 'report' ? 'active' : ''} onClick={() => setActiveTab('report')}>
                        Missions et Visions de l’IDSI
                    </button>
                </div>

                <div className="tabs-content">
                    <div className="text5">
                        <h2>{current.title}</h2>
                        <p>{current.description}</p>
                        <p>{current.description4}</p>
                        <p>{current.description5}</p>
                        <p>{current.description6}</p>
                        <p>{current.description7}</p>
                        <p>{current.description8}</p>
                        
                        <h2>{current.title2}</h2>
                        <p>{current.description9}</p>
                        <p>{current.description10}</p>
                        <p>{current.description11}</p>
                        <p>{current.description2}</p>
                        <p className='descrip'>{current.description3}</p>
                        
                    </div>
                    {/* <div className="image">
                        <img src={current.image} alt="Illustration" />
                    </div> */}
                </div>
            </div>
            
        </div>
        <Footer></Footer>
    </Guest>
    
  );
};

export default Formation;
