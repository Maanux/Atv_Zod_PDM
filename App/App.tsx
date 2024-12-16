import { Text, View, ScrollView, StyleSheet } from "react-native";
import { useFetchPosts } from "../hook/useFetchPosts";

export default function App() {
  const { posts, error, loading } = useFetchPosts();

  if (error)
    return (
      <View style={styles.container}>
        <Text style={styles.error}>{error}</Text>
      </View>
    );

  if (loading)
    return (
      <View style={styles.container}>
        <Text style={styles.loading}>Loading...</Text>
      </View>
    );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {posts.slice(0, 10).map((post) => (
        <View key={post.id} style={styles.card}>
          <Text style={styles.title}>Titulo: {post.title}</Text>
          <Text style={styles.body}>Descrição: {post.body}</Text>
          <Text>Id do Usuario: {post.userId}</Text>
          <Text>Id do Post: {post.id}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 10,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
  },
  card: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 15,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    padding: 10,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 5,
    fontSize: 16,
  },
  body: {
    marginBottom: 10,
    fontSize: 14,
    color: "#333",
  },
  error: {
    color: "red",
    fontSize: 16,
  },
  loading: {
    fontSize: 16,
  },
});
