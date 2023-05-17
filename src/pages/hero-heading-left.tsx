import { FunctionComponent } from "react";
import styles from "./hero-heading-left-modified.module.css";
const HeroHeadingLeftModified: FunctionComponent = () => {
  return (
    <div className={styles.heroHeadingLeftModified}>
      <article className={styles.container}>
        <div className={styles.column}>
          <div className={styles.content}>
            <h1 className={styles.h1TitleCopyGoes}>
              Title Copy Goes Here Be Awesome
            </h1>
            <div className={styles.pLoremIpsumDolor}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </div>
          </div>
          <div className={styles.actions}>
            <div className={styles.button}>
              <div className={styles.getStarted}>GET STARTED</div>
            </div>
          </div>
        </div>
        <img className={styles.columnIcon} alt="" src="/column@2x.png" />
      </article>
    </div>
  );
};

export default HeroHeadingLeftModified;
