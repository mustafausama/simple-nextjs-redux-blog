import styled from 'styled-components';

export const PostsWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  width: 100%;
  margin: 30px 0;
`;

export const PostCard = styled.div`
  background-color: #0984e3;
  padding: 20px;
  width: 300px;
  height: 300px;
  margin: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 20px;
  overflow: hidden;
`;

export const PostCardText = styled.div`
  font-size: 1.2em;
  color: #fff;
`;

export const PostCardFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const PostCardFooterText = styled.div`
  color: #fff;
`;
