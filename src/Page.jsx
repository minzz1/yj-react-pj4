import CarouselMain from "./components/CarouselMain";
import Layout from "./components/Layout";

 
export default function Page() {
    return ( 
        <Layout>
            {/* 메인 캐러셀 이미지 */}
            <div className="w-full">
            <CarouselMain />
            </div>
        </Layout>
    )
}