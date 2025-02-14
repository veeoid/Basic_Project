import React, { useState } from 'react';
import { Heart, Send, Sparkles } from 'lucide-react';

function App() {
  const [step, setStep] = useState(0);
  const [name, setName] = useState('');
  const [showProposal, setShowProposal] = useState(false);
  const [showThinking, setShowThinking] = useState(false);
  const [accepted, setAccepted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name) {
      setShowProposal(true);
    }
  };

  const messages = [
    "I promise to always laugh at your jokes... even the bad ones.",
    "I'll share my fries with you, and that's true love.",
    "They say dating me is a once-in-a-lifetime opportunity... literally, because I won't ask twice."
  ];

  if (accepted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 to-slate-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full mx-auto text-center space-y-6">
          <h2 className="text-3xl font-serif text-gray-800">Woohoo! 🎉</h2>
          <p className="text-xl text-gray-600">Best decision ever!</p>
          <img 
            src="https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif"
            alt="Excited cat dancing"
            className="w-full rounded-lg shadow-md"
          />
          <p className="text-gray-600 italic">*happy dance intensifies*</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-slate-50 flex items-center justify-center p-4">
      {!showProposal ? (
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full mx-auto">
          <Heart className="w-8 h-8 text-rose-500 mx-auto mb-6" />
          <h1 className="text-2xl font-serif text-center text-gray-800 mb-6">A Special Invitation</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                May I know your name?
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-rose-200 focus:border-rose-300 transition-colors"
                placeholder="Enter your name"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-rose-500 text-white py-2 px-4 rounded-md hover:bg-rose-600 transition-colors flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Continue
            </button>
          </form>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full mx-auto">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-serif text-gray-800">Dear {name},</h2>
            <p className="text-gray-600 leading-relaxed">
              {messages[step]}
            </p>
            {step < messages.length - 1 ? (
              <button
                onClick={() => setStep(step + 1)}
                className="bg-rose-500 text-white py-2 px-6 rounded-md hover:bg-rose-600 transition-colors inline-flex items-center gap-2"
              >
                Continue
                <Heart className="w-4 h-4" />
              </button>
            ) : (
              <div className="space-y-4">
                <p className="text-xl font-serif text-gray-800">
                  Would you be my Valentine?
                </p>
                {showThinking ? (
                  <div className="space-y-4 animate-bounce">
                    <p className="text-gray-600 italic">
                      Nice try! But this is a one-button situation 😉
                    </p>
                    <button 
                      className="bg-rose-500 text-white py-2 px-6 rounded-md hover:bg-rose-600 transition-colors inline-flex items-center gap-2"
                      onClick={() => setShowThinking(false)}
                    >
                      <Sparkles className="w-4 h-4" />
                      Yes, obviously!
                    </button>
                  </div>
                ) : (
                  <div className="flex gap-4 justify-center">
                    <button 
                      className="bg-rose-500 text-white py-2 px-6 rounded-md hover:bg-rose-600 transition-colors"
                      onClick={() => setAccepted(true)}
                    >
                      Yes
                    </button>
                    <button 
                      className="bg-gray-100 text-gray-600 py-2 px-6 rounded-md hover:bg-gray-200 transition-colors"
                      onClick={() => setShowThinking(true)}
                    >
                      Let me think
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;