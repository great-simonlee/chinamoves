import React from 'react';
import { useHistory } from 'react-router';
import styles from './footer.module.css';

const Footer = (props) => {
    const history = useHistory();

    return (
        <footer className={ styles.footer }>
            <div className={ styles.footerInfo }>
                <section className={ styles.info }>
                    <span className={ styles.title }>关于我们</span>
                    <span className={ styles.contents } onClick={ () => { history.push("/chinamoves/aboutus") } }>公司简介</span>
                    <span className={ styles.contents }>金牌经纪人</span>
                    <span className={ styles.contents }>招贤纳士</span>
                </section>
                <section className={ styles.info }>
                    <span className={ styles.title }>房源</span>
                    <span className={ styles.contents }>波士顿</span>
                    <span className={ styles.contents }>纽约-曼哈顿</span>
                    <span className={ styles.contents }>其他城市</span>
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
                    <span className={ styles.closureItem }>Terms of Service</span>
                    <span className={ styles.closureItem }>Privacy Policy</span>
                    <span className={ styles.closureItem }>Responsible Disclosure</span>
                </div>
            </div>
        </footer>
    )};

export default Footer;