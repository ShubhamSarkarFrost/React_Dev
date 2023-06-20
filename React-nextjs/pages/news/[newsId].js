//our-domain.com/news/something-important
import { useRouter } from 'next/router';

function DetailPage() {
    const router = useRouter();

    const pathId = router.query.newsId;
    return <h1> The {pathId} Page</h1>
}



export default DetailPage;