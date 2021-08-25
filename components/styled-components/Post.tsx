import styled from 'styled-components';

export const VPostDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px;
`;

export const PostDetailsHeading = styled.h1`
  text-transform: capitalize;
  width: 50%;
`;

export const PostHeader = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  justify-self: center;
`;

export const PostBody = styled.div`
  font-size: 1.5em;
  margin: 20px 0;
  width: 100%;
  border: solid 2px #000;
  padding: 15px;
`;

export const VComment = styled.div`
  padding: 20px;
  border-bottom: solid 2px #000;
  width: 100%;
`;
