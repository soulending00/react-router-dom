import PostsList from '../components/PostsList';
import { Outlet } from 'react-router-dom';

function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostsList />
      </main>
    </>
  );
}

export default Posts;

export const loader = async () => {
  const response = await fetch('http://localhost:8080/posts');
  const data = await response.json();
  return data.posts;
};
