import Styles from './Glitter.module.css';

function BottomGlitter({ text }) {
  return (
    <div className={Styles.heading}>
      <h2 className={Styles.headingText}>{text}</h2>
      <span />
      <span />
    </div>
  );
}

export default BottomGlitter;
