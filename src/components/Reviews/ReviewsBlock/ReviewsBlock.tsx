'use client';

import React from 'react';

import { useInView } from 'react-intersection-observer';

import { FaRegUser } from 'react-icons/fa6';
import { RiAdminFill } from 'react-icons/ri';
import { FaStar } from 'react-icons/fa';

import styles from '@/components/Reviews/ReviewsBlock/ReviewsBlock.module.scss';

import ReviewsBlockSkeleton from '@/components/Reviews/ReviewsBlock/ReviewsBlockSkeleton/ReviewsBlockSkeleton';

type ReviewsType = {
  id: number;
  email: string;
  text: string;
  created: string;
  rate: number;
  role: string;
};

const ReviewsBlock: React.FC<ReviewsType> = (props: ReviewsType) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div ref={ref}>
      {inView ? (
        <div
          className={styles.block}
          style={{
            width: `${props.role === 'user' ? '100%' : '85%'}`,
          }}>
          <div className={styles.person}>
            <div className={styles.logo}>
              {props.role === 'user' ? (
                <FaRegUser className={styles.icon} />
              ) : (
                <RiAdminFill className={styles.icon} />
              )}
            </div>
            <div className={styles.info}>
              <div className={styles.title}>
                {props.role === 'user' ? props.email : 'Administrator'}
              </div>
              <div className={styles.text}>{props.text}</div>
            </div>
          </div>
          <div
            className={styles.about}
            style={{
              justifyContent: `${props.role === 'user' ? 'space-between' : 'center'}`,
            }}>
            {props.role === 'user' && (
              <div className={styles.rate}>
                {[...Array(5)].map((_, index: number) => {
                  return (
                    <FaStar
                      key={index}
                      className={styles.star}
                      color={index < props.rate ? '#ffc107' : '#e4e5e9'}
                    />
                  );
                })}
              </div>
            )}
            <div className={styles.date}>{props.created}</div>
          </div>
        </div>
      ) : (
        <ReviewsBlockSkeleton />
      )}
    </div>
  );
};

export default ReviewsBlock;
