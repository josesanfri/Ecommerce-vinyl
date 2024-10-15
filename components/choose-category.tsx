/* eslint-disable @next/next/no-img-element */
"use client";
import { useGetCategories } from "@/api/getProducts";
import Link from "next/link";
import { CategoryType } from "@/types/category";

const ChooseCategory = () => {
    const { result, loading } = useGetCategories();
    
    return (
        <section className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
            <h3 className="px-6 text-3xl sm:pb-8">Escoge tu categoría</h3>
            <article className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                {!loading &&  result !== undefined && (
                    result.map((category: CategoryType) => {    
                        const { id, categoryName, slug, mainImage: { url: image } } = category;
                        return (
                            <Link key={id} href={`/category/${slug}`} 
                                className="relative max-w-xs mx-auto rounded-lg bg-no-repeat bg-cover overflow-hidden rounded-lg"
                            >
                                <img 
                                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image}`} 
                                    alt={categoryName} 
                                    className="max-w-[270px] transition duration-300 ease-in-out rounded-lg hover:scale-110 hover:z-10"
                                />
                                <p className="absolute text-lg text-center text-white w-full py-2 bottom-5 backdrop-blur-sm">{categoryName}</p>
                            </Link>
                        )
                    })
                )}
            </article>
        </section>
    );
};

export default ChooseCategory;