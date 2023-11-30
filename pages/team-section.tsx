import type { NextPage } from "next";
import styles from "./team-section.module.css";
const TeamSection: NextPage = () => {
  return (
    <div className={styles.teamSection}>
      <div className={styles.sectionBackground}>
        <div className={styles.sectionBackgroundChild} />
        <div className={styles.sectionBackgroundItem} />
        <img className={styles.rectangleIcon} alt="" src="/rectangle@2x.png" />
      </div>
      <div className={styles.team}>
        <div className={styles.content}>
          <div className={styles.sectionTitle}>
            <div className={styles.content1}>
              <b className={styles.heading}>Our team</b>
            </div>
          </div>
          <div className={styles.content2}>
            <div className={styles.content3}>
              <div className={styles.row}>
                <div className={styles.card}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/mask-group@2x.png"
                  />
                  <div className={styles.content4}>
                    <div className={styles.title}>
                      <b className={styles.name}>Savaş Taşoğlu</b>
                      <b className={styles.jobTitle}>Co-founder</b>
                    </div>
                    <div className={styles.text}>
                      <p
                        className={styles.savaTaoluIs}
                      >{`Savaş Taşoğlu is an accomplished Associate Professor at Koç University in Turkey. `}</p>
                      <p className={styles.savaTaoluIs}>&nbsp;</p>
                      <p
                        className={styles.savaTaoluIs}
                      >{`His research focuses on micro and nanoscale heat transfer, thermal management, and microfluidics. `}</p>
                      <p className={styles.savaTaoluIs}>&nbsp;</p>
                      <p className={styles.savaTaoluIs}>
                        Dr. Taşoğlu has received numerous prestigious awards,
                        including the National Science Foundation CAREER Award
                        and the MIT Technology Review's Innovators Under 35
                        Award.
                      </p>
                      <p className={styles.savaTaoluIs}>&nbsp;</p>
                      <p className={styles.savaTaoluIs}>
                        He is also a dedicated educator and mentor in the field
                        of mechanical engineering.
                      </p>
                    </div>
                    <div className={styles.socialIconsParent}>
                      <div className={styles.socialIcons}>
                        <img
                          className={styles.iconLinkedin}
                          alt=""
                          src="/icon--linkedin1.svg"
                        />
                      </div>
                      <div className={styles.text1}>Show more</div>
                      <div className={styles.socialIcons}>
                        <img className={styles.iconLinkedin} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.card}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/mask-group1@2x.png"
                  />
                  <div className={styles.content4}>
                    <div className={styles.title}>
                      <b className={styles.name}>Misagh Rezapour Sarabi</b>
                      <b className={styles.jobTitle}>Co-founder</b>
                    </div>
                    <div className={styles.text}>
                      <p
                        className={styles.savaTaoluIs}
                      >{`As a Ph.D. student in the Department of Mechanical Engineering at Koç University, Misagh Rezapour Sarabi conducts research in the areas of control systems, robotics, and machine learning. `}</p>
                      <p className={styles.savaTaoluIs}>&nbsp;</p>
                      <p className={styles.savaTaoluIs}>
                        His work focuses on developing innovative methods and
                        algorithms for autonomous robotic systems, with
                        applications in areas such as healthcare and
                        agriculture.
                      </p>
                    </div>
                    <div className={styles.socialIconsParent}>
                      <div className={styles.socialIcons}>
                        <img
                          className={styles.iconLinkedin}
                          alt=""
                          src="/icon--linkedin1.svg"
                        />
                      </div>
                      <div className={styles.text1}>Show more</div>
                      <div className={styles.socialIcons}>
                        <img className={styles.iconLinkedin} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.card}>
                  <img
                    className={styles.placeholderImage}
                    alt=""
                    src="/placeholder--image1@2x.png"
                  />
                  <div className={styles.content4}>
                    <div className={styles.title}>
                      <b className={styles.name}>Ozan Berber</b>
                      <b className={styles.jobTitle}>Co-founder</b>
                    </div>
                    <div className={styles.text}>
                      Ozan Berber earned his Master's Degree at Koç University
                      GSB and HEC Paris as a graduate student of CEMS Master's
                      in International Management Program where his studies
                      focused on global strategy, innovation strategy, and
                      luxury brand management.
                    </div>
                    <div className={styles.socialIconsParent}>
                      <div className={styles.socialIcons}>
                        <img
                          className={styles.iconLinkedin}
                          alt=""
                          src="/icon--linkedin1.svg"
                        />
                      </div>
                      <div className={styles.text1}>Show more</div>
                      <div className={styles.socialIcons}>
                        <img className={styles.iconLinkedin} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.card}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/placeholder--image2@2x.png"
                  />
                  <div className={styles.content4}>
                    <div className={styles.title}>
                      <b className={styles.name}>Full name</b>
                      <b className={styles.jobTitle}>Job title</b>
                    </div>
                    <div className={styles.name}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique.
                    </div>
                    <div className={styles.socialIconsParent}>
                      <div className={styles.socialIcons}>
                        <img
                          className={styles.iconLinkedin}
                          alt=""
                          src="/icon--linkedin1.svg"
                        />
                      </div>
                      <div className={styles.text1}>Show more</div>
                      <div className={styles.socialIcons}>
                        <img className={styles.iconLinkedin} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.card}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/placeholder--image2@2x.png"
                  />
                  <div className={styles.content4}>
                    <div className={styles.title}>
                      <b className={styles.name}>Full name</b>
                      <b className={styles.jobTitle}>Job title</b>
                    </div>
                    <div className={styles.name}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique.
                    </div>
                    <div className={styles.socialIconsParent}>
                      <div className={styles.socialIcons}>
                        <img
                          className={styles.iconLinkedin}
                          alt=""
                          src="/icon--linkedin1.svg"
                        />
                      </div>
                      <div className={styles.text1}>Show more</div>
                      <div className={styles.socialIcons}>
                        <img className={styles.iconLinkedin} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.row1}>
                <div className={styles.card5}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/placeholder--image2@2x.png"
                  />
                  <div className={styles.content4}>
                    <div className={styles.content1}>
                      <b className={styles.name}>Full name</b>
                      <div className={styles.jobTitle5}>Job title</div>
                    </div>
                    <div className={styles.loremIpsumDolor}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique.
                    </div>
                  </div>
                  <div className={styles.socialIcons10}>
                    <img
                      className={styles.iconLinkedin}
                      alt=""
                      src="/icon--linkedin11.svg"
                    />
                    <img
                      className={styles.iconLinkedin}
                      alt=""
                      src="/icon--twitter1.svg"
                    />
                    <img
                      className={styles.iconLinkedin}
                      alt=""
                      src="/icon--dribble.svg"
                    />
                  </div>
                </div>
                <div className={styles.card5}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/placeholder--image2@2x.png"
                  />
                  <div className={styles.content4}>
                    <div className={styles.content1}>
                      <b className={styles.name}>Full name</b>
                      <div className={styles.jobTitle5}>Job title</div>
                    </div>
                    <div className={styles.loremIpsumDolor}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique.
                    </div>
                  </div>
                  <div className={styles.socialIcons10}>
                    <img
                      className={styles.iconLinkedin}
                      alt=""
                      src="/icon--linkedin11.svg"
                    />
                    <img
                      className={styles.iconLinkedin}
                      alt=""
                      src="/icon--twitter1.svg"
                    />
                    <img
                      className={styles.iconLinkedin}
                      alt=""
                      src="/icon--dribble.svg"
                    />
                  </div>
                </div>
                <div className={styles.card5}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/placeholder--image2@2x.png"
                  />
                  <div className={styles.content4}>
                    <div className={styles.content1}>
                      <b className={styles.name}>Full name</b>
                      <div className={styles.jobTitle5}>Job title</div>
                    </div>
                    <div className={styles.loremIpsumDolor}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique.
                    </div>
                  </div>
                  <div className={styles.socialIcons10}>
                    <img
                      className={styles.iconLinkedin}
                      alt=""
                      src="/icon--linkedin11.svg"
                    />
                    <img
                      className={styles.iconLinkedin}
                      alt=""
                      src="/icon--twitter1.svg"
                    />
                    <img
                      className={styles.iconLinkedin}
                      alt=""
                      src="/icon--dribble.svg"
                    />
                  </div>
                </div>
                <div className={styles.card5}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/placeholder--image2@2x.png"
                  />
                  <div className={styles.content4}>
                    <div className={styles.content1}>
                      <b className={styles.name}>Full name</b>
                      <div className={styles.jobTitle5}>Job title</div>
                    </div>
                    <div className={styles.loremIpsumDolor}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique.
                    </div>
                  </div>
                  <div className={styles.socialIcons10}>
                    <img
                      className={styles.iconLinkedin}
                      alt=""
                      src="/icon--linkedin11.svg"
                    />
                    <img
                      className={styles.iconLinkedin}
                      alt=""
                      src="/icon--twitter1.svg"
                    />
                    <img
                      className={styles.iconLinkedin}
                      alt=""
                      src="/icon--dribble.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className={styles.downIcon} alt="" src="/down1.svg" />
      </div>
      <img className={styles.teamSectionChild} alt="" src="/line-1.svg" />
    </div>
  );
};

export default TeamSection;
