import { useEffect, useState } from "react";
import axios from "axios";
import { Post, PostArray } from "../schemas/Post";

export const useFetchPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );

        const data = PostArray.parse(response.data);
        setPosts(data);
      } catch (err: any) {
        setError(`Erro ao buscar dados: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { posts, error, loading };
};
