import styles from './index.module.scss';
import './style.css';

export const HeaderMenu = () => {
  return (
    <div className={styles.headerMenu}>
      <div className={styles.headerMenuContainer}>
        <div className={styles.headerMenuInner}>
          <div className={styles.headerMenuInnerWrap}>
            <div className={styles.headerMenuInnerClearfix}>
              <div className={styles.menuWrap}>
                <div className={styles.menuMenu}>
                  <nav className={styles.menuNav}>
                    <ul className={styles.menuList}>
                      <li className={styles.menuListItem}>
                        <a href='https://seoulpi.co.kr/category/real-estate/'>
                          REAL ESTATE
                        </a>
                        <ul className={styles.subMenuList}>
                          <li className={styles.subMenuListItem}>
                            <a href='https://seoulpi.co.kr/category/real-estate/investment/'>
                              INVESTMENT
                            </a>
                          </li>
                          <li className={styles.subMenuListItem}>
                            <a href='https://seoulpi.co.kr/category/real-estate/overseas/'>
                              OVERSEAS
                            </a>
                          </li>
                          <li className={styles.subMenuListItem}>
                            <a href='https://seoulpi.co.kr/category/real-estate/workplace/'>
                              WORKPLACE
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className={styles.menuListItem}>
                        <a href='https://seoulpi.co.kr/category/reits/'>
                          REITs
                        </a>
                      </li>
                      <li className={styles.menuListItem}>
                        <a href='https://seoulpi.co.kr/category/tech/'>TECH</a>
                      </li>
                      <li className={styles.menuListItem}>
                        <a href='https://seoulpi.co.kr/category/tech/'>TECH</a>
                      </li>
                      <li className={styles.menuListItem}>
                        <a href='https://seoulpi.co.kr/category/space/'>
                          SPACE
                        </a>
                      </li>
                      <li className={styles.menuListItem}>
                        <a href='https://seoulpi.co.kr/category/sustainability/'>
                          SUSTAINABILITY
                        </a>
                      </li>
                      <li className={styles.menuListItem}>
                        <a href='https://seoulpi.co.kr/category/research/'>
                          RESEARCH
                        </a>
                      </li>
                      <li className={styles.menuListItem}>
                        <a href='#'>DATA</a>
                      </li>
                      <li className={styles.menuListItem}>
                        <a href='#'>MORE</a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <button className='et_pb_menu__icon et_pb_menu__search-button'></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
