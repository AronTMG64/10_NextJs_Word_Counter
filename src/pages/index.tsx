import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'

export default function Home() {
  const [chars, setChars] = useState('');
  const [words, setWords] = useState<string[]>([]);

  useEffect(() => {
    if (chars.trim() === '') {
      setWords([]);
    } else {
      const wordList = chars.trim().split(/\s+/);
      setWords(wordList);
    }
  }, [chars]);

  const totalCharacters: number = chars.length;
  const charactersExcludingBlanks: number = chars.replace(/\s+/g, '').length;

  return (
    <main className="max-w-3xl mx-auto p-8">
      <textarea
        className="w-full border border-gray-300 rounded p-2 mb-4"
        onChange={e => setChars(e.target.value)}
        placeholder='Type here...'
      ></textarea>
      <h2 className="text-xl font-bold">Words: {words.length}</h2>
      <h2 className="text-xl font-bold">Characters including blanks: {totalCharacters}</h2>
      <h2 className="text-xl font-bold">Characters excluding blanks: {charactersExcludingBlanks}</h2>
    </main>
  );
};