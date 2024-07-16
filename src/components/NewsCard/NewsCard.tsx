"use client";

import React from "react";
import {CardImageContainer, Content, NewsCardContainer, ResponsiveTitle, Tag, TagsContainer, ResponsiveDescription, ResponsiveDate} from "./style"

const CardImage = ({
  imageUrl,
  className,
  tags,
}: {
  className?: string;
  imageUrl: string;
  tags: string[];
}) => {
  return (
    <CardImageContainer className={className} style={{ backgroundImage: `url(${imageUrl})` }}>
      {tags && (
        <TagsContainer className="d-flex align-items-center flex-wrap">
          {tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </TagsContainer>
      )}
    </CardImageContainer>
  );
};

interface NewsCardProps {
  title: string;
  className: string | null | undefined;
  description: string;
  image: string;
  link: string;
  date: string;
  category: Array<string>;
}

const NewsCard: React.FC<NewsCardProps> = (props: any) => {
  return (
    <NewsCardContainer className={`d-flex flex-column ${props?.className}`}>
      <CardImage className="d-flex flex-column justify-content-end" imageUrl={props?.image} tags={props?.category} />
      <Content className="news-card__content d-flex flex-column">
        <ResponsiveTitle dangerouslySetInnerHTML={{ __html: props?.title }} />
        <ResponsiveDescription
          dangerouslySetInnerHTML={{ __html: props?.description }}
        />
        <ResponsiveDate dangerouslySetInnerHTML={{ __html: props?.date }} />
      </Content>
    </NewsCardContainer>
  );
};

export default NewsCard;