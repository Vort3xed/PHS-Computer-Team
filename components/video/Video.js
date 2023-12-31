import { useCallback, useEffect, useState } from 'react';
import styles from './Video.module.css';

function Video() {
  const [video, setVideo] = useState('design');
  const [documentWidth, setDocumentWidth] = useState(0);

  useEffect(() => {
    setDocumentWidth(document.documentElement.clientWidth);
  }, []);

  const VideoPlay = useCallback((src) => {
    setVideo(src);
    document.getElementById('videoContainer').style.opacity = 1;
    document.getElementById('video').play();
  }, []);

  const VideoPause = useCallback(() => {
    document.getElementById('videoContainer').style.opacity = 0;
    document.getElementById('video').pause();
    setVideo('');
  }, []);

  const Heading = useCallback(
    ({ src, text }) => {
      return (
        <h1
          onMouseEnter={() => {
            VideoPlay(src);
          }}
          onMouseLeave={VideoPause}
          onTouchStart={() => {
            VideoPlay(src);
          }}
        >
          {text}
        </h1>
      );
    },
    [VideoPause, VideoPlay]
  );

  return (
    <section className={styles.video}>
      {documentWidth >= 600 && (
        <div id="videoContainer" className={styles.designVideoContainer}>
          <video
            src="/video/explore.mp4"
            autoPlay
            muted
            loop
            controls={false}
            id="video"
            className={
              video === 'explore' ? 'w-screen opacity-100' : 'w-0 opacity-0'
            }
          >
            <track kind="captions" />
          </video>
          <video
            src="/video/learn.mp4"
            autoPlay
            muted
            loop
            controls={false}
            id="video"
            className={
              video === 'learn' ? 'w-screen opacity-100' : 'w-0 opacity-0'
            }
          >
            <track kind="captions" />
          </video>
          <video
            src="/video/code.mp4"
            autoPlay
            muted
            loop
            controls={false}
            id="video"
            className={
              video === 'code' ? 'w-screen opacity-100' : 'w-0 opacity-0'
            }
          >
            <track kind="captions" />
          </video>
        </div>
      )}

      <div className={styles.content}>
        {documentWidth >= 600 ? (
          <>
            <Heading src="explore" text="Learn." />
            <Heading src="learn" text="Code." />
            <Heading src="code" text="Compete." />
          </>
        ) : (
          <>
            <h1>Learn.</h1>
            <h1>Code.</h1>
            <h1>Compete.</h1>
          </>
        )}
      </div>
    </section>
  );
}

export default Video;
