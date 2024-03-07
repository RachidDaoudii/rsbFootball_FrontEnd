import Header from "@/components/Header/2";
import Footer from "@/components/footer";
import img from "@/styles/images/category/category.jpg";
import Image from "next/image";
import Link from "next/link";
import Category from "@/components/categoryPlayer"
import {useServiceCategory} from "@/pages/api/club/categories/serviceCategory"
const Categories = () =>{

    const { dataCategorie,
        errorCategorie,
        refetchCategorie,
        isSuccessCategorie} = useServiceCategory()
return(
    <>
    <Header/>

    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-4 lg:py-8 mx-auto">
        <div className="grid lg:grid-cols-2 gap-6">
            {dataCategorie && dataCategorie.map((category,i)=>(
                <Category categories={category}/>
            ))}
            
        </div>
    </div>

    <div className="relative">
        <div className="inset-x-0 bottom-0">
            <Footer/>
        </div>
    </div>
    </>
)
}
export default Categories;