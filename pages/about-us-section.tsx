import type { NextPage } from "next";
import styles from "./about-us-section.module.css";
const AboutUsSection: NextPage = () => {
  return (
    <a className={styles.aboutUsSection}>
      <div className={styles.aboutUs}>
        <div className={styles.content}>
          <img
            className={styles.placeholderImage}
            alt=""
            src="/placeholder--image3@2x.png"
          />
          <div className={styles.column}>
            <div className={styles.content1}>
              <div className={styles.sectionTitle}>
                <b className={styles.subheading}>About</b>
                <div className={styles.content2}>
                  <b className={styles.heading}>Discover Adórame</b>
                </div>
              </div>
              <div className={styles.carrousel2}>
                <div className={styles.cardParent}>
                  <div className={styles.card}>
                    <div className={styles.header}>
                      <b className={styles.text}>INNOVATION</b>
                    </div>
                    <div className={styles.content3}>
                      <div className={styles.header1}>
                        <div
                          className={styles.text1}
                        >{`Adórame's revolutionised the way people think about skincare with innovative technology and personalised approach, helping patients achieve a healthier, more radiant skin.  `}</div>
                      </div>
                    </div>
                    <div className={styles.text2}>Learn more</div>
                  </div>
                  <div className={styles.card}>
                    <div className={styles.header}>
                      <b className={styles.text}>EXPERTISE</b>
                    </div>
                    <div className={styles.content3}>
                      <div className={styles.header1}>
                        <div className={styles.text4}>
                          <p className={styles.unlikeOneTimeCosmetic}>
                            Unlike one-time cosmetic products, Adorame's
                            solutions are designed to provide ongoing care and
                            support. By using skinscience and area expertise
                            which offers patients customized analysis
                          </p>
                          <p
                            className={styles.unlikeOneTimeCosmetic}
                          >{`and recommendations from their trusted skincare experts, ensuring they always receive the best possible care. `}</p>
                        </div>
                      </div>
                    </div>
                    <div className={styles.text5}>Learn more</div>
                  </div>
                </div>
                <div className={styles.cardParent}>
                  <div className={styles.card}>
                    <div className={styles.header}>
                      <b className={styles.text}>TRACKING APP</b>
                    </div>
                    <div className={styles.content3}>
                      <div className={styles.header5}>
                        <div
                          className={styles.text1}
                        >{`Adorame App allows patients to receive tailored treatment plans based on their individual skin data and track their progress over time within patient's subsription plan. `}</div>
                      </div>
                    </div>
                    <div className={styles.text2}>Learn more</div>
                  </div>
                  <div className={styles.card}>
                    <div className={styles.header}>
                      <b className={styles.text}>MICRONEEDLES</b>
                    </div>
                    <div className={styles.content3}>
                      <div className={styles.header1}>
                        <div className={styles.text4}>
                          <p className={styles.unlikeOneTimeCosmetic}>
                            With efficient, personalized, cost-effective, and
                            painless skincare solutions, Adorame's innovative
                            microneedle technology enables treatments to be
                            delivered to multiple skin areas, including those
                            that are difficult to
                          </p>
                          <p className={styles.unlikeOneTimeCosmetic}>
                            {" "}
                            reach with traditional methods.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className={styles.text5}>Learn more</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.down}>
          <img className={styles.arrowUpIcon} alt="" src="/arrowup.svg" />
        </div>
      </div>
      <img className={styles.aboutUsSectionChild} alt="" src="/line-11.svg" />
    </a>
  );
};

export default AboutUsSection;
