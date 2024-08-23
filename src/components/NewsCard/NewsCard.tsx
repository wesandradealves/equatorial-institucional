"use client";

import React from "react";
import {CardImageContainer, Content, NewsCardContainer, Title, Tag, TagsContainer, Text, Date} from "./style"

export default function NewsCard(props: any) {
  return (
    <NewsCardContainer className={`d-flex flex-column ${props?.className}`}>
      <CardImageContainer className="d-flex flex-column justify-content-end" style={{ backgroundImage: `url(${props?.image})` }}>
        {props?.category && (
          <TagsContainer className="d-flex align-items-center flex-wrap">
            {props?.category.map((tag: any, index: any) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </TagsContainer>
        )}
      </CardImageContainer>

      <Content className="news-card__content d-flex flex-column">
        <Title dangerouslySetInnerHTML={{ __html: `<a href="${process.env.NEXT_PUBLIC_HOME_URL}/noticias/${props?.nid}">${props?.title}</a>` }} />
        <Text
          dangerouslySetInnerHTML={{ __html: props?.description }}
        />
        <Date dangerouslySetInnerHTML={{ __html: props?.date }} />
      </Content>
    </NewsCardContainer>
  );
};