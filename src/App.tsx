import { useState } from 'react';
import { Box } from '@montage-ui/core';

import { QUESTIONS, getResultType } from './data/quiz';
import QuestionScreen from './screens/QuestionScreen';
import ResultScreen from './screens/ResultScreen';
import StartScreen from './screens/StartScreen';

import type { DesignerTypeId } from './data/quiz';

type Screen = 'start' | 'question' | 'result';

const App = () => {
  const [screen, setScreen] = useState<Screen>('start');
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<DesignerTypeId[]>([]);

  const handleStart = () => {
    setAnswers([]);
    setStep(0);
    setScreen('question');
  };

  const handleSelect = (type: DesignerTypeId) => {
    const nextAnswers = [...answers.slice(0, step), type];
    setAnswers(nextAnswers);

    if (step === QUESTIONS.length - 1) {
      setScreen('result');
      return;
    }
    setStep(step + 1);
  };

  const handleBack = () => {
    if (step === 0) {
      setScreen('start');
      return;
    }
    setStep(step - 1);
  };

  return (
    <Box
      sx={{
        maxWidth: 480,
        minHeight: '100dvh',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {screen === 'start' && <StartScreen onStart={handleStart} />}
      {screen === 'question' && (
        <QuestionScreen
          step={step}
          selected={answers[step]}
          onSelect={handleSelect}
          onBack={handleBack}
        />
      )}
      {screen === 'result' && (
        <ResultScreen type={getResultType(answers)} onRestart={() => setScreen('start')} />
      )}
    </Box>
  );
};

export default App;
