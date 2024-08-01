"use client";

import React from "react";
import {CardImageContainer, Content, NewsCardContainer, Title, Tag, TagsContainer, Text, Date} from "./style"
import { NewsCardProps } from "@/types/enums";

const CardImage = ({
  imageUrl,
  className,
  tags,
}: {
  className?: string;
  imageUrl?: string;
  tags?: string[];
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

const NewsCard: React.FC<NewsCardProps> = (props: any) => {
  return (
    <>
    <NewsCardContainer key={props?.index} className={`d-flex flex-column ${props?.className}`}>
    <CardImage className="d-flex flex-column justify-content-end" imageUrl={props?.image} tags={props?.category} />
    <Content className="news-card__content d-flex flex-column">
      <Title dangerouslySetInnerHTML={{ __html: `<a href="${process.env.NEXT_PUBLIC_HOME_URL}/noticias/${props?.nid}">${props?.title}</a>` }} />
      <Text
        dangerouslySetInnerHTML={{ __html: props?.description }}
      />
      <Date dangerouslySetInnerHTML={{ __html: props?.date }} />
    </Content>
  </NewsCardContainer></>
  );
};

export default NewsCard;
