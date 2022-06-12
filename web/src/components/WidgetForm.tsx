import { CloseButton } from "./CloseButton";

import bugImageUrl from '../assets/erro.png';
import ideaImageUrl from '../assets/lampada-de-ideia.png';
import thoughtImageUrl from '../assets/nuvem.png';
import { useState } from "react";

const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            title: 'erro icones',
            alt: 'Erro ícones criados por Dave Gandy - Flaticon'
        }
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideaImageUrl,
            title: 'lâmpada icones',
            alt: 'Lâmpada ícones criados por Icon home - Flaticon'
        }
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: thoughtImageUrl,
            title: 'nuvem ícones',
            alt: 'Nuvem ícones criados por DinosoftLabs - Flaticon'
        }
    },
}

type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)


    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
           <header>
                <span className="text-xl leading-6">Deixe seu feedback</span>

                <CloseButton/>
           </header>

            <div className="flex py-8 gap-2 w-full">
                {Object.entries(feedbackTypes).map(([key, value]) => {
                    return (
                        <button
                            key={key}
                            className="bg-zinc-800 rounded-lg py-5 h-30 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                            onClick={() => setFeedbackType(key as FeedbackType)}
                            type="button"
                        >
                        <img src={value.image.source} title={value.image.title} alt={value.image.alt} />
                            <span>{value.title}</span>
                        </button>
                    )
                })}
            </div>
           <footer>
                Aeeee kassinão
           </footer>
        </div>
    )
}