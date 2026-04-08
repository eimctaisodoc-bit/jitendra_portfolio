import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageSquare, MoveLeft, MoveRight, Quote, Link } from "lucide-react";

export const Testomonials = () => {
    const content = [
        {
            name: "A.D Studio",
            review: "यो टिमले मेरो पेज प्रोफेशनल तरिकाले ह्यान्डल गरिदियो। Boosting strategy धेरै प्रभावकारी रह्यो। Followers, likes र engagement बढेको छ। Communication clear र राम्रो छ। विश्वासनीय कम्पनी 👍",
            link: "https://www.facebook.com/profile.php?id=61575612820194&sk=reviews"
        },
        {
            name: "Shree Krishna Furniture",
            review: "धेरै भरपर्दो र इमानदार टिम। Page handling राम्रो छ र नियमित update हुन्छ। Result देखिने खालको काम गर्छ।",
            link: "https://www.facebook.com/profile.php?id=61575612820194&sk=reviews"
        },
        {
            name: "Sauharda Travels and Tours",
            review: "धेरै राम्रो सेवा। Page boost genuine र प्रभावकारी लाग्यो। टिम सहयोगी र इमानदार छ। भविष्यमा पनि काम गर्नेछु 😊",
            link: "https://www.facebook.com/profile.php?id=61575612820194&sk=reviews"
        },
        {
            name: "Jangay Sarkar",
            review: "Page verification छिटो र professional तरिकाले गरिदिनुभयो। Thank you so much 🙏",
            link: "https://www.facebook.com/profile.php?id=61575612820194&sk=reviews"
        },
        {
            name: "Top Durbar Rodhi Club",
            review: "Page boosting र handling राम्रो छ। Reach र engagement राम्रोसँग बढ्यो। Support team छिटो response दिने र सहयोगी छ।",
            link: "https://www.facebook.com/profile.php?id=61575612820194&sk=reviews"
        },
        {
            name: "Asian Hospitality Academy Pvt. Ltd.",
            review: "Social media boosting र management सेवा राम्रो छ। Team मेहनती, professional र creative छ। Reach र engagement धेरै बढेको छ।",
            link: "https://www.facebook.com/profile.php?id=61575612820194&sk=reviews"
        },
        {
            name: "NEB Preparation + CEE Preparation",
            review: "We are growing good because of MediaLift Solution. Thank you to the team.",
            link: "https://www.facebook.com/profile.php?id=61575612820194&sk=reviews"
        },
        {
            name: "Zekey Shahs",
            review: "Thank you MediaLift Solution for helping in our progress and digital media.",
            link: "https://www.facebook.com/profile.php?id=61575612820194&sk=reviews"
        },
        {
            name: "NEB Updates and Preparation",
            review: "Our company got best growth ever.",
            link: "https://www.facebook.com/profile.php?id=61575612820194&sk=reviews"
        },
        {
            name: "Lions Club & Dance Bar",
            review: "Amazing service and best response from their team.",
            link: "https://www.facebook.com/profile.php?id=61575612820194&sk=reviews"
        },
        {
            name: "New Icon Bar",
            review: "Team professional छ र काम राम्रो तरिकाले गर्छ। Thank you.",
            link: "https://www.facebook.com/profile.php?id=61575612820194&sk=reviews"
        },
        {
            name: "Hatail Updates",
            review: "Thank you team of MediaLift Solution for helping in digital media.",
            link: "https://www.facebook.com/profile.php?id=61575612820194&sk=reviews"
        },
        {
            name: "Blossom Beauty Parlour & Spa",
            review: "Design, content र ads top-class छन्। Client satisfaction priority दिने company हो। 100% satisfied 👍",
            link: "https://www.facebook.com/profile.php?id=61575612820194&sk=reviews"
        },
        {
            name: "Mountain Herbal Spa Pokhara",
            review: "Affordable price मा quality service। Facebook & Instagram reach बढ्यो। Business growth का लागि best choice।",
            link: "https://www.facebook.com/profile.php?id=61575612820194&sk=reviews"
        },
        {
            name: "Gulf Demand",
            review: "Brand promotion र lead generation strategy strong छ। Friendly team र clear communication।",
            link: "https://www.facebook.com/profile.php?id=61575612820194&sk=reviews"
        },
        {
            name: "Samridhi Photostudio",
            review: "100% trusted company and best technical team support.",
            link: "https://www.facebook.com/profile.php?id=61575612820194&sk=reviews"
        },
        {
            name: "Hotel Good One Restaurant & Bar",
            review: "From social media management to advertising, everything was handled perfectly. Business needs understood and effective solutions delivered.",
            link: "https://www.facebook.com/profile.php?id=61575612820194&sk=reviews"
        },
        {
            name: "Jameela Home Spa",
            review: "Professional, responsive team focused on real results. Brand visibility has improved a lot.",
            link: "https://www.facebook.com/profile.php?id=61575612820194&sk=reviews"
        },
        {
            name: "Dhuwani Hamro Newa Bulero Gaadi Sewa Samparka",
            review: "Social media handling देखि advertising सम्म सबै काम प्रभावकारी थियो। Result clearly देखियो।",
            link: "https://www.facebook.com/profile.php?id=61575612820194&sk=reviews"
        },
        {
            name: "Banepa Marble Place",
            review: "Business online growth राम्रो भयो। Professional team, creative ideas र timely support। Highly recommended.",
            link: "https://www.facebook.com/profile.php?id=61575612820194&sk=reviews"
        },
        {
            name: "Woodland House Restro & Spa",
            review: "100% trusted and good work. Thank you so much ❤️🙏",
            link: "https://www.facebook.com/profile.php?id=61575612820194&sk=reviews"
        },
        {
            name: "Jugal Panchebaja Rodhighar",
            review: "Support team राम्रो छ र management पनि राम्रो लाग्यो।",
            link: "https://www.facebook.com/profile.php?id=61575612820194&sk=reviews"
        },
        {
            name: "Creative Institute, Lagankhel",
            review: "Facebook page and social media handling service धेरै राम्रो लाग्यो।",
            link: "https://www.facebook.com/profile.php?id=61575612820194&sk=reviews"
        },
        {
            name: "Royal Ice and Fire Club",
            review: "Page promotion र handling राम्रो छ। Support team राम्रो छ।",
            link: "https://www.facebook.com/profile.php?id=61575612820194&sk=reviews"
        },
        {
            name: "Malangwa Party Palace & Restaurant",
            review: "Facebook boosting राम्रो भयो। धेरै धन्यवाद।",
            link: "https://www.facebook.com/profile.php?id=61575612820194&sk=reviews"
        },
        {
            name: "Ritesh Chhetri",
            review: "Good services, thank you so much sir 🙏😊👍",
            link: "https://www.facebook.com/profile.php?id=61575612820194&sk=reviews"
        },
        {
            name: "Reliant Service",
            review: "Best boosting platform and social media handler. Thank you so much 🙏❤️",
            link: "https://www.facebook.com/profile.php?id=61575612820194&sk=reviews"
        },
        {
            name: "Zekey Shah",
            review: "We got best service from their company. Thank you media lift solution.",
            link: "https://www.facebook.com/profile.php?id=61575612820194&sk=reviews"
        }
    ];

    const [[currentIndex, direction], setCurrentIndex] = useState([0, 0]);

    const paginate = (newDirection) => {
        setCurrentIndex(([prev]) => {
            const nextIndex = (prev + newDirection + content.length) % content.length;
            return [nextIndex, newDirection];
        });
    };

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 120 : -120,
            opacity: 0,
            scale: 0.96,
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
        },
        exit: (direction) => ({
            x: direction > 0 ? -120 : 120,
            opacity: 0,
            scale: 0.96,
        }),
    };

    const activeItem = content[currentIndex];

    return (
        <section className="relative mt-24 w-full overflow-hidden">
            <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="lg:m-1 sm:m-5 sm:pb-4">
                    <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex w-fit items-center justify-start gap-2 rounded-2xl border border-gray-500 bg-gray-900/30 px-3 py-1"
                    >
                        <MessageSquare size={16} className="text-[#ffde59]" />
                        <span className="font-serif text-sm text-white">Testimonials</span>
                    </motion.div>
                </div>

                <motion.p
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.35 }}
                    className="mt-4 max-w-3xl text-3xl font-serif tracking-wide text-white/90 sm:text-4xl lg:text-5xl"
                >
                    Trusted by <span className="text-[#ffde59]">Hundreds of Clients</span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.35 }}
                    viewport={{ once: true }}

                    className="mt-10 flex flex-col gap-8">
                    <div className="relative min-h-[320px] sm:min-h-[280px]">
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    duration: 0.45,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="relative rounded-3xl border border-gray-700 bg-gray-900/60 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur-md sm:p-8 lg:p-10"
                            >
                                <div className="absolute right-6 top-6 opacity-10">
                                    <Quote size={58} className="text-[#ffde59]" />
                                </div>

                                <div className="flex flex-col gap-6">
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400/20 to-orange-500/20 text-lg font-bold text-white ring-1 ring-white/10">
                                            {activeItem.name
                                                .split(" ")
                                                .map((word) => word[0])
                                                .join("")
                                                .slice(0, 2)}
                                        </div>

                                        <div className="flex flex-col">
                                            <span className="text-lg font-bold tracking-tight text-white sm:text-xl">
                                                {activeItem.name}
                                            </span>
                                            <a href={activeItem.link} target="_blank" className="flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300 transition-colors">
                                                <Link size={14} />
                                                View Review
                                            </a>
                                        </div>
                                    </div>

                                    <p className="max-w-4xl text-base leading-8 text-gray-300 italic sm:text-lg">
                                        “{activeItem.review}”
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => paginate(-1)}
                                className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-500 bg-gray-900/50 text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-[#ffde59] hover:text-[#ffde59]"
                            >
                                <MoveLeft size={16} />
                            </button>

                            <div className="rounded-full border border-gray-700 bg-gray-900/40 px-4 py-2 text-sm text-white/80">
                                {currentIndex + 1} / {content.length}
                            </div>

                            <button
                                onClick={() => paginate(1)}
                                className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-500 bg-gray-900/50 text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-[#ffde59] hover:text-[#ffde59]"
                            >
                                <MoveRight size={16} />
                            </button>
                        </div>

                       
                    </div>
                </motion.div>
            </div>
        </section>
    );
};