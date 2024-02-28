import { ProductCard } from "../../../components/Elements/ProductCard";
import { useFetch } from "../../../hooks/useFetch";

export const FeaturedProducts = () => {
  const { data } = useFetch("http://localhost:3001/featured_products");
  return (
    <section className="my-20">
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">
        Featured eBooks
      </h1>
      <div className="flex flex-wrap justify-center lg:flex-row">
        {data.map((product) => (<ProductCard key={product.id} product={product} />))}
      </div>
    </section>
  );
};
