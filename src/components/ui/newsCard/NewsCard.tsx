"use client";

import React from "react";
import styled from "styled-components";

const CardImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  border-radius: 8px;
  background-size: cover;
  background-position: center;
`;

// Estilizando as tags
const TagsContainer = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  display: flex; // Isso fará com que as tags fiquem em linha
`;

// Estilizando as tags com fundo branco e bordas arredondadas
const Tag = styled.span`
  background-color: white;
  padding: 5px;
  border-radius: 15px;
  font-size: 12px;
  margin-right: 5px; // Espaço entre as tags
`;

// Modificando o componente CardImage para aceitar props
const CardImage = ({
  imageUrl,
  tags,
}: {
  imageUrl: string;
  tags: string[];
}) => {
  return (
    <CardImageContainer style={{ backgroundImage: `url(${imageUrl})` }}>
      {tags && (
        <TagsContainer>
          {tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </TagsContainer>
      )}
    </CardImageContainer>
  );
};

const NewsCardContainer = styled.div`
  max-width: 300px;
`;
interface NewsCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  date: string;
  category: Array<string>;
}
const ResponsiveTitle = styled.div`
  padding-top: 5px;
  font-size: calc(16px + 1vmin);

  font-weight: bold;
  color: #0414a1;
`;
const ResponsiveDescription = styled.div`
  padding: 5px 0;
  font-size: calc(10px + 1vmin);
`;
const ResponsiveDate = styled.div`
  padding: 5px 0;
  font-size: calc(7px + 1vmin);
`;

const tags = ["Notícia", "Atualização", "Importante"];

const NewsCard: React.FC<NewsCardProps> = ({
  image,
  title,
  description,
  date,
  link,
  category,
}) => {
  const imageUrl = process.env.NEXT_PUBLIC_BASE_URL + image;
  return (
    <NewsCardContainer>
      <CardImage imageUrl={imageUrl} tags={category} />
      <div className="news-card__content">
        <ResponsiveTitle dangerouslySetInnerHTML={{ __html: title }} />
        <ResponsiveDescription
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <ResponsiveDate dangerouslySetInnerHTML={{ __html: date }} />
      </div>
    </NewsCardContainer>
  );
};

export default NewsCard;
