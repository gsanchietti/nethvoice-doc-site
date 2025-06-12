import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to configure',
    Svg: require('@site/static/img/easy.svg').default,
    description: (
      <>
        NethVoice is a PBX solution designed for simplicity, allowing you to configure telephony features
        quickly and intuitively. Its user-friendly interface and guided setup make it easy to deploy and manage, even without advanced technical skills.
      </>
    ),
    },
    {
    title: 'Multi-channel Support',
    Svg: require('@site/static/img/multichannel.svg').default,
    description: (
      <>
        NethVoice supports multiple communication channels out of the box:
        SIP phones, WebRTC, and mobile applications.

        Stay connected from anywhere and on any device.
      </>
    ),
  },
  {
    title: 'Open Source',
    Svg: require('@site/static/img/open_source.svg').default,
    description: (
      <>
        NethVoice is open source, giving you full transparency and flexibility.
        Contribute to the project, customize it to your needs, and benefit from a vibrant community.
      </>
    ),
  }
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
