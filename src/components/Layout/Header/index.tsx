import classNames from 'classnames';
import styles from './index.module.scss';

export const Header = () => {
  return (
    <div id={styles.pageContainer}>
      <header className={styles.header}>
        <div className={styles.innerContent}>
          <div className={styles.topBottomPadding}>
            <div className={styles.leftRightPadding}>
              <div className={styles.headerContentWrap}>
                <div className={styles.headerContent}>
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
                  <ul className={styles.socialMediaFollow}>
                    <li
                      className={classNames(
                        styles.socialMediaFollowLink,
                        styles.socialInstagram
                      )}
                    >
                      <a
                        href='https://www.instagram.com/seoulpropertyinsight/'
                        title='인스타그램 팔로 잉'
                        target='_blank'
                        rel='noreferrer'
                      >
                        <span
                          className={styles.socialMediaFollowNetworkName}
                          aria-hidden
                        >
                          팔로우
                        </span>
                      </a>
                    </li>
                    <li
                      className={classNames(
                        styles.socialMediaFollowLink,
                        styles.socialLinkedin
                      )}
                    >
                      <a
                        href='https://www.linkedin.com/in/seoul-property-insight-spi-91686b190/'
                        title='LinkedIn 팔로 잉'
                        target='_blank'
                        rel='noreferrer'
                      >
                        <span
                          className={styles.socialMediaFollowNetworkName}
                          aria-hidden
                        >
                          팔로우
                        </span>
                      </a>
                    </li>
                    <li
                      className={classNames(
                        styles.socialMediaFollowLink,
                        styles.socialFacebook
                      )}
                    >
                      <a
                        href='https://www.facebook.com/profile.php?id=100067101784808'
                        title='Facebook 팔로 잉'
                        target='_blank'
                        rel='noreferrer'
                      >
                        <span
                          className={styles.socialMediaFollowNetworkName}
                          aria-hidden
                        >
                          팔로우
                        </span>
                      </a>
                    </li>
                    <li
                      className={classNames(
                        styles.socialMediaFollowLink,
                        styles.socialTwitter
                      )}
                    >
                      <a
                        href='https://twitter.com/SPI45323666'
                        title='Twitter 팔로 잉'
                        target='_blank'
                        rel='noreferrer'
                      >
                        <span
                          className={styles.socialMediaFollowNetworkName}
                          aria-hidden
                        >
                          팔로우
                        </span>
                      </a>
                    </li>
                    <li
                      className={classNames(
                        styles.socialMediaFollowLink,
                        styles.socialYoutube
                      )}
                    >
                      <a
                        href='https://www.youtube.com/channel/UCA_IYvxjOsjGJ7-CnfsIScA'
                        title='Youtube 팔로 잉'
                        target='_blank'
                        rel='noreferrer'
                      >
                        <span
                          className={styles.socialMediaFollowNetworkName}
                          aria-hidden
                        >
                          팔로우
                        </span>
                      </a>
                    </li>
                  </ul>
                  <div className={styles.menuWrap}>
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
                  <div className={styles.buttonWrap}>
                    <a
                      href='https://seoulpi.co.kr/membership/'
                      className={styles.headerButton}
                    >
                      MEMBERSHIP
                    </a>
                  </div>
                  <div className={styles.languageSwitcher}>
                    <div className={styles.textInner}>
                      <p>
                        <strong>KOR</strong>
                        <strong>|</strong>
                        <a href='https://en.seoulpi.co.kr'>ENG</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
