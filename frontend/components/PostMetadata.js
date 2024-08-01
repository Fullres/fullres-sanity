import { useEffect } from 'react';
import { fullres } from 'fullres-nextjs';

const PostMetadata = ({ authorSlug, categories }) => {
  useEffect(() => {
    fullres.metadata.postAuthor = authorSlug;
    fullres.metadata.postCategory = categories;
  }, [authorSlug, categories]);

  return null;
};

export default PostMetadata;
