import img from "@/styles/images/category/category.jpg";
import Image from "next/image";
import Link from "next/link";
import { categoriesPlayer } from "@/types";

const CategoryPlayer = ({categories}:{categories:categoriesPlayer})=>{
    return (<Link className="group relative block rounded-xl dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href={`/players/${categories.id}`}>
    <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:size-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]">
        <img className="size-full absolute top-0 start-0 object-cover" src={categories.image === null ? 'images/category/category.jpg' : 'images/category/category.jpg'} alt="Image Description"/>
    </div>
    <div className="absolute top-0 inset-x-0 z-1">
        <div className="p-4 flex flex-col h-full sm:p-6">
        {/* <!-- Avatar --> */}
        <div className="flex items-center">

            <div className="ms-2.5 sm:ms-4">
            <h4 className="font-semibold text-white">
                {categories?.name}
            </h4>
            </div>
        </div>
        {/* <!-- End Avatar --> */}
        </div>
    </div>
    </Link>)
}

export default CategoryPlayer;