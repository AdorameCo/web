import type { NextPage } from "next";
import styles from "./index.module.css";
const Footer: NextPage = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer1}>
        <div className={styles.content}>
          <div className={styles.newsletter}>
            <img className={styles.logoIcon} alt="" src="/logo.svg" />
            <div className={styles.text}>
              Join our newsletter to stay up to date on features and releases.
            </div>
            <div className={styles.actions}>
              <div className={styles.form}>
                <div className={styles.textInput}>
                  <div className={styles.placeholder}>Enter your email</div>
                </div>
                <div className={styles.button}>
                  <b className={styles.facebook}>Subscribe</b>
                </div>
              </div>
              <div className={styles.text1}>
                {`By subscribing you agree to with our `}
                <span className={styles.privacyPolicy}>Privacy Policy</span> and
                provide consent to receive updates from our company.
              </div>
            </div>
          </div>
          <div className={styles.links}>
            <div className={styles.column}>
              <b className={styles.text}>Column One</b>
              <div className={styles.footerLinks}>
                <div className={styles.link}>
                  <div className={styles.placeholder}>Link One</div>
                </div>
                <div className={styles.link}>
                  <div className={styles.placeholder}>Link Two</div>
                </div>
                <div className={styles.link}>
                  <div className={styles.placeholder}>Link Three</div>
                </div>
                <div className={styles.link}>
                  <div className={styles.placeholder}>Link Four</div>
                </div>
                <div className={styles.link}>
                  <div className={styles.placeholder}>Link Five</div>
                </div>
              </div>
            </div>
            <div className={styles.column}>
              <b className={styles.text}>Column Two</b>
              <div className={styles.footerLinks}>
                <div className={styles.link}>
                  <div className={styles.placeholder}>Link Six</div>
                </div>
                <div className={styles.link}>
                  <div className={styles.placeholder}>Link Seven</div>
                </div>
                <div className={styles.link}>
                  <div className={styles.placeholder}>Link Eight</div>
                </div>
                <div className={styles.link}>
                  <div className={styles.placeholder}>Link Nine</div>
                </div>
                <div className={styles.link}>
                  <div className={styles.placeholder}>Link Ten</div>
                </div>
              </div>
            </div>
            <div className={styles.column2}>
              <b className={styles.text}>Follow Us</b>
              <div className={styles.footerLinks}>
                <div className={styles.link20}>
                  <img
                    className={styles.iconFacebook}
                    alt=""
                    src="/icon--facebook.svg"
                  />
                  <div className={styles.facebook}>Facebook</div>
                </div>
                <div className={styles.link20}>
                  <img
                    className={styles.iconFacebook}
                    alt=""
                    src="/icon--instagram.svg"
                  />
                  <div className={styles.facebook}>Instagram</div>
                </div>
                <div className={styles.link20}>
                  <img
                    className={styles.iconFacebook}
                    alt=""
                    src="/icon--twitter.svg"
                  />
                  <div className={styles.facebook}>Twitter</div>
                </div>
                <div className={styles.link20}>
                  <img
                    className={styles.iconFacebook}
                    alt=""
                    src="/icon--linkedin.svg"
                  />
                  <div className={styles.facebook}>LinkedIn</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.credits}>
          <div className={styles.divider} />
          <div className={styles.row}>
            <div className={styles.facebook}>
              © 2023 Adórame. All rights reserved.
            </div>
            <div className={styles.footerLinks2}>
              <div className={styles.link24}>Privacy Policy</div>
              <div className={styles.link24}>Terms of Service</div>
              <div className={styles.link24}>Cookies Settings</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
