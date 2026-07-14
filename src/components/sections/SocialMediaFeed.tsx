'use client';

import Image from 'next/image';
import { useLanguage } from '@/lib/LanguageContext';
import styles from './SocialMediaFeed.module.css';
import { FaTwitter, FaHeart, FaRetweet, FaComment, FaCheckCircle } from 'react-icons/fa';

const mockTweets = [
  {
    id: 1,
    text: 'Mathura Vrindavan Nagar Nigam has launched a new cleanliness drive across all 70 wards. We urge all citizens to cooperate and keep our holy city clean. #SwachhBharat #MathuraVrindavan',
    date: '2 hours ago',
    likes: 245,
    retweets: 56,
    hasImage: true,
    imageSrc: '/images/slider-1.png'
  },
  {
    id: 2,
    text: 'Important Update: Property tax collection counters will remain open this Sunday, 19th July, to facilitate easy payment for citizens. Pay online to avail 10% rebate.',
    date: '5 hours ago',
    likes: 120,
    retweets: 34,
    hasImage: false
  }
];

export default function SocialMediaFeed() {
  const { t } = useLanguage();

  return (
    <section className={styles.section} aria-labelledby="social-heading">
      <div className={styles.header}>
        <div className={styles.titleWrapper}>
          <div className={styles.iconWrapper}>
            <FaTwitter size={16} />
          </div>
          <h2 id="social-heading" className={styles.title}>
            {t('Social Connect', 'सोशल मीडिया')}
          </h2>
        </div>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.followBtn}>
          <FaTwitter size={14} /> {t('Follow Us', 'फॉलो करें')}
        </a>
      </div>

      <div className={styles.content}>
        <div className={styles.scrollingContent}>
          {mockTweets.map((tweet) => (
            <div key={tweet.id} className={styles.post}>
              <div className={styles.postHeader}>
                <div className={styles.avatar}>NN</div>
                <div className={styles.userInfo}>
                  <div className={styles.userName}>
                    Nagar Nigam Mathura <FaCheckCircle color="#1DA1F2" size={12} />
                  </div>
                  <div className={styles.handle}>@NagarNigam_MV • {tweet.date}</div>
                </div>
              </div>
              
              <p className={styles.postText}>{tweet.text}</p>
              
              {tweet.hasImage && tweet.imageSrc && (
                <div className={styles.postImage}>
                  <Image src={tweet.imageSrc} alt="Tweet image" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: 'cover' }} />
                </div>
              )}
              
              <div className={styles.postFooter}>
                <div className={styles.action}>
                  <FaComment /> 12
                </div>
                <div className={styles.action}>
                  <FaRetweet /> {tweet.retweets}
                </div>
                <div className={styles.action}>
                  <FaHeart /> {tweet.likes}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
