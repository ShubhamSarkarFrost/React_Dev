//our-domain.com/news
import Link from 'next/link'
import { Fragment } from 'react';


function NewsPage() {
    return <Fragment>
        <h1> The News Page</h1>
        <ul>
              <li><Link href='/news/nextjs-great-framework'>Next Js is a Great Framework</Link></li>
            <li><Link href='/news/features-next-js'> Features of Next Js</Link></li>
            <li><Link href='/news/nextjs-different'>What Makes Next Js Different</Link></li>
        </ul>
    </Fragment>
}



export default NewsPage;