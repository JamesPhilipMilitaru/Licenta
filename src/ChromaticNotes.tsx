import React from "react";
import "./Componentele unui set de tobe.css";
import "./ComponenteleTobe.css";
import "./ChromaticNotes.css"

export default function ChromaticNotes() {
    const notes = [
      { name: "C", freq: 261.63 },
      { name: "C#", freq: 277.18 },
      { name: "D", freq: 293.66 },
      { name: "D#", freq: 311.13 },
      { name: "E", freq: 329.63 },
      { name: "F", freq: 349.23 },
      { name: "F#", freq: 369.99 },
      { name: "G", freq: 392.00 },
      { name: "G#", freq: 415.30 },
      { name: "A", freq: 440.00 },
      { name: "A#", freq: 466.16 },
      { name: "B", freq: 493.88 },
      { name: "C (octavă)", freq: 523.25 }
    ];
  
    const playNote = (frequency) => {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioCtx.createOscillator();
      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(frequency, audioCtx.currentTime);
      oscillator.connect(audioCtx.destination);
      oscillator.start();
      setTimeout(() => {
        oscillator.stop();
        audioCtx.close();
      }, 500);
    };
  
    return (
      <div className="chromatic-notes-container">
        {notes.map((note) => (
          <button
            key={note.name}
            className="note-button"
            onClick={() => playNote(note.freq)}
          >
            {note.name}
          </button>
        ))}
      </div>
    );
  }
  