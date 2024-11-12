/* eslint-disable @next/next/no-img-element */
"use client";
import { useGetCategories } from "@/api/getProducts";
import Link from "next/link";
import { CategoryType } from "@/types/category";

const ChooseCategory = () => {
    const { result, loading } = useGetCategories();
    
    return (
        <section className="max-w-6xl py-4 mx-auto sm:py-8 sm:px-24">
            <h3 className="text-3xl pb-4 text-center">Escoge tu categoría</h3>
            <article className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                {!loading && result ? (
                    result.map((category: CategoryType) => {    
                        const { id, attributes } = category;
                        const { categoryName, slug, mainImage } = attributes;
                        return (
                            <Link key={id} href={`/category/${slug}`} 
                                className="relative max-w-xs mx-auto bg-no-repeat bg-cover overflow-hidden rounded-lg"
                            >
                                <img 
                                    src={`${mainImage.data.attributes.url}`} 
                                    alt={categoryName} 
                                    className="max-w-[270px] transition duration-300 ease-in-out rounded-lg hover:scale-110 hover:z-10"
                                />
                                <p className="absolute text-lg text-center text-white w-full py-2 bottom-5 backdrop-blur-sm">{categoryName}</p>
                            </Link>
                        );
                    })
                ) : null}
            </article>
        </section>
    );
};

export default ChooseCategory;