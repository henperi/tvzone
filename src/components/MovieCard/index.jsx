/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { Text } from '../Text';
import { SizedBox } from '../SizedBox';

const StyledMovieCard = styled.div`
  background-color: #fff;
  border-radius: 25px;
  height: 420px;
  margin: 10px 0px;
  min-height: 40px;
  box-shadow: 2px 1px 12px -1px rgba(71.43206298351288, 89.78888556361198, 255, 0.45);
  overflow: hidden;
  margin-left: 3% !important;
  width: 350px;
  min-width: 265px;

  .img__container {
    height: 300px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f4f5f6;

    img {
      width: 100%;
    }
  }

  .body {
    padding: 20px;
  }
`;

/**
 * ProjectCard
 * @param {any} props
 * @returns {JSX.Element} ProjectCard
 */
export function MovieCard(props) {
  const { episode } = props;

  return (
    <StyledMovieCard {...props}>
      <div className="img__container">
        <img
          src={episode.image ? episode.image.medium : 'https://thumbs.gfycat.com/SizzlingSmallAbalone-size_restricted.gif'}
          alt={episode.name}
        />
      </div>
      <div className="body col">
        <div className="row row__mainAxis--spaceBetween">
          {episode.name && (
          <Text size={15} weight="bold">
            {episode.name.substring(3, 25)}
            {episode.name.length > 30 && '...'}
          </Text>
          )}
          <Text size={14} weight="bold">
            Season
            {' '}
            {episode.season}
            ,
            Ep
            {' '}
            {episode.number}
          </Text>
        </div>
        <SizedBox height={10} />
        {episode.summary && (
        <Text size={13} weight="bold">
          {episode.summary.substring(3, 120)}
          ...
        </Text>
        )}

      </div>
    </StyledMovieCard>
  );
}
