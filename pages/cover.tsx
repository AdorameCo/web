import type { NextPage } from "next";
import styles from "./cover.module.css";
const Cover: NextPage = () => {
  return (
    <div className={styles.cover}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.column}>
            <div className={styles.content1}>
              <b className={styles.heading}>Adórame</b>
              <div
                className={styles.text}
              >{`Where skin science and technology meets. `}</div>
            </div>
            <img className={styles.image3Icon} alt="" src="/image-3@2x.png" />
          </div>
          <div className={styles.image4Parent}>
            <img className={styles.image4Icon} alt="" src="/image-4@2x.png" />
            <div className={styles.text1}>
              <p className={styles.adorameProvidesPersonalized}>
                <span
                  className={styles.adorameProvides}
                >{`Adorame provides `}</span>
                <b className={styles.adorameProvides}>
                  personalized skin care solutions
                </b>
                <span>
                  {" "}
                  based on unique skin data and extended analysis of our
                  customers daily skincare routine.
                </span>
              </p>
              <p className={styles.adorameProvidesPersonalized}>&nbsp;</p>
              <p className={styles.adorameProvidesPersonalized}>
                <span>{`Our cutting-edge technique offers `}</span>
                <b className={styles.adorameProvides}>customized skincare</b>
                <span className={styles.adorameProvides}>{` with `}</span>
                <b className={styles.adorameProvides}>high-tech microneedles</b>
                <span className={styles.adorameProvides}>
                  {" "}
                  designed for painless and bloodless drug injection, targeting
                  the most common skin problems and more.
                </span>
              </p>
            </div>
            <div className={styles.button}>
              <b className={styles.discorverAdrame}>Discorver Adórame</b>
            </div>
          </div>
        </div>
        <img className={styles.downIcon} alt="" src="/down.svg" />
      </div>
    </div>
  );
};

export default Cover;
