'use client'

import React, { useEffect, useState } from 'react'

export default function Text({ data }: { data: string }) {
  const [word, setWord] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    const typingAnimation = setInterval(() => {
      setWord((value) => {
        let result = value + data[count];
        setCount(count + 1);
        return result;
      });
    }, 100);
    count === data.length && clearInterval(typingAnimation);
    return () => clearInterval(typingAnimation);
  });

  return (
    <span className='text-black'>{word}</span>
  )
}
