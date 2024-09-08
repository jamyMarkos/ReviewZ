import useFetch from "../hooks/useFetch";

export default function Home() {
  const { data, loading, error } = useFetch(
    "http://localhost:1337/api/products"
  );

  console.log("object", data);
  const products = data?.data ?? [];

  // Handle loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // Handle error
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {data?.data.map((product: any) => (
          <li key={product.id}>
            {product.attributes.title} - {product.attributes.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
