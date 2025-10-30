import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

export default function VersionFooter(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const productVersion = (siteConfig.customFields?.productVersion as string) || '8.0';

  return (
    <div className={styles.versionFooter}>
      <span className={styles.versionText}>
        NethVoice <span className={styles.versionNumber}>{productVersion}</span>
      </span>
    </div>
  );
}
