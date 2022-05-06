import { useState } from "react";
import { FeedbackContentStep } from "./Step/FeedbackContentStep";
import { FeedbackTypeStep } from "./Step/FeedbackTypeStep";

import bugImage from "../../assets/bug.svg";
import ideaImage from "../../assets/idea.svg";
import thoughtImage from "../../assets/thought.svg";
import { FeedbackSuccessStep } from "./Step/FeedbackSuccessStep";

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImage,
      alt: "Imagem de um inseto",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: ideaImage,
      alt: "Imagem de uma lâmpada",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      source: thoughtImage,
      alt: "Imagem de uma nuvem de pensamento",
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent ] = useState(false);

  function handleRestartFeedback() {
    setFeedbackSent(false)
    setFeedbackType(null);
  }
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
        {feedbackSent ? 
        <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback}/>  
        :
        <>
        {!feedbackType ? (
          <FeedbackTypeStep onFeedbackChange={setFeedbackType} />
        ) : (
          <FeedbackContentStep
            feedbackType={feedbackType}
            onFeedbackSent={() => setFeedbackSent(true)}
            onFeedbackRestartRequested={handleRestartFeedback}
          />

        )}
        </>
      }

      <footer className="text-xs text-neutral-400">
        Feito com ♥ pela{" "}
        <a
          className="underline underline-offset-2"
          href="https://www.rocketseat.com.br"
        >
          Rocketseat
        </a>
      </footer>
    </div>
  );
}
