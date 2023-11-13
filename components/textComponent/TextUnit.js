// import Image from 'next/image';
// import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
// import Style from './text-unit.module.css';

// ShadedBox.js
import React from 'react';
import styles from './text-unit.module.css';

function TextUnit({ header, subheader, text }){
  return (
    <div className={`bg-gray-200 p-4 rounded-lg shadow-lg ${styles.shadedBox}`}>
      <h3 className={`text-xl font-bold ${styles.header}`}>{header}</h3>
      <h2 className={`text-lg font-semibold text-gray-700 ${styles.subheader}`}>{subheader}</h2>
      <p className={`text-gray-600 ${styles.text}`}>{text}</p>
    </div>
  );
};

export default TextUnit;