import React, { useState,useEffect } from 'react';
import Guest from '@/Layouts/GuestLayout';
import image from '@/Assets/website-hosting-concept-with-circuits.jpg'
import '@/Style/Condition.css';
import { motion } from "framer-motion";
import milieu from '@/Assets/home-7-scan-image.png'
import fuseau from "@/Assets/9.png"
import AOS from "aos";
import 'aos/dist/aos.css';
import Footer from '@/Layouts/Footer';


  const cards = [
    { title: "Niveau de recrutement", text: "Titulaire d’un diplôme BAC+3 Inscrit à une formation de Niveau Bac + 4" },
    { title: "Epreuves du concours", text: "Mathématiques (Algèbre Linéaire, Probabilités) (4h, coef. 4)Informatique (Bases de Données, Algorithmique) (3h, coef. 3)Statistique (Statistique Descriptive, Analyse des Données) (3h, coef. 3)" },
    { title: "Profil Accepté", text: "Profil Statistique: Statistique, Data Mining ou toute discipline connexe.Profil Informatique: Informatique, Télécommunication ou toute discipline connexe." },
    { title: "Conditions après admission", text: "Chaque étudiant admis doit disposer d’un micro-ordinateur ayant les caractéristiquessuivantes :• Nombre de processeurs : 4 (au minimum)• RAM : 16 Gigas (au moins)• Nature du Système d’exploitation : 64 bits• Système d’exploitation : Windows, Linux (obligatoire) ou MAC" },
  ];
  

const Condition = () => {

    const [activeIndex, setActiveIndex] = useState<number | null>(1); // 1st opened by default

    const toggle = (index: number) => {
      setActiveIndex(index === activeIndex ? null : index);
    };
    
    useEffect(() => {
        AOS.init({
            duration: 1000, // Durée de l'animation
            once: false, // Permet de rejouer l'animation à chaque passage
        });
        
    }, []); 

    return (

        <Guest>

            <div className='container'>
                <div className='elemt1'>
                    <img src={image} />
                </div>
                

                <div className="w-full flex flex-col items-center py-16 px-4">
                    {/* TITRE GLOBAL AU-DESSUS */}
                    <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-8 text-center">
                        Conditions d'entrées à l'IDSI
                    </h2>

                    {/* CONTENU TEXTE + IMAGE, CENTRÉ DANS 70% */}
                    <div className="w-[70%] flex flex-col md:flex-row items-start gap-10">

                        {/* IMAGE À GAUCHE */}
                        <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0 " data-aos="fade-right" data-aos-once="false" >
                                <img
                                    src={fuseau}
                                    alt="Illustration"
                                    className="image" 
                                    
                                />
                        </div>
                        
                        {/* TEXTE / CARTES À DROITE */}
                        <div className="w-full md:w-1/2 space-y-6" data-aos="fade-left" data-aos-once="false">
                            <div className="flex flex-col space-y-4">
                                {cards.map((card, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-100 rounded-lg shadow-md p-4 min-h-[100px] flex flex-col justify-start"
                                >
                                    <h3 className="font-semibold text-indigo-800 text-base mb-2">
                                    {card.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm sm:text-base text-justify">
                                    {card.text}
                                    </p>
                                </div>
                                ))}
                            </div>
                        </div>

                        
                    </div>
                </div>


                

            </div>
            <Footer></Footer>
        </Guest>


    );
};

export default Condition;