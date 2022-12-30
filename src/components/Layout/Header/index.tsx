import classnames from 'classnames';
import styles from './index.module.scss';
import { HeaderMenu } from './Menu';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.innerContent}>
        <div className={styles.firstHeaderSection}>
          <div className={styles.firstHeaderContainer}>
            <div className={styles.firstHeaderContainerInner}>
              <div className={styles.logoWrap}>
                <a href='https://seoulpi.co.kr/'>
                  <span className={styles.imageWrap}>
                    <img
                      src='https://seoulpi.co.kr/wp-content/uploads/2021/02/SPI-whit-logo-1.svg'
                      alt='SPI white logo'
                    />
                  </span>
                </a>
              </div>
              <ul className={styles.socialMediaList}>
                <li
                  className={classnames(
                    styles.socialMediaListItem,
                    styles.socialInstagram
                  )}
                >
                  <a
                    href='https://www.instagram.com/seoulpropertyinsight/'
                    className={styles.icon}
                    title='인스타그램 팔로 잉'
                    target='_blank'
                    rel='noreferrer'
                  >
                    {/* before */}
                    <span className={styles.socialMediaName} aria-hidden>
                      팔로우
                    </span>
                  </a>
                </li>
                <li
                  className={classnames(
                    styles.socialMediaListItem,
                    styles.socialLinkedIn
                  )}
                >
                  <a
                    href='https://www.linkedin.com/in/seoul-property-insight-spi-91686b190/'
                    className={styles.icon}
                    title='LinkedIn 팔로 잉'
                    target='_blank'
                    rel='noreferrer'
                  >
                    {/* before */}
                    <span className={styles.socialMediaName} aria-hidden>
                      팔로우
                    </span>
                  </a>
                </li>
                <li
                  className={classnames(
                    styles.socialMediaListItem,
                    styles.socialFacebook
                  )}
                >
                  <a
                    href='https://www.facebook.com/profile.php?id=100067101784808'
                    className={styles.icon}
                    title='Facebook 팔로 잉'
                    target='_blank'
                    rel='noreferrer'
                  >
                    {/* before */}
                    <span className={styles.socialMediaName} aria-hidden>
                      팔로우
                    </span>
                  </a>
                </li>
                <li
                  className={classnames(
                    styles.socialMediaListItem,
                    styles.socialTwitter
                  )}
                >
                  <a
                    href='https://twitter.com/SPI45323666'
                    className={styles.icon}
                    title='Twitter 팔로 잉'
                    target='_blank'
                    rel='noreferrer'
                  >
                    {/* before */}
                    <span className={styles.socialMediaName} aria-hidden>
                      팔로우
                    </span>
                  </a>
                </li>
                <li
                  className={classnames(
                    styles.socialMediaListItem,
                    styles.socialYoutube
                  )}
                >
                  <a
                    href='https://www.youtube.com/channel/UCA_IYvxjOsjGJ7-CnfsIScA'
                    className={styles.icon}
                    title='Youtube 팔로 잉'
                    target='_blank'
                    rel='noreferrer'
                  >
                    {/* before */}
                    <span className={styles.socialMediaName} aria-hidden>
                      팔로우
                    </span>
                  </a>
                </li>
              </ul>
              <div className={styles.menuWrap}>
                <div className={styles.menuClearfix}>
                  <nav className={styles.menuNav}>
                    <ul className={styles.menuList}>
                      <li className={styles.menuListItem}>
                        <a href='https://seoulpi.co.kr/login/'>LOGIN</a>
                      </li>
                      <li className={styles.menuListItem}>
                        <a href='https://seoulpi.co.kr/spireg/'>REGISTER</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className={styles.subscribeButtonWrap}>
                <a
                  href='https://seoulpi.co.kr/membership/'
                  className={styles.subscribeButton}
                >
                  MEMBERSHIP
                </a>
              </div>
              <div className={styles.languageSwitcher}>
                <p>
                  <strong>KOR</strong>
                  <strong> | </strong>
                  <a href='https://en.seoulpi.co.kr'>ENG</a>
                </p>
                {/* <p>
              <a href='https://seoulpi.co.kr'>KOR</a>
              <strong>| ENG</strong>
            </p> */}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.lastHeaderSection}>
          <HeaderMenu />
        </div>
      </div>
    </header>
  );
};
