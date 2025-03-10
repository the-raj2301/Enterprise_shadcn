// import { useState, useEffect } from 'react';
import './card.css';
import TextReveal from './TextReveal';

const Card = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center p-4 lg:p-2">
      <div className="w-full max-w-7xl rounded-lg dark:bg-conic/[from_var(--border-angle)] dark:from-neutral-900 dark:via-green-400 dark:to-orange-500
      bg-conic/[from_var(--border-angle)] from-neutral-100 via-green-500 to-orange-500
      from-90% via-95% to-100% animate-border-rotate p-px">
        <div className="py-20 md:py-52 rounded-lg text-center dark:text-white bg-white dark:bg-neutral-950">
            <div className="text-lg">
                <TextReveal />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Card
