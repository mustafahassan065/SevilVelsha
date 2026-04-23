// src/routes/voice-course/CourseDashboard.jsx

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CourseDashboard.module.css';

const LESSONS = [
  {
    num: '01', topic: 'Breathing & Vocal Foundation',
    title: 'The One Breathing Technique That Calms & Empowers', duration: '4–5 min',
    about: 'Discover diaphragmatic breathing — the single most powerful technique used by TED speakers, actors, and confident communicators worldwide. Learn why shallow chest breathing weakens your voice and how belly breathing instantly makes you sound calmer, stronger, and more grounded. Includes two guided exercises and a 7-day morning practice.',
    outcome: 'A simple daily breathing practice that fuels confidence, vocal clarity, and authentic power — anytime, anywhere.',
    videoUrl: 'https://drive.google.com/file/d/1rs8qVhVz23WQlZQ7NFfsq93tB0pDBYbE/preview',
    pdfUrl: 'https://drive.google.com/uc?export=download&id=1LDGTUt9LijOtN7XipfrnToIaGghIFME7',
    pdfName: 'Lesson-1-Breathing-Workbook.pdf',
  },
  {
    num: '02', topic: 'Diaphragmatic Breathing — Deep Dive',
    title: 'The One Breathing Technique That Calms & Empowers', duration: '5–7 min',
    about: 'Go deeper into the difference between shallow chest breathing and deep belly breathing. Through guided exercises, practice belly breathing to calm your nervous system and voiced exhales to strengthen breath support.',
    outcome: 'A daily breathing routine that fuels vocal clarity, confidence, and authentic power in any situation.',
    videoUrl: 'https://drive.google.com/file/d/1QPzt_S9Tbmo2ra3djjyvJ13HxT2MUGht/preview',
    pdfUrl: 'https://drive.google.com/uc?export=download&id=1iIlcIdFTClexktoMoyAZTzObxklkcnI9',
    pdfName: 'Lesson-2-Deep-Dive-Workbook.pdf',
  },
  {
    num: '03', topic: 'Daily Warm-Up Routine',
    title: 'Daily Voice Warm-Up: 5 Minutes to Power, Clarity & Confidence', duration: '5 min',
    about: 'Learn how to prepare your voice for clear, confident speaking just like professional actors and speakers do. This daily 5-minute routine helps you breathe deeply, wake up your voice with humming and resonance exercises, and improve clarity with tongue twisters.',
    outcome: 'A ready-to-use warm-up routine for presentations, meetings, videos, or interviews.',
    videoUrl: 'https://drive.google.com/file/d/1T0oZC9UdtPocCX8eNzZHOmYYawfOMWGN/preview',
    pdfUrl: 'https://drive.google.com/uc?export=download&id=1U9rRdx1zUcYkvDdaFS601zXipVJ0SOLK',
    pdfName: 'Lesson-3-Warmup-Workbook.pdf',
  },
  {
    num: '04', topic: 'Pitch, Pause & Pace',
    title: 'Pitch, Pause & Pace — The 3 Tools of Vocal Expression', duration: '6–8 min',
    about: 'Master the three essential tools that shape not just how your words are heard — but how they are felt. Pitch gives your speech melody. Pause is your secret weapon. Pace controls how you are perceived.',
    outcome: 'The ability to speak with clarity, confidence, and persuasive energy in any situation.',
    videoUrl: 'https://drive.google.com/file/d/1VG7YlxV0VBjv1J3Un-2KTcWECWsIyRcD/preview',
    pdfUrl: 'https://drive.google.com/uc?export=download&id=1s9FxAlP_N9tzeob4T2qTG_evjLFA2rEU',
    pdfName: 'Lesson-4-Pitch-Pause-Pace-Workbook.pdf',
  },
  {
    num: '05', topic: 'Clarity & Articulation',
    title: 'Stop Mumbling — Speak With Clarity and Precision', duration: '6–7 min',
    about: 'Eliminate mumbling and speak with precision in any situation. Discover why we mumble and how to fix it with simple daily exercises that activate your lips, tongue, and jaw.',
    outcome: 'Greater control, presence, and impact in every conversation.',
    videoUrl: 'https://drive.google.com/file/d/1grCVs-kE_qa67ujNy2cwFTAQ2th48eme/preview',
    pdfUrl: 'https://drive.google.com/uc?export=download&id=13kxip93a3hPmdXM6gPLxtXIBya90L5Xu',
    pdfName: 'Lesson-5-Clarity-Workbook.pdf',
  },
  {
    num: '06', topic: 'Vocal Emotion & Authenticity',
    title: 'Vocal Emotion — Speak With Feeling and Authenticity', duration: '6–8 min',
    about: 'Learn how to bring your words to life using tone, breath, and emphasis to express real emotion. The Emotion Line Game — one sentence delivered with multiple different feelings.',
    outcome: 'The ability to deliver any line with confidence, warmth, or excitement — on command.',
    videoUrl: 'https://drive.google.com/file/d/1wmvDMMRY2jIShwZ-Ynr-Rs4h7HtBNbmd/preview',
    pdfUrl: 'https://drive.google.com/uc?export=download&id=115h7qVhEdsJo8UYSJj7u9vJ61JMdf_-T',
    pdfName: 'Lesson-6-Vocal-Emotion-Workbook.pdf',
  },
  {
    num: '07', topic: 'Performance & Presence',
    title: 'Performance & Presence — Think Like an Actor', duration: '7–9 min',
    about: 'Step into the world of performance and presence. Learn how breath, pacing, silence, and emphasis create charisma that people feel instantly.',
    outcome: 'The presence and charisma to captivate any audience.',
    videoUrl: 'https://drive.google.com/file/d/1ZGKftrvVEA2xPJ08_C0M_ORFNFdN4qSs/preview',
    pdfUrl: 'https://drive.google.com/uc?export=download&id=115h7qVhEdsJo8UYSJj7u9vJ61JMdf_-T',
    pdfName: 'Lesson-7-Performance-Workbook.pdf',
  },
  {
    num: '08', topic: 'Final Challenge & Certification',
    title: 'Final Challenge — Your Voice, Then & Now', duration: '8–10 min',
    about: 'Your moment to reflect, celebrate, and commit. Re-record your voice and hear just how far you have come. Receive your 30-Day Voice Power Plan and complete the process to receive your credential.',
    outcome: 'A celebration of your personal growth and the launch of a new chapter with your voice.',
    videoUrl: 'https://drive.google.com/file/d/150CwynaPYLn-nEYS9xWI-70urmd54A42/preview',
    pdfUrl: 'https://drive.google.com/uc?export=download&id=1LW8-McmYoxe_znD1SaJ67n_iKJIEQDW7',
    pdfName: 'Lesson-8-Final-Challenge-Workbook.pdf',
  },
];

const QUIZZES = [
  {
    lessonNum:'01',
    questions:[
      {q:'What are people primarily judging in the first 3 seconds?',options:['Vocabulary','Ideas','Voice','Grammar'],correct:2},
      {q:'Which elements influence how your voice is perceived most?',options:['Accent and speed','Tone, pace, pauses','Grammar and vocabulary','Volume only'],correct:1},
      {q:'What does your voice communicate even without words?',options:['Intelligence','Presence and emotional state','Education level','Age'],correct:1},
    ],
    truefalse:[
      {q:'People judge confidence mainly based on words.',correct:false},
      {q:'Your voice can signal nervousness or control.',correct:true},
      {q:'Pauses weaken your speech.',correct:false},
    ],
    reflection:{q:'Did you notice how your voice creates a first impression?',yes:'Good. Awareness is the first step to control. Pay attention to your voice in real conversations today.',no:"That's normal. Most people don't notice their voice yet. Try recording your voice and listening carefully to your tone, pace, and energy."},
  },
  {
    lessonNum:'02',
    questions:[
      {q:'What type of breathing creates a strong, controlled voice?',options:['Chest breathing','Shallow breathing','Diaphragmatic breathing','Fast breathing'],correct:2},
      {q:'What happens when your breath is shallow?',options:['Your voice becomes louder','Your voice becomes weaker','Your voice becomes faster','Nothing changes'],correct:1},
      {q:'During proper diaphragmatic breathing, what should expand?',options:['Chest','Shoulders','Belly','Neck'],correct:2},
    ],
    truefalse:[
      {q:'Most people naturally breathe using their diaphragm.',correct:false},
      {q:'Diaphragmatic breathing helps reduce nervousness.',correct:true},
      {q:'Strong voices require tension and force.',correct:false},
    ],
    reflection:{q:'Did your voice feel calmer and more supported after breathing?',yes:"Good. That's breath support — the foundation of a strong voice. Use 3 slow belly breaths before speaking today.",no:"That's normal. Place one hand on your belly, inhale slowly so your belly rises, then exhale with a soft 'ssssss'. Repeat 3 times."},
  },
  {
    lessonNum:'03',
    questions:[
      {q:'Why should you warm up your voice before speaking?',options:['To speak louder','To make your voice faster','To make your voice clearer, stronger, and more expressive','To memorize words'],correct:2},
      {q:'Your voice is compared to what in this lesson?',options:['A machine','A muscle','A habit','A tool'],correct:1},
      {q:'What does humming help improve?',options:['Vocabulary','Speed','Resonance (full, rich sound)','Grammar'],correct:2},
    ],
    truefalse:[
      {q:'Your body has no effect on your voice.',correct:false},
      {q:'Stretching and relaxing the body helps your voice.',correct:true},
      {q:'You only need to warm up your voice once a week.',correct:false},
    ],
    reflection:{q:'Did your voice feel more awake and flexible after the warm-up?',yes:"Good. That's your voice activating. Use this 5-minute warm-up before any important conversation.",no:"That's normal. Try exaggerating the exercises more, make your humming stronger, and open your mouth more during articulation."},
  },
  {
    lessonNum:'04',
    questions:[
      {q:'What does pitch refer to in speaking?',options:['Volume','Speed','Melody of your voice','Breathing'],correct:2},
      {q:'What is the purpose of a pause in speech?',options:['To fill time','To show uncertainty','To let the message land and show confidence','To speak slower'],correct:2},
      {q:'What is the effect of slowing down your pace slightly?',options:['You sound tired','You sound calmer and more in control','You sound less intelligent','You sound less confident'],correct:1},
    ],
    truefalse:[
      {q:'Pitch should remain the same throughout your speech.',correct:false},
      {q:'Pauses can make your speech more powerful.',correct:true},
      {q:'Pitch, pause, and pace help people feel your message.',correct:true},
    ],
    reflection:{q:'Did your voice sound more expressive and controlled?',yes:"Good. You're starting to shape how people feel your voice. Use pitch to highlight key words and add pauses after important ideas.",no:"That's normal. Focus on one tool only — just pitch, just pause, or just pace. Practice with one simple sentence."},
  },
  {
    lessonNum:'05',
    questions:[
      {q:'What is the main goal of articulation?',options:['To speak louder','To sound faster','To speak clearly and be understood','To change your accent'],correct:2},
      {q:'Which of the following are the main articulators?',options:['Lungs, throat, chest','Lips, tongue, jaw','Nose, ears, eyes','Voice, pitch, pace'],correct:1},
      {q:'Why are tongue twisters useful?',options:['They improve grammar','They increase speed only','They improve clarity and precision','They relax breathing'],correct:2},
    ],
    truefalse:[
      {q:'Clear speech requires a perfect accent.',correct:false},
      {q:'Speaking too fast can reduce clarity.',correct:true},
      {q:'Articulation can be trained like a muscle.',correct:true},
    ],
    reflection:{q:'Did your speech feel clearer and easier to understand?',yes:"Good. Keep practicing the exercises daily. Your articulation will continue to sharpen.",no:"That's normal. Slow down and exaggerate each movement. Practice lip exercises in front of a mirror."},
  },
  {
    lessonNum:'06',
    questions:[
      {q:'What carries most of the emotional impact in communication?',options:['Grammar','Vocabulary','Tone of voice','Sentence length'],correct:2},
      {q:'What does a flat, robotic voice communicate?',options:['Confidence','Energy','Lack of care or emotion','Intelligence'],correct:2},
      {q:'What does emphasis in speech do?',options:['Makes speech louder','Highlights what matters emotionally','Speeds up communication','Improves grammar'],correct:1},
    ],
    truefalse:[
      {q:'Words alone are enough to create emotional impact.',correct:false},
      {q:'The same sentence can express different emotions.',correct:true},
      {q:'Emotional expression in voice cannot be trained.',correct:false},
    ],
    reflection:{q:'Did your voice feel more alive and connected to emotion?',yes:"Good. That's when your voice starts to connect, not just communicate. Let your tone match your intention.",no:"That's normal. Think of a real moment of joy or surprise. Say one sentence from that feeling and let your tone change naturally."},
  },
  {
    lessonNum:'07',
    questions:[
      {q:'What creates charisma that people feel instantly?',options:['Speed and volume','Breath, pacing, silence, and emphasis','Grammar and vocabulary','Accent and tone'],correct:1},
      {q:'What does a well-placed silence create?',options:['Confusion','Impact and confidence','Weakness','Speed'],correct:1},
      {q:'What is the goal of performance techniques?',options:['To sound like someone else','To memorize scripts','To become magnetic, calm, and unforgettable','To speak louder'],correct:2},
    ],
    truefalse:[
      {q:'Actors use the same vocal tools as great communicators.',correct:true},
      {q:'Charisma is only for naturally talented speakers.',correct:false},
      {q:'Presence can be trained through practice.',correct:true},
    ],
    reflection:{q:'Did you feel more presence and control in your voice?',yes:"Good. That presence is now part of how you communicate. Continue applying it in real conversations.",no:"That's normal. Focus on one moment of intentional pause. That's presence beginning."},
  },
  {
    lessonNum:'08',
    questions:[
      {q:'What leads to true voice mastery?',options:['One lesson','Natural talent','Daily practice and consistency','Speaking louder'],correct:2},
      {q:'What should you do after recording your final voice sample?',options:['Delete it','Share it immediately','Compare it with your first recording','Record another one'],correct:2},
      {q:'What is the final goal of this course?',options:['To sound perfect','To copy others','To build a strong, confident, intentional voice','To speak faster'],correct:2},
    ],
    truefalse:[
      {q:'One lesson is enough to fully master your voice.',correct:false},
      {q:'Listening to your own recordings helps you improve.',correct:true},
      {q:'The course is the end of your voice journey.',correct:false},
    ],
    reflection:{q:'Can you hear a clear difference between your first and final recording?',yes:"Excellent. That difference is your growth. Share your progress and inspire others.",no:"That's okay. Listen again carefully to your pace, tone, and clarity. The change is there."},
  },
];

// ── QUIZ — fixed: shows correct/wrong per answer, reflection always appears ──
function QuizSection({ lessonIndex }) {
  const quiz = QUIZZES[lessonIndex];
  const [answers, setAnswers]       = React.useState({});
  const [tfAnswers, setTfAnswers]   = React.useState({});
  const [reflection, setReflection] = React.useState(null);
  const [submitted, setSubmitted]   = React.useState(false);
  const [score, setScore]           = React.useState(0);

  React.useEffect(() => {
    setAnswers({}); setTfAnswers({}); setReflection(null); setSubmitted(false); setScore(0);
  }, [lessonIndex]);

  if (!quiz) return null;
  const total = quiz.questions.length + quiz.truefalse.length;

  const handleSubmit = () => {
    let s = 0;
    quiz.questions.forEach((q,i) => { if (answers[i] === q.correct) s++; });
    quiz.truefalse.forEach((q,i) => { if (tfAnswers[i] === q.correct) s++; });
    setScore(s); setSubmitted(true);
  };

  const mcBg = (qi,oi) => {
    if (!submitted) return answers[qi]===oi ? '#fdf8f0' : '#f9f7f3';
    if (oi === quiz.questions[qi].correct) return 'rgba(74,124,118,0.1)';
    if (answers[qi]===oi) return 'rgba(220,53,69,0.08)';
    return '#f9f7f3';
  };
  const mcBorder = (qi,oi) => {
    if (!submitted) return answers[qi]===oi ? '1px solid #c9a96e' : '1px solid transparent';
    if (oi === quiz.questions[qi].correct) return '1px solid #4a7c76';
    if (answers[qi]===oi) return '1px solid #dc3545';
    return '1px solid transparent';
  };
  const tfBg = (ti,val) => {
    if (!submitted) return tfAnswers[ti]===val ? '#fdf8f0' : '#f9f7f3';
    if (val === quiz.truefalse[ti].correct) return 'rgba(74,124,118,0.1)';
    if (tfAnswers[ti]===val) return 'rgba(220,53,69,0.08)';
    return '#f9f7f3';
  };
  const tfBorder = (ti,val) => {
    if (!submitted) return tfAnswers[ti]===val ? '1px solid #c9a96e' : '1px solid #ddd';
    if (val === quiz.truefalse[ti].correct) return '1px solid #4a7c76';
    if (tfAnswers[ti]===val) return '1px solid #dc3545';
    return '1px solid #ddd';
  };

  return (
    <div style={{ marginTop:56, borderTop:'1px solid #e8e4dc', paddingTop:52 }}>
      <p style={{ fontSize:'11px', fontWeight:700, letterSpacing:'0.18em', textTransform:'uppercase', color:'#c9a96e', marginBottom:28 }}>
        Lesson {quiz.lessonNum} Quiz
      </p>

      {/* MC */}
      {quiz.questions.map((q,qi) => (
        <div key={qi} style={{ marginBottom:36 }}>
          <p style={{ fontSize:'14px', fontWeight:600, color:'#1a1a1a', marginBottom:14, lineHeight:1.6 }}>{qi+1}. {q.q}</p>
          {q.options.map((opt,oi) => (
            <label key={oi} style={{ display:'flex', alignItems:'center', gap:10, marginBottom:10, cursor:submitted?'default':'pointer', padding:'11px 14px', background:mcBg(qi,oi), border:mcBorder(qi,oi), borderRadius:4 }}>
              <input type="radio" name={`q${lessonIndex}_${qi}`} checked={answers[qi]===oi} onChange={() => !submitted && setAnswers(p=>({...p,[qi]:oi}))} style={{ accentColor:'#c9a96e' }} disabled={submitted}/>
              <span style={{ fontSize:'13px', color:'#333', flex:1 }}>{opt}</span>
              {submitted && oi===q.correct && <span style={{ fontSize:'12px', color:'#4a7c76', fontWeight:700, flexShrink:0 }}>✓ Correct</span>}
              {submitted && answers[qi]===oi && oi!==q.correct && <span style={{ fontSize:'12px', color:'#dc3545', fontWeight:700, flexShrink:0 }}>✗ Wrong</span>}
            </label>
          ))}
        </div>
      ))}

      {/* T/F */}
      <p style={{ fontSize:'13px', fontWeight:700, color:'#777', marginBottom:18, letterSpacing:'0.05em' }}>True / False</p>
      {quiz.truefalse.map((q,ti) => (
        <div key={ti} style={{ marginBottom:28 }}>
          <p style={{ fontSize:'14px', color:'#1a1a1a', marginBottom:12, lineHeight:1.6 }}>{q.q}</p>
          <div style={{ display:'flex', gap:14 }}>
            {[true,false].map(val => (
              <label key={String(val)} style={{ display:'flex', alignItems:'center', gap:8, cursor:submitted?'default':'pointer', padding:'11px 28px', background:tfBg(ti,val), border:tfBorder(ti,val), borderRadius:4 }}>
                <input type="radio" name={`tf${lessonIndex}_${ti}`} checked={tfAnswers[ti]===val} onChange={() => !submitted && setTfAnswers(p=>({...p,[ti]:val}))} style={{ accentColor:'#c9a96e' }} disabled={submitted}/>
                <span style={{ fontSize:'13px', color:'#333' }}>{val?'True':'False'}</span>
                {submitted && val===q.correct && <span style={{ fontSize:'11px', color:'#4a7c76', fontWeight:700 }}>✓</span>}
                {submitted && tfAnswers[ti]===val && val!==q.correct && <span style={{ fontSize:'11px', color:'#dc3545', fontWeight:700 }}>✗</span>}
              </label>
            ))}
          </div>
        </div>
      ))}

      {/* Submit */}
      {!submitted ? (
        <button onClick={handleSubmit} style={{ background:'#1a1a1a', color:'#fff', border:'none', padding:'16px 44px', fontSize:'11px', fontWeight:700, letterSpacing:'0.18em', textTransform:'uppercase', cursor:'pointer', marginTop:20 }}>
          Submit Quiz
        </button>
      ) : (
        <div style={{ marginTop:28, padding:'32px', background:'#f9f7f3', border:'1px solid #e8e4dc', textAlign:'center' }}>
          <p style={{ fontFamily:'Georgia,serif', fontSize:'1.6rem', fontWeight:700, color:'#1a1a1a', margin:'0 0 10px' }}>
            {score}/{total} Correct
          </p>
          <p style={{ fontSize:'14px', color:'#777', margin:'0 0 28px' }}>
            {score===total ? '🎯 Perfect score!' : score>=total*0.7 ? '✅ Well done!' : '📚 Review the lesson and try again.'}
          </p>
          <button
            onClick={() => { setSubmitted(false); setAnswers({}); setTfAnswers({}); setReflection(null); setScore(0); }}
            style={{ background:'none', border:'1.5px solid #1a1a1a', color:'#1a1a1a', padding:'13px 32px', fontSize:'11px', fontWeight:600, letterSpacing:'0.14em', textTransform:'uppercase', cursor:'pointer' }}
          >
            Retake Quiz
          </button>
        </div>
      )}

      {/* Reflection — always shows after submit ── */}
      {submitted && (
        <div style={{ marginTop:36 }}>
          {reflection === null ? (
            <div style={{ padding:'32px', background:'#f9f7f3', border:'1px solid #e8e4dc' }}>
              <p style={{ fontSize:'15px', fontWeight:600, color:'#1a1a1a', marginBottom:24, lineHeight:1.6 }}>{quiz.reflection.q}</p>
              <div style={{ display:'flex', gap:16 }}>
                <button onClick={() => setReflection('yes')} style={{ flex:1, padding:'15px', background:'#1a1a1a', color:'#fff', border:'none', fontSize:'13px', fontWeight:600, cursor:'pointer', borderRadius:2 }}>Yes</button>
                <button onClick={() => setReflection('no')} style={{ flex:1, padding:'15px', background:'#fff', color:'#1a1a1a', border:'1.5px solid #1a1a1a', fontSize:'13px', fontWeight:600, cursor:'pointer', borderRadius:2 }}>No</button>
              </div>
            </div>
          ) : (
            <div style={{ padding:'28px', background:reflection==='yes'?'rgba(74,124,118,0.08)':'#fdf8f0', border:`1.5px solid ${reflection==='yes'?'#4a7c76':'#c9a96e'}`, borderRadius:4 }}>
              <p style={{ fontSize:'14px', color:'#1a1a1a', lineHeight:1.8, margin:0 }}>
                {reflection==='yes' ? quiz.reflection.yes : quiz.reflection.no}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ── CERTIFICATE — with name input ──
// ── CERTIFICATE GENERATOR — uses jsPDF loaded from CDN ──
function generateCertificate(name, setIssued) {
  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
  script.onload = () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
    const w = 297; const h = 210;
    const today = new Date().toLocaleDateString('en-US', { year:'numeric', month:'long', day:'numeric' });

    // Background
    doc.setFillColor(250, 250, 247);
    doc.rect(0, 0, w, h, 'F');

    // Outer border
    doc.setDrawColor(26, 26, 26);
    doc.setLineWidth(1.5);
    doc.rect(8, 8, w-16, h-16);

    // Gold inner border
    doc.setDrawColor(201, 169, 110);
    doc.setLineWidth(0.5);
    doc.rect(13, 13, w-26, h-26);

    // Gold top line
    doc.setLineWidth(0.8);
    doc.line(25, 28, w-25, 28);

    // Header
    doc.setFontSize(10);
    doc.setTextColor(201, 169, 110);
    doc.setFont('helvetica', 'bold');
    doc.text('S E V I L   V E L S H A', w/2, 24, { align:'center' });

    // Title
    doc.setFontSize(28);
    doc.setTextColor(26, 26, 26);
    doc.text('Certificate of Completion', w/2, 45, { align:'center' });

    // Course name
    doc.setFontSize(14);
    doc.setTextColor(201, 169, 110);
    doc.text('Voice Control: Speak with Confidence and Authority', w/2, 57, { align:'center' });

    // Gold line
    doc.setDrawColor(201, 169, 110);
    doc.setLineWidth(0.5);
    doc.line(w/2-55, 62, w/2+55, 62);

    // Awarded to
    doc.setFontSize(12);
    doc.setTextColor(100, 100, 100);
    doc.setFont('helvetica', 'normal');
    doc.text('This certificate is proudly awarded to', w/2, 72, { align:'center' });

    // NAME — large, prominent
    doc.setFontSize(34);
    doc.setTextColor(26, 26, 26);
    doc.setFont('helvetica', 'bolditalic');
    doc.text(name, w/2, 92, { align:'center' });

    // Line under name
    const nameWidth = doc.getTextWidth(name);
    doc.setDrawColor(26, 26, 26);
    doc.setLineWidth(0.4);
    doc.line(w/2 - nameWidth/2 - 5, 97, w/2 + nameWidth/2 + 5, 97);

    // For completing
    doc.setFontSize(11);
    doc.setTextColor(100, 100, 100);
    doc.setFont('helvetica', 'normal');
    doc.text('for successfully completing the Voice Control program and demonstrating dedication to', w/2, 107, { align:'center' });
    doc.text('developing a clear, confident, and powerful voice.', w/2, 114, { align:'center' });

    // Skills
    doc.setFontSize(10);
    doc.setTextColor(26, 26, 26);
    const skills = ['Breath control and vocal support', 'Clear articulation and speech precision', 'Pitch, pause, and pacing for impact', 'Emotional expression and vocal presence'];
    skills.forEach((skill, i) => {
      const col = i < 2 ? w/2 - 70 : w/2 + 5;
      const row = i % 2 === 0 ? 125 : 132;
      doc.text('• ' + skill, col, row);
    });

    // Gold divider
    doc.setDrawColor(201, 169, 110);
    doc.setLineWidth(0.5);
    doc.line(25, 142, w-25, 142);

    // Quote
    doc.setFontSize(11);
    doc.setTextColor(201, 169, 110);
    doc.setFont('helvetica', 'italic');
    doc.text('"My voice used to feel small. Now it feels strong."', w/2, 152, { align:'center' });

    // Footer
    doc.setFontSize(11);
    doc.setTextColor(26, 26, 26);
    doc.setFont('helvetica', 'bold');
    doc.text('Sevil Velsha', w/2, 165, { align:'center' });
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(120, 120, 120);
    doc.text('Executive Voice Authority Coach  |  Creator of the Voice Control Method', w/2, 172, { align:'center' });
    doc.text('Date: ' + today, w/2, 180, { align:'center' });

    // Save
    doc.save(`Voice-Control-Certificate-${name.replace(/\s+/g,'-')}.pdf`);
    setIssued(true);
  };
  if (!document.querySelector('script[src*="jspdf"]')) {
    document.head.appendChild(script);
  } else if (window.jspdf) {
    script.onload();
  } else {
    document.head.appendChild(script);
  }
}

function CertificateSection({ progressPercent, totalLessons }) {
  const [nameInput, setNameInput] = useState('');
  const [certReady, setCertReady] = useState(false);
  const [userName, setUserName]   = useState('');
  const [issued, setIssued]       = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('vc_free_name') || localStorage.getItem('vc_buyer_name') || '';
    if (saved) setNameInput(saved);
  }, []);

  const darkBox = { background:'linear-gradient(135deg,#1a1a1a,#2d2d2d)', padding:'clamp(32px,5vw,52px)', textAlign:'center', marginTop:64 };

  if (progressPercent < 100) return (
    <div style={darkBox}>
      <p style={{ fontSize:'11px', fontWeight:700, letterSpacing:'0.22em', textTransform:'uppercase', color:'#c9a96e', margin:'0 0 12px' }}>🎓 Certification</p>
      <h2 style={{ fontFamily:'Georgia,serif', fontSize:'clamp(1.3rem,3vw,1.8rem)', fontWeight:700, color:'#fff', margin:'0 0 16px', lineHeight:1.3 }}>Earn a Professional Voice Control Certification</h2>
      <p style={{ fontSize:'14px', color:'rgba(255,255,255,0.65)', margin:'0 0 20px', lineHeight:1.7, maxWidth:420, marginLeft:'auto', marginRight:'auto' }}>
        Upon completion, you will receive a <strong style={{ color:'#c9a96e' }}>Certified Voice Control Practitioner</strong> credential.
      </p>
      <div style={{ display:'flex', justifyContent:'center', gap:24, flexWrap:'wrap', marginBottom:8 }}>
        {['✔ Downloadable certificate','✔ Share on LinkedIn','✔ Demonstrate communication authority'].map((item,i) => (
          <span key={i} style={{ fontSize:'13px', color:'rgba(255,255,255,0.75)', fontWeight:500 }}>{item}</span>
        ))}
      </div>
      <p style={{ fontSize:'13px', color:'rgba(255,255,255,0.4)', marginTop:20 }}>Complete all {totalLessons} lessons to unlock your certificate.</p>
    </div>
  );

  return (
    <div style={darkBox}>
      <p style={{ fontSize:'11px', fontWeight:700, letterSpacing:'0.22em', textTransform:'uppercase', color:'#c9a96e', margin:'0 0 12px' }}>🏆 Course Complete</p>
      <h2 style={{ fontFamily:'Georgia,serif', fontSize:'clamp(1.3rem,3vw,1.8rem)', fontWeight:700, color:'#fff', margin:'0 0 24px', lineHeight:1.3 }}>Download Your Certificate</h2>

      {!certReady ? (
        <div style={{ maxWidth:400, margin:'0 auto' }}>
          <p style={{ fontSize:'14px', color:'rgba(255,255,255,0.65)', margin:'0 0 20px', lineHeight:1.7 }}>
            Enter your full name as it should appear on the certificate:
          </p>
          <input
            type="text"
            value={nameInput}
            onChange={e => setNameInput(e.target.value)}
            onKeyDown={e => e.key==='Enter' && nameInput.trim() && (setUserName(nameInput.trim()), setCertReady(true), localStorage.setItem('vc_buyer_name', nameInput.trim()))}
            placeholder="Your Full Name"
            style={{ width:'100%', padding:'15px 16px', fontSize:'15px', border:'none', background:'rgba(255,255,255,0.1)', color:'#fff', marginBottom:20, boxSizing:'border-box', textAlign:'center', outline:'none', borderRadius:2 }}
          />
          <button
            onClick={() => { if (nameInput.trim()) { setUserName(nameInput.trim()); setCertReady(true); localStorage.setItem('vc_buyer_name', nameInput.trim()); } }}
            style={{ background:'linear-gradient(135deg,#c9a96e,#e8d5a3)', color:'#1a1a1a', border:'none', padding:'15px 40px', fontSize:'12px', fontWeight:700, letterSpacing:'0.18em', textTransform:'uppercase', cursor:'pointer', width:'100%', borderRadius:2 }}
          >
            Generate Certificate
          </button>
        </div>
      ) : (
        <div>
          <p style={{ fontSize:'14px', color:'rgba(255,255,255,0.65)', margin:'0 0 28px' }}>
            Certificate prepared for: <strong style={{ color:'#c9a96e' }}>{userName}</strong>
          </p>
          <div style={{ display:'flex', gap:20, justifyContent:'center', flexWrap:'wrap', marginBottom:20 }}>
            <button
              onClick={() => generateCertificate(userName, setIssued)}
              style={{ display:'inline-block', background:'linear-gradient(135deg,#c9a96e,#e8d5a3)', color:'#1a1a1a', fontFamily:'inherit', fontSize:'12px', fontWeight:700, letterSpacing:'0.18em', textTransform:'uppercase', padding:'15px 40px', border:'none', cursor:'pointer', borderRadius:2 }}
            >
              Download Certificate
            </button>
            <a
              href={`https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME&name=Voice+Control+Practitioner&organizationId=&issueYear=${new Date().getFullYear()}&issueMonth=${new Date().getMonth()+1}&certUrl=https://sevilvelsha.com`}
              target="_blank" rel="noreferrer"
              style={{ display:'inline-block', background:'#0077b5', color:'#fff', fontFamily:'inherit', fontSize:'12px', fontWeight:700, letterSpacing:'0.18em', textTransform:'uppercase', padding:'15px 40px', textDecoration:'none', borderRadius:2 }}
            >
              Share on LinkedIn
            </a>
          </div>
          {issued && <p style={{ fontSize:'13px', color:'#c9a96e', margin:'0 0 12px' }}>✓ Your certificate has been issued.</p>}
          <button onClick={() => { setCertReady(false); setIssued(false); }} style={{ background:'none', border:'none', color:'rgba(255,255,255,0.4)', fontSize:'12px', cursor:'pointer', marginTop:4 }}>
            Change name
          </button>
        </div>
      )}
    </div>
  );
}

export default function CourseDashboard() {
  const navigate = useNavigate();
  const [activeLesson, setActiveLesson] = useState(0);
  const [completed, setCompleted] = useState(() => {
    try {
      const saved = localStorage.getItem('vc_progress');
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch { return new Set(); }
  });

  const toggleComplete = (index) => {
    setCompleted(prev => {
      const next = new Set(prev);
      next.has(index) ? next.delete(index) : next.add(index);
      localStorage.setItem('vc_progress', JSON.stringify([...next]));
      return next;
    });
  };

  const progressPercent = Math.round((completed.size / LESSONS.length) * 100);
  const lesson = LESSONS[activeLesson];

  return (
    <div className={styles.page}>

      {/* NAV */}
      <nav className={styles.nav}>
        <span onClick={() => navigate('/')} style={{ fontFamily:"'Segoe UI',Arial,sans-serif", fontSize:'18px', fontWeight:'600', letterSpacing:'0.08em', color:'#f5f4f0', cursor:'pointer', whiteSpace:'nowrap' }}>
          Sevil Velsha
        </span>
        <p className={styles.navTitle}>Voice Control™ Course</p>
        <p className={styles.navProgress}>{completed.size}/{LESSONS.length} complete</p>
      </nav>

      {/* PROGRESS BAR */}
      <div className={styles.progressBarOuter}>
        <div className={styles.progressBarInner} style={{ width:`${progressPercent}%` }}/>
      </div>

      <div className={styles.layout}>

        {/* SIDEBAR */}
        <aside className={styles.sidebar}>
          <p className={styles.sidebarLabel}>Course Lessons</p>
          <div className={styles.lessonList}>
            {LESSONS.map((l,i) => (
              <button key={i}
                className={[styles.lessonItem, activeLesson===i ? styles.lessonItemActive:'', completed.has(i)?styles.lessonItemDone:''].filter(Boolean).join(' ')}
                onClick={() => { setActiveLesson(i); window.scrollTo({top:0,behavior:'smooth'}); }}
              >
                <div className={styles.lessonCheck}>
                  {completed.has(i) ? (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M5 12l5 5 9-10" stroke="#fff" strokeWidth="3" strokeLinecap="round"/></svg>
                  ) : (
                    <span className={styles.lessonNum}>{l.num}</span>
                  )}
                </div>
                <div className={styles.lessonInfo}>
                  <p className={styles.lessonTopic}>{l.topic}</p>
                  <p className={styles.lessonDuration}>{l.duration}</p>
                </div>
              </button>
            ))}
          </div>
          {progressPercent === 100 && (
            <div className={styles.certBlock}>
              <p className={styles.certLabel}>🏆 Congratulations!</p>
              <p className={styles.certText}>You have completed the Voice Control Course.</p>
              <p className={styles.certText} style={{ marginTop:8, fontSize:'11px', opacity:0.7 }}>Scroll down to download your certificate.</p>
            </div>
          )}
        </aside>

        {/* MAIN */}
        <main className={styles.main}>

          {/* TOPIC */}
          <div className={styles.topicBadge}>
            <span className={styles.lessonNumBig}>Lesson {lesson.num}</span>
            <span className={styles.topicText}>{lesson.topic}</span>
          </div>

          {/* TITLE */}
          <h1 className={styles.lessonHeading}>{lesson.title}</h1>

          {/* ABOUT */}
          <div className={styles.aboutBox}>
            <p className={styles.aboutLabel}>About This Lesson</p>
            <p className={styles.aboutText}>{lesson.about}</p>
            <div className={styles.outcomeRow}>
              <span className={styles.outcomeIcon}>🎯</span>
              <p className={styles.outcomeText}><strong>Outcome:</strong> {lesson.outcome}</p>
            </div>
          </div>

          {/* VIDEO — key forces re-mount on lesson change */}
          <div className={styles.videoSection}>
            <p className={styles.videoLabel}>Lesson Video</p>
            <div className={styles.videoWrapper}>
              <iframe
                key={activeLesson}
                src={lesson.videoUrl}
                title={lesson.title}
                className={styles.videoFrame}
                allow="autoplay"
                allowFullScreen
              />
            </div>
            <p className={styles.videoNote}>💡 Click the video to play. Opens in Google Drive for best quality.</p>
          </div>

          {/* PDF */}
          <div className={styles.downloadSection}>
            <p className={styles.downloadLabel}>Downloadable Material</p>
            <a href={lesson.pdfUrl} download={lesson.pdfName} target="_blank" rel="noreferrer" className={styles.pdfBtn}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 16l-4-4h3V4h2v8h3l-4 4z" fill="currentColor"/>
                <path d="M4 18h16v2H4v-2z" fill="currentColor"/>
              </svg>
              Download Lesson Workbook (PDF)
            </a>
          </div>

          {/* QUIZ */}
          <QuizSection lessonIndex={activeLesson} />

          {/* ACTIONS */}
          <div className={styles.actions} style={{ marginTop:52 }}>
            <button
              className={[styles.completeBtn, completed.has(activeLesson)?styles.completeBtnDone:''].filter(Boolean).join(' ')}
              onClick={() => toggleComplete(activeLesson)}
            >
              {completed.has(activeLesson) ? '✓ Lesson Complete' : 'Mark as Complete'}
            </button>
            {activeLesson < LESSONS.length - 1 && (
              <button
                className={styles.nextBtn}
                onClick={() => { toggleComplete(activeLesson); setActiveLesson(activeLesson+1); window.scrollTo({top:0,behavior:'smooth'}); }}
              >
                Next Lesson →
              </button>
            )}
          </div>

          {/* CERTIFICATE — only on last lesson */}
          {activeLesson === LESSONS.length - 1 && (
            <CertificateSection progressPercent={progressPercent} totalLessons={LESSONS.length} />
          )}

          {/* SUPPORT */}
          <div style={{ marginTop:68, borderTop:'1px solid #e8e4dc', paddingTop:56 }}>
            <p style={{ fontSize:'11px', fontWeight:700, letterSpacing:'0.22em', textTransform:'uppercase', color:'#c9a96e', marginBottom:16 }}>
              Need Support With Your Voice?
            </p>
            <p style={{ fontFamily:'Georgia,serif', fontSize:'clamp(1.1rem,2.2vw,1.4rem)', fontWeight:400, color:'#1a1a1a', marginBottom:16, lineHeight:1.4 }}>
              Need Support With Your Voice?
            </p>
            <p style={{ fontSize:'14px', color:'#777', marginBottom:36, lineHeight:1.9, maxWidth:520 }}>
              If something feels unclear or you want to improve faster, you can reach out to me directly.
              I personally review messages and guide students who are serious about improving their voice.
            </p>
            <div style={{ display:'flex', gap:24, flexWrap:'wrap', marginBottom:20 }}>
              <a href="https://wa.me/17786366633" target="_blank" rel="noreferrer"
                style={{ display:'inline-block', background:'#25D366', color:'#fff', fontFamily:'inherit', fontSize:'11px', fontWeight:700, letterSpacing:'0.16em', textTransform:'uppercase', padding:'15px 36px', textDecoration:'none', borderRadius:2 }}>
                Message me on WhatsApp
              </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@sevilvelsha.com"
  target="_blank"
  style={{ display:'inline-block', background:'#fff', color:'#1a1a1a', border:'1.5px solid #1a1a1a', fontFamily:'inherit', fontSize:'11px', fontWeight:700, letterSpacing:'0.16em', textTransform:'uppercase', padding:'15px 36px', textDecoration:'none', borderRadius:2 }}>
  info@sevilvelsha.com
</a>
            </div>
            <p style={{ fontSize:'12px', color:'#aaa', margin:0 }}>I reply within 24 hours.</p>
          </div>

        </main>
      </div>
    </div>
  );
}