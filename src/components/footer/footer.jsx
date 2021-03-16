import React from 'react';
import styles from './footer.module.css';

const Footer = (props) => (
        <footer className={ styles.footer }>
            <div className={ styles.footerInfo }>
                <section className={ styles.info }>
                    <span className={ styles.contents }>关于我们</span>
                    <span className={ styles.contents }><a href="#">公司简介</a></span>
                    <span className={ styles.contents }><a href="#">金牌经纪人</a></span>
                    <span className={ styles.contents }><a href="#">招贤纳士</a></span>
                </section>
                <section className={ styles.info }>
                    <span className={ styles.contents }>房源</span>
                    <span className={ styles.contents }><a href="#">波士顿</a></span>
                    <span className={ styles.contents }><a href="#">纽约-曼哈顿</a></span>
                    <span className={ styles.contents }><a href="#">其他城市</a></span>
                </section>
                <section className={ styles.info }>
                    <span className={ styles.contents }>联系我们</span>
                </section>
            </div>
            <div className={ styles.closure }>
                <p>
                    <span>Copyright NEW YORK MOVES TEAM, LLC. All Rights Reserved.</span>
                </p>
                <div>
                    <a className={ styles.closureItem } href="#"><span>Terms of Service</span></a>
                    <a className={ styles.closureItem } href="#"><span>Privacy Policy</span></a>
                    <a className={ styles.closureItem } href="#"><span>Responsible Disclosure</span></a>
                </div>
            </div>
        </footer>
    );

export default Footer;